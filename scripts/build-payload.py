#!/usr/bin/env python3
"""Build API payload from columnar data and convert to website JSON."""
import json, sys

def main():
    fields = json.loads(sys.argv[1])
    rows = json.loads(sys.argv[2])
    rids = json.loads(sys.argv[3])
    payload = {
        'data': {
            'fields': fields,
            'data': rows,
            'record_id_list': rids,
        }
    }
    print(json.dumps(payload, ensure_ascii=False))

if __name__ == '__main__':
    main()