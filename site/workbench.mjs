import { authenticate, validMutation } from './workbench-auth.mjs';
import { fail, digest, same, editable, candidateFiles, validateFiles, candidateScope, fullyReviewed, fullyReviewedFiles, triageMetrics } from './workbench-model.mjs';
import { exchange } from './workbench-exchange.mjs';
export const json = (value, status = 200) => new Response(JSON.stringify(value), { status,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' } });
const actorName = actor => `${actor.email} (${actor.sub})`;
async function body(request) {
  const reader = request.body?.getReader();
  if (!reader) fail(400, 'JSON body required');
  let size = 0; const chunks = [];
  for (;;) { const { value, done } = await reader.read(); if (done) break; size += value.length;
    if (size > 1000000) { await reader.cancel(); fail(413, 'Limit: 1 MB. Split the report into smaller batches.'); } chunks.push(value); }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const c of chunks) { bytes.set(c, offset); offset += c.length; }
  try { const b = JSON.parse(new TextDecoder().decode(bytes)); if (!b || typeof b !== 'object' || Array.isArray(b)) fail(400, 'Invalid object'); return b; }
  catch { fail(400, 'Invalid JSON'); }
}
async function asset(env, request, path) {
  const r = await env.ASSETS.fetch(new Request(new URL(path, request.url)));
  if (!r.ok) fail(404, 'Source not found');
  try { return JSON.parse(await r.text()); }
  catch { fail(503, 'Source assets unavailable. Restart the local Worker after rebuilding.'); }
}
async function source(env, request, qid) {
  if (!/^[A-Za-z0-9-]{1,32}$/.test(qid)) fail(400, 'Invalid problem ID');
  return asset(env, request, `/workbench-source/${qid}.json`);
}
async function latest(db, qid) {
  const row = await db.prepare('SELECT * FROM wb_revisions WHERE qid = ? ORDER BY version DESC LIMIT 1').bind(qid).first();
  return row ? { ...row, payload: JSON.parse(row.payload) } : null;
}
export function parseReport(raw, known) {
  // Only explicit single-ID headings are associated automatically. Everything else survives verbatim.
  const sections = []; let current = { qid: null, text: '' };
  for (const line of raw.split('\n')) {
    if (/^#{1,6}\s/.test(line)) {
      const ids = [...new Set(line.match(/\b(?:[RGA]\d{3}|(?:grsim|alsim)-[\w-]+)\b/g) || [])].filter(id => known.has(id));
      if (ids.length) { if (current.text.trim()) sections.push(current); current = { qid: ids.length === 1 ? ids[0] : null, text: '' }; }
    }
    current.text += line + '\n';
  }
  if (current.text.trim()) sections.push(current);
  return sections;
}
function effectiveStatus(payload, src) {
  if (payload.approval?.status==='APPROVED' && src.reviewStatus === 'APPROVED' && same(payload.approval.hashes,src.hashes)) return 'PUBLISHED';
  if (!same(payload.source.hashes,src.hashes)) return 'STALE';
  return payload.status;
}
export async function workbench(request, env, identity = authenticate, fetcher = fetch) {
  const path = new URL(request.url).pathname;
  const protectedPath = /^\/review(?:\/|$)/.test(path) || path.startsWith('/api/workbench') || path.startsWith('/workbench-source/');
  if (!protectedPath) return null;
  try {
    const actor = await identity(request, env);
    if (!actor) return json({ error: 'Administrator authentication required' }, 401);
    if (path.startsWith('/workbench-source/')) return json({ error: 'Use the authenticated source API' }, 403);
    if (/^\/review\/?$/.test(path)) {
      if (request.method !== 'GET') fail(405, 'Method not allowed');
      const r = await env.ASSETS.fetch(new Request(new URL('/workbench.html', request.url)));
      const headers = new Headers(r.headers); headers.set('cache-control', 'no-store');
      headers.set('content-security-policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
      return new Response(r.body, { status: r.status, headers });
    }
    if (request.method !== 'GET' && !validMutation(request)) fail(403, 'Same-origin JSON request required');
    const db = env.DB;
    const exchanged = await exchange(path,request,env,actor,{body,source,latest,json});
    if (exchanged) return exchanged;
    if (path === '/api/workbench/index' && request.method === 'GET') {
      const entries = await asset(env, request, '/index.json');
      return json(entries.map(({ t, ...metadata }) => metadata));
    }
    if (path === '/api/workbench/session' && request.method === 'GET') return json(actor);
    if (path === '/api/workbench/batches') {
      if (request.method === 'GET') return json((await db.prepare('SELECT * FROM wb_batches ORDER BY created_at DESC').all()).results);
      if (request.method !== 'POST') fail(405, 'Method not allowed');
      const b = await body(request), index = await asset(env, request, '/index.json');
      const ids = index.filter(q => q.book === b.book && (b.chapter ? String(q.ch) === String(b.chapter) : q.id >= b.from && q.id <= b.to)).map(q => q.id);
      if (!ids.length || ids.length > 250) fail(400, 'Select 1–250 questions from one book');
      const id = crypto.randomUUID(), payload = JSON.stringify({ name: String(b.name || `${b.book}: ${ids[0]}–${ids.at(-1)}`).slice(0,100), ids });
      await db.prepare('INSERT INTO wb_batches VALUES (?, ?, ?, ?)').bind(id, actorName(actor), new Date().toISOString(), payload).run();
      return json({ id, payload }, 201);
    }
    if (path === '/api/workbench/triage' && request.method === 'GET') {
      const batchId = new URL(request.url).searchParams.get('batchId');
      const row = batchId && await db.prepare('SELECT payload FROM wb_batches WHERE id = ?').bind(batchId).first();
      if (!row) fail(400,'Select an existing batch');
      const ids = JSON.parse(row.payload).ids;
      const diagnostics = (await db.prepare('SELECT qid,payload,source_hashes,base_version,created_at FROM wb_diagnostics ORDER BY created_at DESC, rowid DESC').all()).results;
      const latestDiagnostics={};for(const d of diagnostics)if(!latestDiagnostics[d.qid])latestDiagnostics[d.qid]={...JSON.parse(d.payload),baseVersion:d.base_version,sourceHashes:JSON.parse(d.source_hashes),createdAt:d.created_at};
      const out=[];
      for(const qid of ids){
        const src=await source(env,request,qid), rev=await latest(db,qid), files=rev?.payload.files||candidateFiles(src);
        const diagnosis=latestDiagnostics[qid] && latestDiagnostics[qid].baseVersion===(rev?.version||0) && same(latestDiagnostics[qid].sourceHashes,src.hashes) ? latestDiagnostics[qid] : null;
        const item=triageMetrics(src,files,diagnosis);
        out.push({qid,version:rev?.version||0,status:rev?effectiveStatus(rev.payload,src):'UNREVIEWED',stale:!!rev&&!same(rev.payload.source.hashes,src.hashes),...item});
      }
      return json(out);
    }
    if (path === '/api/workbench/progress' && request.method === 'GET') {
      const rows = (await db.prepare('SELECT r.* FROM wb_revisions r WHERE version = (SELECT MAX(version) FROM wb_revisions WHERE qid = r.qid)').all()).results;
      return json(Object.fromEntries(await Promise.all(rows.map(async r => [r.qid, { version: r.version, status: effectiveStatus(JSON.parse(r.payload),await source(env,request,r.qid)) }]))));
    }
    const match = path.match(/^\/api\/workbench\/questions\/([A-Za-z0-9-]+)(?:\/(history))?$/);
    if (match) {
      const qid = match[1], src = await source(env, request, qid);
      if (match[2] && request.method === 'GET') return json((await db.prepare('SELECT * FROM wb_revisions WHERE qid = ? ORDER BY version DESC LIMIT 100').bind(qid).all()).results);
      const current = await latest(db, qid);
      if (request.method === 'GET') return json({ scope: await candidateScope(src,current?.payload.files||candidateFiles(src)), source: src, revision: current, effectiveStatus: current ? effectiveStatus(current.payload,src) : 'UNREVIEWED', stale: !!current && !same(current.payload.source.hashes, src.hashes) });
      if (request.method !== 'POST' || match[2]) fail(405, 'Method not allowed');
      const b = await body(request);
      if (!Number.isInteger(b.version) || typeof b.requestId !== 'string' || !/^[\w-]{16,80}$/.test(b.requestId)) fail(400, 'Version and request ID required');
      const existing = await db.prepare('SELECT * FROM wb_revisions WHERE request_id = ?').bind(b.requestId).first();
      if (existing) {
        if (existing.qid !== qid || existing.actor !== actorName(actor) || JSON.parse(existing.payload).requestHash !== await digest(JSON.stringify(b))) fail(409, 'Request ID reused');
        const payload = JSON.parse(existing.payload);
        return json({ ...existing, payload, scope: await candidateScope(src,payload.files) });
      }
      if (b.version !== (current?.version || 0)) fail(409, 'Another tab saved a newer version. Keep your text and reload to compare.');
      if (!same(b.sourceHashes, src.hashes) || current && !same(current.payload.source.hashes, src.hashes)) fail(409, 'Source changed. Export your draft for manual reconciliation before continuing.');
      const files = b.files;
      validateFiles(files,src);
      const names = Object.keys(files).sort();
      if (typeof b.note !== 'string' || b.note.length > 5000) fail(400, 'Review note must be at most 5000 characters');
      const actions = ['save','revision','discuss','ready','approve','approveRevision','review'];
      if (!actions.includes(b.action)) fail(400, 'Invalid action');
      const changed = !same(current?.payload.files || Object.fromEntries(names.map(n => [n,src.files[n]])), files);
      const scope = await candidateScope(src,files);
      if(['approve','approveRevision'].includes(b.action)&&scope.quality.issues.length)fail(409,'候选尚不能批准：'+scope.quality.issues.map(i=>i.message).join('；'));
      const receipts = changed ? {} : { ...(current?.payload.receipts||{}) };
      if (b.action === 'review') {
        if (changed || b.reviewHash !== scope.hashes[b.reviewFile] || !(b.reviewFile in scope.hashes) || b.fingerprint !== scope.fingerprint) fail(409,'Save first and inspect this exact candidate file before recording review');
        receipts[b.reviewFile] = {hash:b.reviewHash,fingerprint:scope.fingerprint,actor:actorName(actor),reviewedAt:new Date().toISOString()};
      }
      let status = ({ save: 'IN_REVIEW', revision: 'NEEDS_REVISION', discuss: 'IN_REVIEW', ready: 'READY_FOR_APPROVAL', approve: 'APPROVED_PENDING_PUBLISH', approveRevision: 'APPROVED_REVISION_PENDING_PUBLISH', review: current?.payload.status || 'IN_REVIEW' })[b.action];
      if (b.action === 'save' && current?.payload.approval) status = changed ? 'STALE' : current.payload.status;
      let approval = !changed ? current?.payload.approval || null : null;
      if (!['save','review'].includes(b.action)) approval = null;
      if (b.action === 'approveRevision') {
        const required = scope.requiredFiles;
        if (changed || !required.length || current?.payload.status !== 'READY_FOR_APPROVAL') fail(409,'提交“增量批准”前必须保存修改并提交最终验收');
        if (!same(b.scopeFiles?.slice().sort(),required) || b.confirm !== 'APPROVE REVIEWED REVISION') fail(400,'增量批准范围必须只包含受影响的双语答案文件');
        if (!fullyReviewedFiles(receipts,scope,required)) fail(409,'请先复核增量范围内的每个文件');
        if(b.dependencyConfirmed!==true || !b.note.trim()) fail(400,'请记录修订依据，并确认已检查改动与原题、参考答案及相关公式的关系');
        const hashes={...src.hashes};for(const n of names)hashes[n]=await digest(files[n]);
        approval={status:'APPROVED_REVISION',scope:'candidate-revision-v1',changedFiles:required,dependencyReview:{confirmed:true,note:b.note},humanApproval:{kind:'human',decision:'REVISION_APPROVED',reviewer:actorName(actor),approvedAt:new Date().toISOString()},hashes};
      }
      if (b.action === 'approve') {
        if (changed || current?.payload.status !== 'READY_FOR_APPROVAL') fail(409, 'Save and submit this exact version for final acceptance first');
        if (!same(b.scopeFiles?.slice().sort(), Object.keys(scope.hashes).sort()) || b.confirm !== 'APPROVE ENTIRE QUESTION') fail(400, 'Explicit acceptance of every file, translation and image is required');
        if (!fullyReviewed(receipts,scope)) fail(409,'Every candidate file, translation and image must have a current recorded human review');
        for (const n of ['instruction.md','golden_solution.md','detailed_solution.md']) if (!(n in scope.hashes)) fail(400, 'Incomplete approval scope');
        const hashes = { ...src.hashes }; for (const n of names) hashes[n] = await digest(files[n]);
        approval = { status: 'APPROVED', scope: 'question-directory-v1', humanApproval: { kind: 'human', decision: 'APPROVED', reviewer: actorName(actor), approvedAt: new Date().toISOString() }, hashes };
      }
      const payload = { source: src, files, receipts, provenance:current?.payload.provenance||null, status, discussion: b.action === 'discuss', note: b.note, approval, requestHash: await digest(JSON.stringify(b)) };
      const version = b.version + 1, at = new Date().toISOString();
      // Single immutable INSERT is the commit: UNIQUE(qid,version) enforces optimistic concurrency.
      try { await db.prepare('INSERT INTO wb_revisions VALUES (?, ?, ?, ?, ?, ?)').bind(qid, version, b.requestId, actorName(actor), at, JSON.stringify(payload)).run(); }
      catch (error) { if (/UNIQUE|constraint/i.test(String(error))) fail(409, 'Concurrent save; reload before retrying'); throw error; }
      return json({ scope, qid, version, actor: actorName(actor), created_at: at, payload }, 201);
    }
    if (path === '/api/workbench/reports') {
      if (request.method === 'GET') return json((await db.prepare('SELECT * FROM wb_reports ORDER BY created_at DESC').all()).results);
      if (request.method !== 'POST') fail(405, 'Method not allowed');
      const b = await body(request);
      if (typeof b.raw !== 'string' || !b.raw.trim() || b.raw.length > 500000) fail(400, 'Report must contain 1–500000 characters');
      const index = await asset(env, request, '/index.json');
      const payload = { raw: b.raw, items: parseReport(b.raw, new Set(index.map(q => q.id))) };
      const id = crypto.randomUUID();
      await db.prepare('INSERT INTO wb_reports VALUES (?, ?, ?, ?)').bind(id, actorName(actor), new Date().toISOString(), JSON.stringify(payload)).run();
      return json({ id, payload: JSON.stringify(payload) }, 201);
    }
    if (path === '/api/workbench/report-decisions') {
      if (request.method === 'GET') return json((await db.prepare('SELECT * FROM wb_report_decisions ORDER BY id').all()).results);
      if (request.method !== 'POST') fail(405,'Method not allowed');
      const b = await body(request), report = await db.prepare('SELECT payload FROM wb_reports WHERE id = ?').bind(String(b.reportId)).first();
      if (typeof b.qid !== 'string' || !/^[A-Za-z0-9-]{1,32}$/.test(b.qid)) fail(400, 'Question ID required');
      const reportPayload = report && JSON.parse(report.payload);
      if (!reportPayload || !Array.isArray(reportPayload.items) || !Number.isInteger(b.item) || !reportPayload.items[b.item] || !['ACCEPT','REJECT','DISCUSS'].includes(b.decision)) fail(400, 'Invalid report decision');
      await source(env, request, b.qid);
      const rev = await latest(db, b.qid);
      const payload = { qid: b.qid, decision: b.decision, version: rev?.version || 0, note: String(b.note || '').slice(0,5000) };
      await db.prepare('INSERT INTO wb_report_decisions (report_id,item,actor,created_at,payload) VALUES (?,?,?,?,?)').bind(b.reportId,b.item,actorName(actor),new Date().toISOString(),JSON.stringify(payload)).run();
      return json(payload,201);
    }
    if (path === '/api/workbench/export' && request.method === 'POST') {
      const b = await body(request);
      if (!Array.isArray(b.ids) || !b.ids.length || b.ids.length > 50 || new Set(b.ids).size !== b.ids.length) fail(400,'Select 1–50 approved questions');
      // Fail closed if the deployed source is behind official main, even for unrelated commits.
      const upstreamResponse = await fetcher('https://api.github.com/repos/cascode-ai/analog-bibles/commits/main', { headers: { 'User-Agent':'Analog-Bibles-Workbench', Accept:'application/vnd.github+json' }, signal: AbortSignal.timeout(10000) });
      if (!upstreamResponse.ok) fail(503,'Cannot verify latest official main; export blocked');
      const upstream = (await upstreamResponse.json()).sha;
      if (!/^[a-f0-9]{40}$/.test(upstream || '')) fail(503,'Invalid official source response');
      const out = { schemaVersion: 1, createdAt: new Date().toISOString(), files: {}, records: {}, revisionApprovals:{}, changes: [] };
      for (const qid of b.ids) {
        const src = await source(env,request,qid), r = await latest(db,qid), p = r?.payload;
        if (src.commit !== upstream) fail(409,`${qid}: deployed source is not latest official main; update and reconcile before export`);
        if (!p?.approval || !['APPROVED','APPROVED_REVISION'].includes(p.approval.status) || !['APPROVED_PENDING_PUBLISH','APPROVED_REVISION_PENDING_PUBLISH'].includes(p.status)) fail(409,`${qid}: not approved`);
        if (!same(src.hashes,p.source.hashes)) fail(409,`${qid}: source changed; reconcile before publication`);
        const approvedHashes = { ...src.hashes };
        for (const name of Object.keys(p.files)) approvedHashes[name] = await digest(p.files[name]);
        if (!same(p.approval.hashes, approvedHashes)) fail(409,`${qid}: approval does not match candidate; reconcile before publication`);
        const scope=await candidateScope(src,p.files),incremental=p.approval.status==='APPROVED_REVISION';
        if(scope.quality.issues.length)fail(409,`${qid}：缺图或引导语标点未修正，批准已不符合当前检查要求，请修订后重新验收`);
        if(incremental){
          if(p.status!=='APPROVED_REVISION_PENDING_PUBLISH'||!scope.requiredFiles.length||!same(p.approval.changedFiles,scope.requiredFiles)||!p.approval.dependencyReview?.confirmed||!fullyReviewedFiles(p.receipts,scope,scope.requiredFiles))fail(409,`${qid}: current revision review is required`);
        }else if(p.status!=='APPROVED_PENDING_PUBLISH'||!fullyReviewed(p.receipts,scope)) fail(409,`${qid}: current per-file human review is required`);
        const modified = [];
        for (const [name, content] of Object.entries(p.files)) if (content !== src.files[name]) { out.files[`${src.book}/${qid}/${name}`] = content; modified.push(name); }
        if(incremental)out.revisionApprovals[qid]=p.approval;else out.records[qid] = p.approval;
        out.changes.push({ qid, version: r.version, baseHashes: src.hashes, files: modified, receipts:p.receipts, provenance:p.provenance||null });
      }
      for (const change of out.changes) if ((await latest(db,change.qid))?.version !== change.version) fail(409,'Candidate changed during export; retry');
      const id = crypto.randomUUID();
      await db.prepare('INSERT INTO wb_exports VALUES (?, ?, ?, ?)').bind(id,actorName(actor),out.createdAt,JSON.stringify(out)).run();
      return json({ id, ...out });
    }
    fail(404, 'Not found');
  } catch (error) { return json({ error: error.status ? error.message : 'Workbench storage unavailable; retry without discarding your text' }, error.status || 503); }
}
