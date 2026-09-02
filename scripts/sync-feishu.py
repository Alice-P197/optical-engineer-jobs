#!/usr/bin/env python3
"""Sync community jobs and validity data from Feishu Base (v3 columnar API).

This script exports:
  - community-jobs.json: only records marked as '社区提交'
  - validity.json: validity status for ALL records (base + community)
"""
import json, os, sys
import urllib.request
import urllib.error

APP_ID = os.environ['FEISHU_APP_ID']
APP_SECRET = os.environ['FEISHU_APP_SECRET']
BASE_TOKEN = 'YPSTbjYSGaKXvLsSQ3wcxilYnDd'
TABLE_ID = 'tblXG6CvIWsapTND'

def api(method, url, data=None, token=None):
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
        print('JSON error at %d: %s' % (e.pos, e), file=sys.stderr)
        print('Raw: %s' % raw[:1000], file=sys.stderr)
        exit(1)

# Step 1: Get tenant access token
print('Getting token...', file=sys.stderr)
td = api('POST',
    'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
    {'app_id': APP_ID, 'app_secret': APP_SECRET})
if td.get('code') != 0:
    print('Token error: %s' % td, file=sys.stderr)
    exit(1)
TOKEN = td['tenant_access_token']
print('Token OK', file=sys.stderr)

# Step 2: Fetch all records via v3 columnar API (paginated)
all_fields = []
all_rows = []
all_rids = []
page_token = ''
page = 1

while True:
    url = ('https://open.feishu.cn/open-apis/base/v3/bases/%s'
           '/tables/%s/records?page_size=500' % (BASE_TOKEN, TABLE_ID))
    if page_token:
        url += '&page_token=' + page_token
    print('Page %d...' % page, file=sys.stderr)
    body = api('GET', url, token=TOKEN)
    if body.get('code') != 0:
        print('API error: %s' % body, file=sys.stderr)
        exit(1)

    data = body.get('data', {})
    if not all_fields:
        all_fields = data.get('fields', [])
    rows = data.get('data', [])
    rids = data.get('record_id_list', [])
    all_rows.extend(rows)
    all_rids.extend(rids)
    print('  +%d rows (total %d)' % (len(rows), len(all_rows)), file=sys.stderr)

    page_token = data.get('page_token') or ''
    if not data.get('has_more') or not page_token:
        break
    page += 1

print('Fetched %d rows, %d fields' % (len(all_rows), len(all_fields)),
      file=sys.stderr)

# Build field index
fidx = {name: i for i, name in enumerate(all_fields)}

def get_field(f, row):
    i = fidx.get(f)
    if i is None or i >= len(row):
        return None
    return row[i]

# Step 3: Convert to job records
jobs = []
validity_updates = {}
for idx, row in enumerate(all_rows):
    company = get_field('公司', row) or ''
    position = get_field('岗位', row) or ''
    if not company or not position:
        continue

    rid = all_rids[idx] if idx < len(all_rids) else ''

    # Track validity from Feishu
    valid_field = get_field('有效性', row)
    if valid_field is not None:
        validity_updates[rid] = bool(valid_field)

    # city
    cv = get_field('城市', row)
    city = ''
    if isinstance(cv, list) and len(cv) > 0:
        city = str(cv[0])
    elif isinstance(cv, str):
        city = cv

    # direction
    dirs = get_field('研究方向', row) or []
    dir_list = dirs if isinstance(dirs, list) else ([dirs] if dirs else [])
    dir_str = ','.join(str(d) for d in dir_list if d)

    # link
    link_val = get_field('招聘链接', row) or ''
    link = None
    if isinstance(link_val, dict) and link_val.get('link'):
        link = link_val['link']
    elif isinstance(link_val, str):
        import re
        m = re.search(r'\]\(([^)]+)\)', link_val)
        if m:
            link = m.group(1)
        elif link_val.startswith('http'):
            link = link_val

    # tags
    tags_str = get_field('技能标签', row) or []
    if isinstance(tags_str, list):
        tags = [str(t) for t in tags_str if t]
    else:
        tags = [t.strip() for t in str(tags_str).split(',') if t.strip()]

    # source - sync ALL Feishu records to website
    src = get_field('来源', row) or []
    community = True  # All records from Feishu are synced

    # salary
    s_min = get_field('最低薪资K', row) or 0
    s_max = get_field('最高薪资K', row) or 0
    if isinstance(s_min, str):
        try: s_min = float(s_min)
        except ValueError: s_min = 0
    if isinstance(s_max, str):
        try: s_max = float(s_max)
        except ValueError: s_max = 0

    job = {
        'id': rid,
        'city': city,
        'company': company,
        'position': position,
        'dir': dir_str,
        'dirList': dir_list,
        'salary': get_field('薪资范围', row) or '面议',
        'sMin': s_min,
        'sMax': s_max,
        'edu': get_field('学历要求', row) or '未注明',
        'exp': get_field('经验要求', row) or '未注明',
        'date': get_field('发布日期', row) or '',
        'fresh': get_field('是否最新', row) == True,
        'desc': get_field('岗位描述', row) or '',
        'tags': tags,
        'link': link,
        'linkText': get_field('链接文字', row) or '查看详情',
        'email': get_field('邮箱', row) or None,
        'phone': get_field('电话', row) or None,
        'community': community,
    }
    jobs.append(job)

# Export all Feishu records as community jobs
with open('community-jobs.json', 'w') as fp:
    json.dump(jobs, fp, ensure_ascii=False, indent=2)
print('Saved %d jobs to community-jobs.json from Feishu' % len(jobs))

# Also export validity data for ALL records
# Read existing validity.json to preserve any local-only entries
existing_validity = {}
try:
    with open('validity.json', 'r') as fp:
        existing_validity = json.load(fp)
except (FileNotFoundError, json.JSONDecodeError):
    pass

# Merge: Feishu data wins for records that have validity data in Feishu
existing_validity.update(validity_updates)

with open('validity.json', 'w') as fp:
    json.dump(existing_validity, fp, ensure_ascii=False, indent=2)
print('Saved %d validity entries to validity.json' % len(existing_validity))