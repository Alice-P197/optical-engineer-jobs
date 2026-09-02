#!/usr/bin/env python3
"""Generate baseJobs array from jobs-data.json for app.js."""
import json

with open('jobs-data.json', 'r') as f:
    jobs = json.load(f)

# Group by city for organized output
city_order = {}
for j in jobs:
    c = j['city']
    if c not in city_order:
        city_order[c] = []
    city_order[c].append(j)

lines = []
lines.append('  // ===== %d Jobs across %d cities =====' % (len(jobs), len(city_order)))
lines.append('  var baseJobs = [')

for city, jlist in sorted(city_order.items()):
    lines.append('')
    lines.append('    // ===== %s (%d) =====' % (city, len(jlist)))
    for j in jlist:
        parts = []
        parts.append("id:'%s'" % j['id'])
        parts.append("city:'%s'" % j['city'])
        parts.append("company:'%s'" % j['company'].replace("'", "\\'"))
        parts.append("position:'%s'" % j['position'].replace("'", "\\'"))
        parts.append("dir:'%s'" % j.get('dir', '').replace("'", "\\'"))
        dir_list = j.get('dirList', [])
        dir_str = ','.join("'%s'" % d.replace("'", "\\'") for d in dir_list)
        parts.append("dirList:[%s]" % dir_str)
        parts.append("salary:'%s'" % str(j.get('salary', '面议')).replace("'", "\\'"))
        parts.append("sMin:%s" % (j.get('sMin', 0) or 0))
        parts.append("sMax:%s" % (j.get('sMax', 0) or 0))
        parts.append("edu:'%s'" % str(j.get('edu', '未注明')).replace("'", "\\'"))
        parts.append("exp:'%s'" % str(j.get('exp', '未注明')).replace("'", "\\'"))
        parts.append("date:'%s'" % str(j.get('date', '')).replace("'", "\\'"))
        fresh = 'true' if j.get('fresh') else 'false'
        parts.append("fresh:%s" % fresh)
        parts.append("desc:'%s'" % str(j.get('desc', '')).replace("'", "\\'").replace('\n', ' '))
        tags = j.get('tags', [])
        tags_str = ','.join("'%s'" % t.replace("'", "\\'") for t in tags)
        parts.append("tags:[%s]" % tags_str)
        link = j.get('link')
        if link:
            parts.append("link:'%s'" % link.replace("'", "\\'"))
        else:
            parts.append("link:null")
        parts.append("linkText:'%s'" % str(j.get('linkText', '查看详情')).replace("'", "\\'"))
        email = j.get('email')
        if email:
            parts.append("email:'%s'" % email.replace("'", "\\'"))
        else:
            parts.append("email:null")
        phone = j.get('phone')
        if phone:
            parts.append("phone:'%s'" % str(phone).replace("'", "\\'"))
        else:
            parts.append("phone:null")
        community = 'true' if j.get('community') else 'false'
        parts.append("community:%s" % community)

        job_line = '    {%s}' % ','.join(parts)
        # Ensure line length <= 100 chars, but allow longer for JSON data
        if len(job_line) > 100:
            # Split into multi-line
            job_line = '    {\n      ' + ',\n      '.join(parts) + '\n    }'
        lines.append(job_line)

lines.append('  ];')

output = '\n'.join(lines)
with open('/tmp/basejobs_gen.js', 'w') as f:
    f.write(output)

print('Generated %d jobs across %d cities' % (len(jobs), len(city_order)))
print('Output: /tmp/basejobs_gen.js')