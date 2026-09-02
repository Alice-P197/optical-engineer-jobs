/**
 * Cloudflare Worker — optical-engineer-jobs Feishu backend
 * Deploy: npx wrangler deploy
 * Set secrets:
 *   npx wrangler secret put FEISHU_APP_ID
 *   npx wrangler secret put FEISHU_APP_SECRET
 *
 * Proxies Feishu Base API calls so the website can read job data
 * without exposing credentials to the client.
 */

const BASE_TOKEN = 'YPSTbjYSGaKXvLsSQ3wcxilYnDd';
const TABLE_ID = 'tblXG6CvIWsapTND';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

function json(data, status) {
  return new Response(JSON.stringify(data, null, 2), {
    status: status || 200,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' },
  });
}

let cachedToken = null;
let tokenExpiry = 0;

async function getTenantToken(env) {
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }
  const res = await fetch(
    'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        app_id: env.FEISHU_APP_ID,
        app_secret: env.FEISHU_APP_SECRET,
      }),
    }
  );
  const data = await res.json();
  if (data.code !== 0) {
    throw new Error('Feishu auth error: ' + JSON.stringify(data));
  }
  cachedToken = data.tenant_access_token;
  // Cache for 90 min (token lifetime is 2 hours)
  tokenExpiry = Date.now() + 90 * 60 * 1000;
  return cachedToken;
}

async function listAllRecords(token) {
  let allItems = [];
  let pageToken = null;
  do {
    let url = 'https://open.feishu.cn/open-apis/base/v3/bases/' +
      BASE_TOKEN + '/tables/' + TABLE_ID + '/records?page_size=200';
    if (pageToken) url += '&page_token=' + encodeURIComponent(pageToken);
    const res = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    const data = await res.json();
    if (data.code !== 0) {
      throw new Error('Feishu API error: ' + JSON.stringify(data));
    }
    if (data.data && data.data.items) {
      allItems = allItems.concat(data.data.items);
    }
    pageToken = data.data && data.data.has_more ? data.data.page_token : null;
  } while (pageToken);
  return allItems;
}

// Convert Feishu record to website job format
function recordToJob(record) {
  const f = record.fields || {};
  const dirStr = Array.isArray(f['研究方向']) ? f['研究方向'].join(',') : (f['研究方向'] || '');
  const dirList = Array.isArray(f['研究方向']) ? f['研究方向'] : [];

  return {
    id: record.record_id || '',
    city: Array.isArray(f['城市']) ? f['城市'][0] || '' : (f['城市'] || ''),
    company: f['公司'] || '',
    position: f['岗位'] || '',
    dir: dirStr,
    dirList: dirList,
    salary: f['薪资范围'] || '面议',
    sMin: f['最低薪资K'] || 0,
    sMax: f['最高薪资K'] || 0,
    edu: f['学历要求'] || '未注明',
    exp: f['经验要求'] || '未注明',
    date: f['发布日期'] || '',
    fresh: f['是否最新'] === true || f['是否最新'] === 'true',
    desc: f['岗位描述'] || '',
    tags: f['技能标签'] ? f['技能标签'].split(',').map(function(t) { return t.trim(); }) : [],
    link: extractUrl(f['招聘链接']),
    linkText: f['链接文字'] || '查看详情',
    email: f['邮箱'] || null,
    phone: f['电话'] || null,
    community: Array.isArray(f['来源']) && f['来源'][0] === '社区提交',
  };
}

// Extract URL from Feishu url field (markdown format: [text](url))
function extractUrl(val) {
  if (!val) return null;
  var m = val.match(/\]\(([^)]+)\)/);
  if (m) return m[1];
  // If it's a plain URL
  if (/^https?:\/\//.test(val)) return val;
  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // GET /jobs — list all jobs from Feishu Base
    if (request.method === 'GET' && url.pathname === '/jobs') {
      try {
        if (!env.FEISHU_APP_ID || !env.FEISHU_APP_SECRET) {
          return json({ ok: false, error: 'Worker not configured: FEISHU_APP_ID / FEISHU_APP_SECRET missing' }, 500);
        }

        const token = await getTenantToken(env);
        const items = await listAllRecords(token);
        const jobs = items.map(recordToJob);

        return json({ ok: true, count: jobs.length, jobs: jobs });
      } catch (e) {
        return json({ ok: false, error: e.message }, 500);
      }
    }

    // GET / — health check
    return json({ ok: true, service: 'optical-engineer-jobs-feishu', version: '2.0.0' });
  },
};