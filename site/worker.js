// API for reviews and visitor analytics; everything else is the static page
// and question files.
import { routeAnalyticsRequest } from "./analytics.js";
import { workbench } from "./workbench.mjs";
import { authenticate, validMutation } from "./workbench-auth.mjs";

export { AnalyticsDO } from "./analytics.js";

const FLAGS = new Set(["question", "answer", "figure", "render", "level", "other"]);
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export default {
  async fetch(request, env) {
    const response = await workbench(request, env);
    if (response) return response;
    const url = new URL(request.url);
    const { pathname } = url;
    if (!pathname.startsWith("/api/")) {
      // The analytics dashboard and the privacy notice are pages of their own.
      if (/^\/(analytics|privacy)\/?$/.test(pathname))
        return env.ASSETS.fetch(new Request(new URL(`/${pathname.split("/")[1]}`, url), request));
      // Any other page path (/, /review, ...) is the one-page app. Asking assets for
      // "/" (not "/index.html", which they redirect to "/") keeps the address.
      return env.ASSETS.fetch(new Request(new URL("/", url), request));
    }
    // Visitor counting is public; only the reviews below need the review key.
    const analyticsResponse = await routeAnalyticsRequest(request, env);
    if (analyticsResponse) return analyticsResponse;
    // Legacy review endpoints also require a verified, allowlisted Access identity.
    if (!await authenticate(request, env)) return json({ error: "unauthorized" }, 401);
    if (request.method !== 'GET' && !validMutation(request)) return json({ error: 'Same-origin JSON request required' }, 403);
    try {
      if (pathname === "/api/summary" && request.method === "GET") {
        const { results } = await env.DB.prepare(
          `SELECT qid,
             SUM(verdict = 'pass') AS pass,
             SUM(verdict = 'issue') AS issue,
             SUM(note <> '') AS notes
           FROM reviews GROUP BY qid`,
        ).all();
        const out = {};
        for (const r of results) out[r.qid] = [r.pass, r.issue, r.notes];
        return json(out);
      }
      if (pathname === "/api/mine" && request.method === "GET") {
        const client = clean(url.searchParams.get("client"), 64);
        if (!client) return json({});
        // The newest verdict on each question; a comment alone is not one.
        const { results } = await env.DB.prepare(
          `SELECT qid, verdict FROM reviews
           WHERE client = ? AND verdict <> 'comment' ORDER BY id`,
        ).bind(client).all();
        const out = {};
        for (const r of results) out[r.qid] = r.verdict;
        return json(out);
      }
      if (pathname === "/api/reviews" && request.method === "GET") {
        const qid = clean(url.searchParams.get("qid"), 32);
        const { results } = await env.DB.prepare(
          `SELECT id, qid, verdict, flags, note, author, created_at FROM reviews
           WHERE qid = ? ORDER BY id DESC LIMIT 200`,
        ).bind(qid).all();
        return json(results.map((r) => ({ ...r, flags: JSON.parse(r.flags) })));
      }
      if (pathname === "/api/reviews" && request.method === "POST") {
        const body = await request.json().catch(() => null);
        if (!body) return json({ error: "bad json" }, 400);
        const qid = clean(body.qid, 32);
        const verdict = body.verdict;
        const flags = Array.isArray(body.flags) ? body.flags.filter((f) => FLAGS.has(f)) : [];
        const note = clean(body.note, 2000);
        const author = clean(body.author, 40);
        const client = clean(body.client, 64);
        if (!/^[A-Za-z0-9-]+$/.test(qid) || !client) return json({ error: "bad request" }, 400);
        if (!["pass", "issue", "comment"].includes(verdict)) return json({ error: "bad verdict" }, 400);
        if (verdict === "issue" && !flags.length) return json({ error: "an issue needs a reason" }, 400);
        if (verdict === "comment" && !note) return json({ error: "empty comment" }, 400);
        const row = await env.DB.prepare(
          `INSERT INTO reviews (qid, verdict, flags, note, author, client)
           VALUES (?, ?, ?, ?, ?, ?) RETURNING id, created_at`,
        ).bind(qid, verdict, JSON.stringify(verdict === "issue" ? flags : []), note, author, client).first();
        return json(row, 201);
      }
      const del = pathname.match(/^\/api\/reviews\/(\d+)$/);
      if (del && request.method === "DELETE") {
        // The owner removes spam with the ADMIN_TOKEN secret; a writer removes their own.
        const admin = env.ADMIN_TOKEN && request.headers.get("authorization") === `Bearer ${env.ADMIN_TOKEN}`;
        const client = clean(url.searchParams.get("client"), 64);
        const result = admin
          ? await env.DB.prepare("DELETE FROM reviews WHERE id = ?").bind(del[1]).run()
          : await env.DB.prepare("DELETE FROM reviews WHERE id = ? AND client = ?").bind(del[1], client).run();
        return json({ deleted: result.meta.changes }, result.meta.changes ? 200 : 404);
      }
      if (pathname === "/api/export" && request.method === "GET") {
        // Every review, for working through the reported issues offline.
        const { results } = await env.DB.prepare(
          "SELECT id, qid, verdict, flags, note, author, created_at FROM reviews ORDER BY id",
        ).all();
        return json(results.map((r) => ({ ...r, flags: JSON.parse(r.flags) })));
      }
      return json({ error: "not found" }, 404);
    } catch (error) {
      return json({ error: String(error) }, 500);
    }
  },
};
