#!/usr/bin/env python3
"""Sync jobs from Feishu Bitable to jobs-data.json using v1 API."""
import json, os, re, requests

APP_ID = os.environ['FEISHU_APP_ID']
APP_SECRET = os.environ['FEISHU_APP_SECRET']
# Bitable app_token (same as BASE_TOKEN)
APP_TOKEN = 'YPSTbjYSGaKXvLsSQ3wcxilYnDd'
TABLE_ID = 'tblXG6CvIWsapTND'

PROXY = os.environ.get('https_proxy') or os.environ.get('HTTPS_PROXY') or ''
proxies = {'https': PROXY, 'http': PROXY} if PROXY else None

# Step 1: Get tenant access token
tr = requests.post(
    'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
    json={'app_id': APP_ID, 'app_secret': APP_SECRET},
    proxies=proxies, timeout=30,
)
tr.raise_for_status()
token_data = tr.json()
if token_data.get('code') != 0:
    print(f'Token error: {token_data}', file=os.sys.stderr)
    exit(1)
TOKEN = token_data['tenant_access_token']
print('Token acquired')

# Step 2: Fetch all records using v1 Bitable API
headers = {
    'Authorization': f'Bearer {TOKEN}',
    'Content-Type': 'application/json',
}
all_items = []
page_token = ''
while True:
    url = (
        f'https://open.feishu.cn/open-apis/bitable/v1/apps/{APP_TOKEN}'
        f'/tables/{TABLE_ID}/records?page_size=500'
    )
    if page_token:
        url += f'&page_token={page_token}'
    resp = requests.get(url, headers=headers, proxies=proxies, timeout=30)
    resp.raise_for_status()
    raw_text = resp.text
    try:
        body = resp.json()
    except json.JSONDecodeError as e:
        start = max(0, e.pos - 200)
        end = min(len(raw_text), e.pos + 200)
        print(f'JSON parse error at pos {e.pos}: {e}', file=os.sys.stderr)
        print(f'Raw near error: {repr(raw_text[start:end])}', file=os.sys.stderr)
        print(f'Response starts: {raw_text[:300]}', file=os.sys.stderr)
        exit(1)
    code = body.get('code', -1)
    if code != 0:
        print(f'API error: {body}', file=os.sys.stderr)
        exit(1)
    data = body.get('data', {})
    items = data.get('items', [])
    all_items.extend(items)
    if not data.get('has_more'):
        break
    page_token = data.get('page_token', '')

print(f'Fetched {len(all_items)} rows')

# Step 3: Convert record format to website format
jobs = []
for item in all_items:
    fields = item.get('fields', {})
    record_id = item.get('record_id', '')

    company = fields.get('公司', '') or ''
    position = fields.get('岗位', '') or ''
    if not company or not position:
        continue

    # City
    cv = fields.get('城市', '')
    city = ''
    if isinstance(cv, list) and len(cv) > 0:
        if isinstance(cv[0], dict):
            city = cv[0].get('text', '')
        else:
            city = str(cv[0])
    elif isinstance(cv, str):
        city = cv

    # Direction
    dirs = fields.get('研究方向', '') or ''
    dir_list = []
    if isinstance(dirs, list):
        dir_list = [str(d) for d in dirs if d]
    elif isinstance(dirs, str) and dirs.strip():
        dir_list = [dirs.strip()]
    dir_str = ','.join(dir_list)

    # Link
    link_val = fields.get('招聘链接', '') or ''
    link = None
    if isinstance(link_val, dict) and link_val.get('link'):
        link = link_val['link']
    elif isinstance(link_val, str):
        m = re.search(r'\]\(([^)]+)\)', link_val)
        if m:
            link = m.group(1)
        elif link_val.startswith('http'):
            link = link_val

    # Tags
    tags_str = fields.get('技能标签', '') or ''
    if isinstance(tags_str, list):
        tags = [str(t) for t in tags_str if t]
    else:
        tags = [t.strip() for t in str(tags_str).split(',') if t.strip()]

    # Source / community
    src = fields.get('来源', '') or ''
    if isinstance(src, list):
        community = len(src) > 0 and '社区提交' in [str(s) for s in src]
    else:
        community = str(src) == '社区提交'

    # Salary
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
print(f'Converted {len(jobs)} jobs')