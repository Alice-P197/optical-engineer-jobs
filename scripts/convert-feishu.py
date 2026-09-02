#!/usr/bin/env python3
"""Convert Feishu Base v3 columnar response to website-compatible JSON."""
import json, sys, re

def main():
    raw = json.load(sys.stdin)
    data = raw.get('data', {})
    fields = data.get('fields', [])
    rows = data.get('data', [])
    rid_list = data.get('record_id_list', [])

    if not fields or not rows:
        print('No data found', file=sys.stderr)
        return

    # Build field index
    field_idx = {name: i for i, name in enumerate(fields)}

    def get_field(f, row):
        i = field_idx.get(f)
        if i is None or i >= len(row):
            return None
        return row[i]

    jobs = []

    for idx, row in enumerate(rows):
        rid = rid_list[idx] if idx < len(rid_list) else ''
        company = get_field('公司', row) or ''
        position = get_field('岗位', row) or ''
        if not company or not position:
            continue

        # City
        cv = get_field('城市', row)
        city = ''
        if isinstance(cv, list) and len(cv) > 0:
            city = cv[0]
        elif isinstance(cv, str):
            city = cv

        # Directions
        dirs = get_field('研究方向', row) or []
        dir_list = dirs if isinstance(dirs, list) else ([dirs] if dirs else [])
        dir_str = ','.join(dir_list)

        # Link
        link_val = get_field('招聘链接', row) or ''
        link = None
        if link_val:
            m = re.search(r'\]\(([^)]+)\)', link_val)
            if m:
                link = m.group(1)
            elif link_val.startswith('http'):
                link = link_val

        # Tags
        tags_str = get_field('技能标签', row) or ''
        tags = [t.strip() for t in tags_str.split(',') if t.strip()] if tags_str else []

        # Source
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

if __name__ == '__main__':
    main()