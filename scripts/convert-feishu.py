#!/usr/bin/env python3
"""Convert Feishu Base records to website-compatible JSON."""
import json, sys, re

def main():
    items = json.load(sys.stdin)
    jobs = []

    for item in items:
        f = item.get('fields', {})
        rid = item.get('record_id', '')
        company = f.get('公司', '') or ''
        position = f.get('岗位', '') or ''
        if not company or not position:
            continue

        # City
        city = ''
        cv = f.get('城市')
        if isinstance(cv, list) and len(cv) > 0:
            city = cv[0]
        elif isinstance(cv, str):
            city = cv

        # Directions
        dirs = f.get('研究方向', [])
        dir_list = dirs if isinstance(dirs, list) else ([dirs] if dirs else [])
        dir_str = ','.join(dir_list)

        # Link
        link_val = f.get('招聘链接', '')
        link = None
        if link_val:
            m = re.search(r'\]\(([^)]+)\)', link_val)
            if m:
                link = m.group(1)
            elif link_val.startswith('http'):
                link = link_val

        # Tags
        tags_str = f.get('技能标签', '') or ''
        tags = [t.strip() for t in tags_str.split(',') if t.strip()] if tags_str else []

        # Source
        src = f.get('来源', ['系统收录'])
        community = isinstance(src, list) and len(src) > 0 and src[0] == '社区提交'

        job = {
            'id': rid,
            'city': city,
            'company': company,
            'position': position,
            'dir': dir_str,
            'dirList': dir_list,
            'salary': f.get('薪资范围', '面议') or '面议',
            'sMin': f.get('最低薪资K', 0) or 0,
            'sMax': f.get('最高薪资K', 0) or 0,
            'edu': f.get('学历要求', '未注明') or '未注明',
            'exp': f.get('经验要求', '未注明') or '未注明',
            'date': f.get('发布日期', '') or '',
            'fresh': f.get('是否最新') == True,
            'desc': f.get('岗位描述', '') or '',
            'tags': tags,
            'link': link,
            'linkText': f.get('链接文字', '查看详情') or '查看详情',
            'email': f.get('邮箱', None),
            'phone': f.get('电话', None),
            'community': community,
        }
        jobs.append(job)

    with open('jobs-data.json', 'w') as fp:
        json.dump(jobs, fp, ensure_ascii=False, indent=2)
    print(f'Converted {len(jobs)} jobs')

if __name__ == '__main__':
    main()