#!/usr/bin/env python3
"""Sync jobs from Feishu Base to jobs-data.json."""
import json, os, re, requests

APP_ID = os.environ['FEISHU_APP_ID']
APP_SECRET = os.environ['FEISHU_APP_SECRET']
BASE_TOKEN = 'YPSTbjYSGaKXvLsSQ3wcxilYnDd'
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

# Step 2: Fetch all records (single request - API returns all rows)
resp = requests.get(
    f'https://open.feishu.cn/open-apis/base/v3/bases/{BASE_TOKEN}'
    f'/tables/{TABLE_ID}/records?page_size=500',
    headers={'Authorization': f'Bearer {TOKEN}'},
    proxies=proxies, timeout=30,
)
resp.raise_for_status()
raw_text = resp.text
try:
    body = resp.json()
except json.JSONDecodeError as e:
    print(f'JSON parse error: {e}', file=os.sys.stderr)
    start = max(0, e.pos - 200)
    end = min(len(raw_text), e.pos + 200)
    print(f'Raw response near error (pos {e.pos}):',
          file=os.sys.stderr)
    print(repr(raw_text[start:end]), file=os.sys.stderr)
    print(f'Full response length: {len(raw_text)}', file=os.sys.stderr)
    print(f'Response starts with: {raw_text[:200]}', file=os.sys.stderr)
    exit(1)
code = body.get('code', -1)
if code != 0:
    print(f'API error: {body}', file=os.sys.stderr)
    exit(1)

data = body['data']
all_fields = data['fields']
all_rows = data['data']
all_rids = data['record_id_list']

print(f'Fetched {len(all_rows)} rows, {len(all_fields)} fields')

# Step 3: Convert columnar to record format
field_idx = {name: i for i, name in enumerate(all_fields)}

def get_field(f, row):
    i = field_idx.get(f)
    if i is None or i >= len(row):
        return None
    return row[i]

jobs = []

for idx, row in enumerate(all_rows):
    rid = all_rids[idx] if idx < len(all_rids) else ''
    company = get_field('公司', row) or ''
    position = get_field('岗位', row) or ''
    if not company or not position:
        continue

    cv = get_field('城市', row)
    city = ''
    if isinstance(cv, list) and len(cv) > 0:
        city = cv[0]
    elif isinstance(cv, str):
        city = cv

    dirs = get_field('研究方向', row) or []
    dir_list = dirs if isinstance(dirs, list) else ([dirs] if dirs else [])
    dir_str = ','.join(dir_list)

    link_val = get_field('招聘链接', row) or ''
    link = None
    if link_val:
        m = re.search(r'\]\(([^)]+)\)', link_val)
        if m:
            link = m.group(1)
        elif link_val.startswith('http'):
            link = link_val

    tags_str = get_field('技能标签', row) or ''
    tags = [t.strip() for t in tags_str.split(',') if t.strip()] if tags_str else []

    src = get_field('来源', row) or ['系统收录']
    community = isinstance(src, list) and len(src) > 0 and src[0] == '社区提交'

    job = {
        'id': rid,
        'city': city,
        'company': company,
        'position': position,
        'dir': dir_str,
        'dirList': dir_list,
        'salary': get_field('薪资范围', row) or '面议',
        'sMin': get_field('最低薪资K', row) or 0,
        'sMax': get_field('最高薪资K', row) or 0,
        'edu': get_field('学历要求', row) or '未注明',
        'exp': get_field('经验要求', row) or '未注明',
        'date': get_field('发布日期', row) or '',
        'fresh': get_field('是否最新', row) == True,
        'desc': get_field('岗位描述', row) or '',
        'tags': tags,
        'link': link,
        'linkText': get_field('链接文字', row) or '查看详情',
        'email': get_field('邮箱', row),
        'phone': get_field('电话', row),
        'community': community,
    }
    jobs.append(job)

with open('jobs-data.json', 'w') as fp:
    json.dump(jobs, fp, ensure_ascii=False, indent=2)
print(f'Converted {len(jobs)} jobs')