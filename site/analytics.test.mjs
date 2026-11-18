import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { test } from "node:test";
import { AnalyticsDO, normalizeAcquisitionSource, normalizeTrackedPath, routeAnalyticsRequest } from "./analytics.js";

// A Durable Object's SQL storage, backed by an in-memory SQLite database.
function fakeEnv() {
  const db = new DatabaseSync(":memory:");
  const sql = {
    exec(query, ...bindings) {
      const statement = db.prepare(query);
      const rows = statement.columns().length ? statement.all(...bindings) : (statement.run(...bindings), []);
      return { one: () => rows[0], toArray: () => rows };
    },
  };
  const state = {
    storage: {
      sql,
      transactionSync(callback) {
        db.exec("BEGIN");
        try {
          const value = callback();
          db.exec("COMMIT");
          return value;
        } catch (error) {
          db.exec("ROLLBACK");
          throw error;
        }
      },
    },
  };
  const analytics = new AnalyticsDO(state);
  return {
    ANALYTICS: {
      idFromName: (name) => name,
      get: () => ({ fetch: (input, init) => analytics.fetch(new Request(input, init)) }),
    },
  };
}

const SITE = "https://analog-bibles.tokenzhang.com";
const UA = "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/130 Safari/537.36";

function track(env, { cookie, headers = {}, body = { p: "/browse", r: "", s: "" }, cf = { country: "CH", latitude: "47.37", longitude: "8.54" } } = {}) {
  const request = new Request(`${SITE}/api/track`, {
    method: "POST",
    headers: { "content-type": "application/json", Origin: SITE, "User-Agent": UA, ...(cookie ? { Cookie: cookie } : {}), ...headers },
    body: JSON.stringify(body),
  });
  Object.defineProperty(request, "cf", { value: cf });
  return routeAnalyticsRequest(request, env);
}

const get = async (env, path) => (await routeAnalyticsRequest(new Request(`${SITE}${path}`), env)).json();
const vid = (response) => response.headers.get("set-cookie")?.match(/ab_vid=([^;]+)/)?.[1];

test("a returning visitor is counted once; every view counts", async () => {
  const env = fakeEnv();
  const first = await track(env);
  const id = vid(first);
  assert.match(id, /^[0-9a-f-]{36}$/);
  assert.match(first.headers.get("set-cookie"), /Max-Age=31536000; SameSite=Lax; HttpOnly; Secure/);
  const again = await track(env, { cookie: `ab_vid=${id}` });
  // The cookie is set once and never renewed.
  assert.equal(again.headers.get("set-cookie"), null);
  await track(env);
  assert.deepEqual(await get(env, "/api/stats"), { pv: 3, uv: 2, scope: "all" });
  const summary = await get(env, "/api/analytics");
  assert.deepEqual(summary.totals, { pv: 3, uv: 2 });
  assert.deepEqual([summary.today.pv, summary.today.uv], [3, 2]);
  assert.equal(summary.days.length, 400);
  assert.deepEqual(summary.countries, [{ code: "CH", pv: 3, uv: 2 }]);
  assert.deepEqual(summary.paths, [{ path: "/browse", pv: 3, uv: 2 }]);
  assert.deepEqual(summary.points, [{ lat: 47, lng: 9, count: 3 }]);
});

test("Do Not Track, Global Privacy Control, the opt-out, bots and other sites are not counted", async () => {
  const env = fakeEnv();
  for (const options of [
    { headers: { DNT: "1" } },
    { headers: { "Sec-GPC": "1" } },
    { cookie: "ab_optout=1" },
    { headers: { "User-Agent": "Googlebot/2.1" } },
    { headers: { Origin: "https://example.com" } },
  ]) {
    const response = await track(env, options);
    assert.equal(response.status, 204);
    assert.equal(response.headers.get("set-cookie"), null);
  }
  assert.deepEqual(await get(env, "/api/stats"), { pv: 0, uv: 0, scope: "all" });
});

test("Stop counting me removes the visitor id and is remembered", async () => {
  const env = fakeEnv();
  const response = await routeAnalyticsRequest(
    new Request(`${SITE}/api/track/opt-out`, {
      method: "POST",
      headers: { "content-type": "application/json", Origin: SITE },
      body: JSON.stringify({ optOut: true }),
    }),
    env,
  );
  assert.deepEqual(await response.json(), { optedOut: true });
  const cookies = response.headers.getSetCookie();
  assert.ok(cookies.some((c) => c.startsWith("ab_optout=1;") && c.includes("Max-Age=34214400")));
  assert.ok(cookies.some((c) => c.startsWith("ab_vid=;") && c.includes("Max-Age=0")));
  const read = await routeAnalyticsRequest(new Request(`${SITE}/api/track/opt-out`, { headers: { Cookie: "ab_optout=1" } }), env);
  assert.deepEqual(await read.json(), { optedOut: true });
});

test("page loads are kept as histograms per country", async () => {
  const env = fakeEnv();
  const request = new Request(`${SITE}/api/track/load`, {
    method: "POST",
    headers: { "content-type": "application/json", Origin: SITE, "User-Agent": UA },
    body: JSON.stringify({ t: 180, l: 720 }),
  });
  Object.defineProperty(request, "cf", { value: { country: "CN" } });
  assert.equal((await routeAnalyticsRequest(request, env)).status, 204);
  const { loadTimes } = await get(env, "/api/analytics");
  assert.deepEqual(loadTimes.all, { code: "ALL", n: 1, ttfbP50: 200, ttfbP75: 200, shownP50: 800, shownP75: 800 });
  assert.equal(loadTimes.countries[0].code, "CN");
});

test("paths and sources are normalized as on Analog Canvas", () => {
  assert.equal(normalizeTrackedPath("/browse?id=R001#x"), "/browse");
  assert.equal(normalizeTrackedPath("/analytics"), null);
  assert.equal(normalizeTrackedPath("/api/stats"), null);
  const site = new URL(SITE);
  assert.equal(normalizeAcquisitionSource("https://www.google.ch/", "", site), "search:google");
  assert.equal(normalizeAcquisitionSource("https://mp.weixin.qq.com/s/abc", "", site), "social:wechat");
  assert.equal(normalizeAcquisitionSource(`${SITE}/browse`, "", site), "direct-or-unknown");
  assert.equal(normalizeAcquisitionSource("https://zhuanlan.zhihu.com/p/1", "", site), "social:zhihu");
  assert.equal(normalizeAcquisitionSource("https://example.org/x", "", site), "ref:example.org");
  assert.equal(normalizeAcquisitionSource("", "qr", site), "campaign:qr");
});

test("the analytics routes leave every other path to the host", async () => {
  assert.equal(await routeAnalyticsRequest(new Request(`${SITE}/api/reviews`), fakeEnv()), null);
});
