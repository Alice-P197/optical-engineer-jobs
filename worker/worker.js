/**
 * Cloudflare Worker — optical-engineer-jobs sync backend
 * Deploy: npx wrangler deploy
 * Set secret: npx wrangler secret put GITHUB_TOKEN
 *
 * Receives job submissions from the website, pushes them to
 * jobs-community.json on the GitHub repo so all visitors see updates.
 */

const GITHUB_REPO = 'alice-p197/optical-engineer-jobs';
const GITHUB_FILE = 'jobs-community.json';
const BRANCH = 'main';

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

async function githubAPI(path, opts) {
  const token = opts.token; // pass through
  const res = await fetch('https://api.github.com' + path, {
    method: opts.method || 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'optical-engineer-jobs-worker',
      ...(opts.body ? { 'Content-Type': 'application/json; charset=utf-8' } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error('GitHub API error ' + res.status + ': ' + JSON.stringify(data));
  }
  return data;
}

async function fetchExistingFile(token) {
  try {
    const data = await githubAPI(
      '/repos/' + GITHUB_REPO + '/contents/' + GITHUB_FILE + '?ref=' + BRANCH,
      { token }
    );
    return data;
  } catch (e) {
    return null; // file doesn't exist yet
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // POST /submit — add a new job
    if (request.method === 'POST' && url.pathname === '/submit') {
      try {
        const token = env.GITHUB_TOKEN;
        if (!token) {
          return json({ ok: false, error: 'Worker not configured: GITHUB_TOKEN secret missing' }, 500);
        }

        const body = await request.json();
        if (!body || !body.company || !body.position || !body.city) {
          return json({ ok: false, error: 'Missing required fields: company, position, city' }, 400);
        }

        // Read existing community jobs
        const existingFile = await fetchExistingFile(token);
        let existing = [];
        let sha = null;
        if (existingFile && existingFile.content) {
          sha = existingFile.sha;
          const decoded = atob(existingFile.content.replace(/\n/g, ''));
          try {
            existing = JSON.parse(decoded);
            if (!Array.isArray(existing)) existing = [];
          } catch (e) {
            existing = [];
          }
        }

        // Ensure required fields
        const job = {
          id: body.id || ('cm-' + Date.now().toString(36)),
          city: body.city,
          company: body.company,
          position: body.position,
          dir: body.dir || '',
          dirList: body.dirList || [],
          salary: body.salary || '面议',
          sMin: body.sMin || 0,
          sMax: body.sMax || 0,
          edu: body.edu || '未注明',
          exp: body.exp || '未注明',
          date: body.date || new Date().toISOString().slice(0, 10),
          fresh: true,
          desc: body.desc || '',
          tags: body.tags || [],
          link: body.link || null,
          linkText: body.linkText || '查看详情',
          email: body.email || null,
          phone: body.phone || null,
          community: true,
        };

        // Prepend to list
        existing.unshift(job);

        // Push to GitHub
        const content = Buffer.from(JSON.stringify(existing, null, 2)).toString('base64');
        const commitMsg = 'Add community job: ' + job.company + ' - ' + job.position;

        await githubAPI('/repos/' + GITHUB_REPO + '/contents/' + GITHUB_FILE, {
          method: 'PUT',
          token,
          body: {
            message: commitMsg,
            content: content,
            branch: BRANCH,
            ...(sha ? { sha } : {}),
          },
        });

        return json({ ok: true, job: job, total: existing.length });
      } catch (e) {
        return json({ ok: false, error: e.message }, 500);
      }
    }

    // GET / — health check
    return json({ ok: true, service: 'optical-engineer-jobs-worker', version: '1.0.0' });
  },
};