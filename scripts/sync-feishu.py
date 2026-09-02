#!/usr/bin/env python3
"""Sync jobs from Feishu Bitable to jobs-data.json using v1 API."""
import json, os, re, sys
import urllib.request
import urllib.error

APP_ID = os.environ['FEISHU_APP_ID']
APP_SECRET = os.environ['FEISHU_APP_SECRET']
APP_TOKEN = 'YPSTbjYSGaKXvLsSQ3wcxilYnDd'
TABLE_ID = 'tblXG6CvIWsapTND'

def api(method, url, data=None, token=None):
    """Call Feishu API with urllib, return parsed JSON."""
    headers = {'Content-Type': 'application/json; charset=utf-8'}
    if token:
        headers['Authorization'] = 'Bearer ' + token
    body = None
    if data is not None:
        body = json.dumps(data).encode('utf-8')
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        raw = resp.read().decode('utf-8')
    except urllib.error.HTTPError as e:
        raw = e.read().decode('utf-8')
        print('HTTP %d: %s' % (e.code, raw[:500]), file=sys.stderr)
        exit(1)
    try:
        return json.loads(raw)
    except json.JSONDecodeError as e:
        print('JSON parse error at pos %d: %s' % (e.pos, e), file=sys.stderr)
        print('Raw response (first 1000 chars):', file=sys.stderr)
        print(raw[:1000], file=sys.stderr)
        exit(1)

# Step 1: Get token
print('Getting token...', file=sys.stderr)
token_data = api('POST',
    'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
    {'app_id': APP_ID, 'app_secret': APP_SECRET})
if token_data.get('code') != 0:
    print('Token error: %s' % token_data, file=sys.stderr)
    exit(1)
TOKEN = token_data['tenant_access_token']
print('Token acquired', file=sys.stderr)

# Step 2: Fetch all records
all_items = []
page_token = ''
page = 1
while True:
    url = ('https://open.feishu.cn/open-apis/bitable/v1/apps/%s'
           '/tables/%s/records?page_size=500' % (APP_TOKEN, TABLE_ID))
    if page_token:
        url += '&page_token=' + page_token
    print('Page %d...' % page, file=sys.stderr)
    body = api('GET', url, token=TOKEN)
    code = body.get('code', -1)
    if code != 0:
        print('API error: %s' % body, file=sys.stderr)
        exit(1)
    data = body.get('data', {})
    items = data.get('items', [])
    all_items.extend(items)
    print('  Got %d items (total %d)' % (len(items), len(all_items)), file=sys.stderr)
    if not data.get('has_more'):
        break
    page_token = data.get('page_token', '')
    page += 1

print('Fetched %d rows' % len(all_items), file=sys.stderr)

# Step 3: Convert
jobs = []
for item in all_items:
    fields = item.get('fields', {})
    record_id = item.get('record_id', '')
    company = fields.get('公司', '') or ''
    position = fields.get('岗位', '') or ''
    if not company or not position:
        continue

    cv = fields.get('城市', '')
    city = ''
    if isinstance(cv, list) and len(cv) > 0:
        if isinstance(cv[0], dict):
            city = cv[0].get('text', '')
        else:
            city = str(cv[0])
    elif isinstance(cv, str):
        city = cv

    dirs = fields.get('研究方向', '') or ''
    dir_list = []
    if isinstance(dirs, list):
        dir_list = [str(d) for d in dirs if d]
    elif isinstance(dirs, str) and dirs.strip():
        dir_list = [dirs.strip()]
    dir_str = ','.join(dir_list)

    link_val = fields.get('招聘链接', '') or ''
    link = None
    if isinstance(link_val, dict) and link_val.get('link'):
        link = link_val['link']
    elif isinstance(link_val, str):
        m = __import__('re').search(r'\]\(([^)]+)\)', link_val)
        if m:
            link = m.group(1)
        elif link_val.startswith('http'):
            link = link_val

    tags_str = fields.get('技能标签', '') or ''
    if isinstance(tags_str, list):
        tags = [str(t) for t in tags_str if t]
    else:
        tags = [t.strip() for t in str(tags_str).split(',') if t.strip()]

    src = fields.get('来源', '') or ''
    if isinstance(src, list):
        community = len(src) > 0 and '社区提交' in [str(s) for s in src]
    else:
        community = str(src) == '社区提交'

    s_min = fields.get('最低薪资K', 0) or 0
    s_max = fields.get('最高薪资K', 0) or 0
    if isinstance(s_min, str):
        try:
            s_min = float(s_min)
        except ValueError:
            s_min = 0
    if isinstance(s_max, str):
        try:
            s_max = float(s_max)
        except ValueError:
            s_max = 0

    job = {
        'id': record_id,
        'city': city,
        'company': company,
        'position': position,
        'dir': dir_str,
        'dirList': dir_list,
        'salary': fields.get('薪资范围', '面议') or '面议',
        'sMin': s_min,
        'sMax': s_max,
        'edu': fields.get('学历要求', '未注明') or '未注明',
        'exp': fields.get('经验要求', '未注明') or '未注明',
        'date': fields.get('发布日期', '') or '',
        'fresh': fields.get('是否最新', False) == True,
        'desc': fields.get('岗位描述', '') or '',
        'tags': tags,
        'link': link,
        'linkText': fields.get('链接文字', '查看详情') or '查看详情',
        'email': fields.get('邮箱', '') or None,
        'phone': fields.get('电话', '') or None,
        'community': community,
    }
    jobs.append(job)

with open('jobs-data.json', 'w') as fp:
    json.dump(jobs, fp, ensure_ascii=False, indent=2)
print('Converted %d jobs' % len(jobs))