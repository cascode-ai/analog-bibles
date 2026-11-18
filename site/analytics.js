// First-party visitor analytics, ported from Analog Canvas
// (apps/editor/analytics/worker.ts and routes.ts): the same counting rules,
// cookie limits, tables and dashboard summary, in one Durable Object.
// Canvas's cross-region replication and backup export are left out: this
// site runs in one region.
//
// Persistence identity. Changing one of these starts a separate, empty
// history (a new namespace or object) or forgets returning visitors:
//   binding ANALYTICS, class AnalyticsDO, object "global", cookie ab_vid,
//   routes /api/track, /api/stats, /api/analytics.

export const ANALYTICS_PERSISTENCE_IDENTITY = {
  binding: "ANALYTICS",
  durableObjectClass: "AnalyticsDO",
  objectName: "global",
  visitorCookie: "ab_vid",
  routes: ["/api/track", "/api/stats", "/api/analytics"],
};

/** Remembers that a browser asked not to be counted. */
export const ANALYTICS_OPT_OUT_COOKIE = "ab_optout";
const VISITOR_COOKIE = ANALYTICS_PERSISTENCE_IDENTITY.visitorCookie;
/** One year from the first visit and never renewed. */
export const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
/** Thirteen months, the longest audience-measurement rules allow. */
export const OPT_OUT_COOKIE_MAX_AGE = 60 * 60 * 24 * 396;
/** Ids unseen this long (the cookie has expired) are deleted; totals keep them. */
const VISITOR_ID_RETENTION_DAYS = 366;
const DAY_MS = 24 * 60 * 60 * 1000;
const RETAINED_DAYS = 400;
const OTHER_KEY = "__other__";
const MAX_BREAKDOWN_ROWS = 256;
const MAX_POINT_ROWS = 2000;

/** Upper bounds (ms) of the page-load histogram; the last bucket is open. */
export const LOAD_TIME_BUCKETS_MS = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000,
  2500, 3000, 3500, 4000, 5000, 6000, 8000, 10000, 15000, 20000, 30000, 60000,
];
export const LOAD_TIME_DAYS = 30;
export const MAX_LOAD_TIME_MS = 600_000;

const BREAKDOWN_TABLES = {
  countries: "analytics_countries",
  sources: "analytics_sources",
  pages: "analytics_pages",
};

const META = {
  /** Every visitor ever counted; deleting a dead id leaves it unchanged. */
  visitorTotal: "visitor_total",
  /** The day finished days were last turned into counts. */
  rolledUpDay: "rolled_up_day",
};

export class AnalyticsDO {
  constructor(state) {
    this.state = state;
    this.sql = state.storage.sql;
    this.initializeSchema();
  }

  initializeSchema() {
    const sql = this.sql;
    sql.exec(`CREATE TABLE IF NOT EXISTS visitors (
      visitor_hash TEXT PRIMARY KEY,
      last_seen_day INTEGER NOT NULL
    ) WITHOUT ROWID`);
    sql.exec(`CREATE INDEX IF NOT EXISTS idx_visitors_last_seen_day ON visitors(last_seen_day)`);
    sql.exec(`CREATE TABLE IF NOT EXISTS daily_views (
      day INTEGER PRIMARY KEY,
      views INTEGER NOT NULL
    )`);
    sql.exec(`CREATE TABLE IF NOT EXISTS daily_visitors (
      day INTEGER NOT NULL,
      visitor_hash TEXT NOT NULL,
      source TEXT,
      PRIMARY KEY (day, visitor_hash)
    ) WITHOUT ROWID`);
    sql.exec(`CREATE TABLE IF NOT EXISTS analytics_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    ) WITHOUT ROWID`);
    for (const table of Object.values(BREAKDOWN_TABLES)) {
      sql.exec(`CREATE TABLE IF NOT EXISTS ${table} (
        dimension_key TEXT PRIMARY KEY,
        pv INTEGER NOT NULL,
        uv INTEGER NOT NULL
      ) WITHOUT ROWID`);
    }
    sql.exec(`CREATE TABLE IF NOT EXISTS analytics_points (
      lat INTEGER NOT NULL,
      lng INTEGER NOT NULL,
      count INTEGER NOT NULL,
      PRIMARY KEY (lat, lng)
    ) WITHOUT ROWID`);
    sql.exec(
      "INSERT OR IGNORE INTO analytics_meta(key, value) VALUES ('breakdown_started_at', ?)",
      new Date().toISOString(),
    );
    // Finished days keep only their visitor count; their hashes go.
    sql.exec(`CREATE TABLE IF NOT EXISTS daily_visitor_counts (
      day INTEGER PRIMARY KEY,
      visitors INTEGER NOT NULL
    )`);
    sql.exec(`CREATE TABLE IF NOT EXISTS load_times (
      day INTEGER NOT NULL,
      country TEXT NOT NULL,
      metric TEXT NOT NULL,
      bucket INTEGER NOT NULL,
      count INTEGER NOT NULL,
      PRIMARY KEY (day, country, metric, bucket)
    ) WITHOUT ROWID`);
    sql.exec(
      `INSERT OR IGNORE INTO analytics_meta(key, value)
       SELECT ?, CAST(COUNT(*) AS TEXT) FROM visitors`,
      META.visitorTotal,
    );
  }

  /** Once a day: finished days' hashes become counts; expired ids are deleted. */
  rollUpFinishedDays(today) {
    if (this.meta(META.rolledUpDay) === String(today)) return;
    this.state.storage.transactionSync(() => {
      this.sql.exec(
        `INSERT INTO daily_visitor_counts(day, visitors)
         SELECT day, COUNT(*) FROM daily_visitors WHERE day < ? GROUP BY day
         ON CONFLICT(day) DO UPDATE SET visitors = visitors + excluded.visitors`,
        today,
      );
      this.sql.exec("DELETE FROM daily_visitors WHERE day < ?", today);
      this.sql.exec("DELETE FROM visitors WHERE last_seen_day < ?", today - VISITOR_ID_RETENTION_DAYS);
      this.sql.exec("DELETE FROM load_times WHERE day < ?", today - RETAINED_DAYS);
      this.setMeta(META.rolledUpDay, String(today));
    });
  }

  meta(key) {
    return this.sql.exec("SELECT value FROM analytics_meta WHERE key = ?", key).toArray()[0]?.value ?? null;
  }

  setMeta(key, value) {
    this.sql.exec(
      `INSERT INTO analytics_meta(key, value) VALUES (?, ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
      key,
      value,
    );
  }

  async fetch(request) {
    const url = new URL(request.url);
    // The day's first request, counted or not, retires the finished days.
    this.rollUpFinishedDays(utcDay(Date.now()));
    if (request.method === "POST" && url.pathname === "/hit") {
      const event = await request.json().catch(() => null);
      if (!isValidEvent(event)) return Response.json({ error: "Invalid analytics event" }, { status: 400 });
      this.recordHit(event, Date.now());
      return Response.json({ ...this.readStats(), scope: "all" });
    }
    if (request.method === "POST" && url.pathname === "/load") {
      const event = await request.json().catch(() => null);
      if (!isValidLoadEvent(event)) return Response.json({ error: "Invalid page-load event" }, { status: 400 });
      this.recordLoad(event, Date.now());
      return new Response(null, { status: 204 });
    }
    if (request.method === "GET" && url.pathname === "/stats") {
      return Response.json({ ...this.readStats(), scope: "all" });
    }
    if (request.method === "GET" && url.pathname === "/analytics") {
      return Response.json(this.readAnalyticsSummary());
    }
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  recordHit(event, now) {
    const today = utcDay(now);
    this.state.storage.transactionSync(() => {
      const knownVisitor = this.sql
        .exec("SELECT visitor_hash FROM visitors WHERE visitor_hash = ?", event.visitorHash)
        .toArray()[0];
      const uvDelta = knownVisitor ? 0 : 1;
      const seenToday = this.sql
        .exec("SELECT source FROM daily_visitors WHERE day = ? AND visitor_hash = ?", today, event.visitorHash)
        .toArray()[0];
      // A visitor keeps the day's first source.
      const source = seenToday?.source ?? event.source;
      this.sql.exec(
        `INSERT INTO daily_views(day, views) VALUES (?, 1)
         ON CONFLICT(day) DO UPDATE SET views = views + 1`,
        today,
      );
      if (!seenToday)
        this.sql.exec(
          "INSERT INTO daily_visitors(day, visitor_hash, source) VALUES (?, ?, ?)",
          today,
          event.visitorHash,
          event.source,
        );
      this.sql.exec(
        `INSERT INTO visitors(visitor_hash, last_seen_day) VALUES (?, ?)
         ON CONFLICT(visitor_hash) DO UPDATE SET last_seen_day = excluded.last_seen_day
         WHERE visitors.last_seen_day < excluded.last_seen_day`,
        event.visitorHash,
        today,
      );
      if (!knownVisitor)
        this.sql.exec(
          "UPDATE analytics_meta SET value = CAST(value AS INTEGER) + 1 WHERE key = ?",
          META.visitorTotal,
        );
      this.upsertBreakdown(BREAKDOWN_TABLES.countries, event.country, uvDelta);
      this.upsertBreakdown(BREAKDOWN_TABLES.sources, source, uvDelta);
      this.upsertBreakdown(BREAKDOWN_TABLES.pages, event.path, uvDelta);
      if (event.lat != null && event.lng != null) {
        this.sql.exec(
          `INSERT INTO analytics_points(lat, lng, count) VALUES (?, ?, 1)
           ON CONFLICT(lat, lng) DO UPDATE SET count = count + 1`,
          Math.round(event.lat),
          Math.round(event.lng),
        );
        this.trimPoints();
      }
    });
  }

  upsertBreakdown(table, key, uvDelta) {
    this.sql.exec(
      `INSERT INTO ${table}(dimension_key, pv, uv) VALUES (?, 1, ?)
       ON CONFLICT(dimension_key) DO UPDATE SET pv = pv + 1, uv = uv + excluded.uv`,
      key,
      uvDelta,
    );
    this.trimBreakdown(table);
  }

  /** Past MAX_BREAKDOWN_ROWS, the smallest rows fold into "__other__". */
  trimBreakdown(table) {
    const count = Number(this.sql.exec(`SELECT COUNT(*) AS count FROM ${table}`).one().count);
    const excess = count - MAX_BREAKDOWN_ROWS;
    if (excess <= 0) return;
    const rows = this.sql
      .exec(
        `SELECT dimension_key, pv, uv FROM ${table}
         WHERE dimension_key != ? ORDER BY pv ASC, uv ASC LIMIT ?`,
        OTHER_KEY,
        excess,
      )
      .toArray();
    for (const row of rows) {
      this.sql.exec(`DELETE FROM ${table} WHERE dimension_key = ?`, row.dimension_key);
      this.sql.exec(
        `INSERT INTO ${table}(dimension_key, pv, uv) VALUES (?, ?, ?)
         ON CONFLICT(dimension_key) DO UPDATE SET pv = pv + excluded.pv, uv = uv + excluded.uv`,
        OTHER_KEY,
        Number(row.pv),
        Number(row.uv),
      );
    }
  }

  trimPoints() {
    const count = Number(this.sql.exec("SELECT COUNT(*) AS count FROM analytics_points").one().count);
    const excess = count - MAX_POINT_ROWS;
    if (excess <= 0) return;
    const rows = this.sql
      .exec("SELECT lat, lng, count FROM analytics_points ORDER BY count ASC LIMIT ?", excess)
      .toArray();
    for (const row of rows)
      this.sql.exec("DELETE FROM analytics_points WHERE lat = ? AND lng = ?", row.lat, row.lng);
  }

  recordLoad(event, now) {
    const day = utcDay(now);
    this.state.storage.transactionSync(() => {
      for (const [metric, ms] of [["ttfb", event.ttfb], ["shown", event.shown]]) {
        this.sql.exec(
          `INSERT INTO load_times(day, country, metric, bucket, count) VALUES (?, ?, ?, ?, 1)
           ON CONFLICT(day, country, metric, bucket) DO UPDATE SET count = count + 1`,
          day,
          event.country,
          metric,
          loadTimeBucket(ms),
        );
      }
    });
  }

  readLoadTimes(today) {
    const rows = this.sql
      .exec(
        `SELECT country, metric, bucket, SUM(count) AS count FROM load_times
         WHERE day > ? GROUP BY country, metric, bucket`,
        today - LOAD_TIME_DAYS,
      )
      .toArray();
    const histograms = new Map();
    const histogram = (code) => {
      let entry = histograms.get(code);
      if (!entry) {
        const empty = () => new Array(LOAD_TIME_BUCKETS_MS.length + 1).fill(0);
        entry = { ttfb: empty(), shown: empty() };
        histograms.set(code, entry);
      }
      return entry;
    };
    for (const row of rows) {
      if (row.metric !== "ttfb" && row.metric !== "shown") continue;
      const bucket = Number(row.bucket);
      if (!(bucket >= 0 && bucket <= LOAD_TIME_BUCKETS_MS.length)) continue;
      const count = Number(row.count);
      for (const code of [row.country, "ALL"]) {
        const counts = histogram(code)[row.metric];
        counts[bucket] = (counts[bucket] ?? 0) + count;
      }
    }
    const summarize = (code) => {
      const { ttfb, shown } = histogram(code);
      return {
        code,
        n: ttfb.reduce((sum, count) => sum + count, 0),
        ttfbP50: loadTimePercentile(ttfb, 0.5),
        ttfbP75: loadTimePercentile(ttfb, 0.75),
        shownP50: loadTimePercentile(shown, 0.5),
        shownP75: loadTimePercentile(shown, 0.75),
      };
    };
    const countries = [...histograms.keys()]
      .filter((code) => code !== "ALL")
      .map(summarize)
      .sort((a, b) => b.n - a.n || a.code.localeCompare(b.code));
    return { days: LOAD_TIME_DAYS, all: histograms.has("ALL") ? summarize("ALL") : null, countries };
  }

  readStats() {
    const pv = this.sql.exec("SELECT COALESCE(SUM(views), 0) AS pv FROM daily_views").one();
    return { pv: Number(pv.pv), uv: Number(this.meta(META.visitorTotal)) };
  }

  readAnalyticsSummary() {
    const today = utcDay(Date.now());
    const firstDay = today - (RETAINED_DAYS - 1);
    const views = this.sql
      .exec("SELECT day, views FROM daily_views WHERE day >= ? ORDER BY day", firstDay)
      .toArray();
    // Finished days are counts; today still has its hashes.
    const visitors = this.sql
      .exec(
        `SELECT day, SUM(visitors) AS visitors FROM (
           SELECT day, visitors FROM daily_visitor_counts WHERE day >= ?
           UNION ALL
           SELECT day, COUNT(*) AS visitors FROM daily_visitors WHERE day >= ? GROUP BY day
         ) GROUP BY day ORDER BY day`,
        firstDay,
        firstDay,
      )
      .toArray();
    const viewsByDay = new Map(views.map((row) => [Number(row.day), Number(row.views)]));
    const visitorsByDay = new Map(visitors.map((row) => [Number(row.day), Number(row.visitors)]));
    const days = Array.from({ length: RETAINED_DAYS }, (_, index) => {
      const day = firstDay + index;
      return { date: utcDate(day), pv: viewsByDay.get(day) ?? 0, uv: visitorsByDay.get(day) ?? 0 };
    });
    const rows = (table, name) =>
      this.readBreakdown(table).map((row) => ({ [name]: row.dimension_key, pv: Number(row.pv), uv: Number(row.uv) }));
    const points = this.sql
      .exec("SELECT lat, lng, count FROM analytics_points ORDER BY count DESC LIMIT ?", MAX_POINT_ROWS)
      .toArray()
      .map((row) => ({ lat: Number(row.lat), lng: Number(row.lng), count: Number(row.count) }));
    return {
      generatedAt: new Date().toISOString(),
      totals: this.readStats(),
      today: days.at(-1) ?? { date: utcDate(today), pv: 0, uv: 0 },
      days,
      countries: rows(BREAKDOWN_TABLES.countries, "code"),
      points,
      paths: rows(BREAKDOWN_TABLES.pages, "path"),
      sources: rows(BREAKDOWN_TABLES.sources, "source"),
      breakdownStartedAt: this.meta("breakdown_started_at"),
      breakdownTotals: {
        countries: this.breakdownTotal(BREAKDOWN_TABLES.countries),
        sources: this.breakdownTotal(BREAKDOWN_TABLES.sources),
        pages: this.breakdownTotal(BREAKDOWN_TABLES.pages),
      },
      loadTimes: this.readLoadTimes(today),
    };
  }

  readBreakdown(table) {
    const rows = this.sql.exec(`SELECT dimension_key, pv, uv FROM ${table} ORDER BY pv DESC, uv DESC`).toArray();
    const other = rows.find((row) => row.dimension_key === OTHER_KEY);
    const regular = rows.filter((row) => row.dimension_key !== OTHER_KEY);
    return other ? [...regular, other] : regular;
  }

  breakdownTotal(table) {
    const row = this.sql.exec(`SELECT COALESCE(SUM(pv), 0) AS pv, COALESCE(SUM(uv), 0) AS uv FROM ${table}`).one();
    return { pv: Number(row.pv), uv: Number(row.uv) };
  }
}

export function loadTimeBucket(ms) {
  const index = LOAD_TIME_BUCKETS_MS.findIndex((bound) => ms <= bound);
  return index === -1 ? LOAD_TIME_BUCKETS_MS.length : index;
}

/** A histogram percentile, as the upper bound of its bucket; 0 when empty. */
export function loadTimePercentile(counts, quantile) {
  const total = counts.reduce((sum, count) => sum + count, 0);
  if (total === 0) return 0;
  const target = Math.ceil(total * quantile);
  let seen = 0;
  for (const [bucket, count] of counts.entries()) {
    seen += count;
    if (seen >= target) return LOAD_TIME_BUCKETS_MS[bucket] ?? LOAD_TIME_BUCKETS_MS.at(-1);
  }
  return LOAD_TIME_BUCKETS_MS.at(-1);
}

const isValidLoadTime = (ms) => typeof ms === "number" && Number.isInteger(ms) && ms >= 0 && ms <= MAX_LOAD_TIME_MS;

function isValidLoadEvent(event) {
  return Boolean(
    event && typeof event === "object" &&
    typeof event.country === "string" && /^[A-Z0-9]{2}$/.test(event.country) &&
    isValidLoadTime(event.ttfb) && isValidLoadTime(event.shown),
  );
}

function isValidEvent(event) {
  return Boolean(
    event && typeof event === "object" &&
    typeof event.visitorHash === "string" && /^[0-9a-f]{64}$/.test(event.visitorHash) &&
    typeof event.path === "string" && event.path.startsWith("/") && event.path.length <= 120 &&
    typeof event.country === "string" && /^[A-Z0-9]{2}$/.test(event.country) &&
    typeof event.source === "string" && event.source.length > 0 && event.source.length <= 120 &&
    (event.lat == null || (Number.isFinite(event.lat) && event.lat >= -90 && event.lat <= 90)) &&
    (event.lng == null || (Number.isFinite(event.lng) && event.lng >= -180 && event.lng <= 180)),
  );
}

// ---------- cookies ----------

export function readCookieValue(header, name) {
  if (!header) return null;
  for (const part of header.split(";")) {
    const [rawKey, ...rest] = part.trim().split("=");
    if (rawKey !== name) continue;
    const value = rest.join("=").trim();
    return /^[A-Za-z0-9._:-]{1,120}$/.test(value) ? value : null;
  }
  return null;
}

export function readVisitorId(header) {
  const value = readCookieValue(header, VISITOR_COOKIE);
  return value && /^[0-9a-f-]{36}$/i.test(value) ? value : null;
}

export const hasOptedOut = (header) => readCookieValue(header, ANALYTICS_OPT_OUT_COOKIE) === "1";

function cookie(name, value, maxAge, secure) {
  const parts = [`${name}=${value}`, "Path=/", `Max-Age=${maxAge}`, "SameSite=Lax", "HttpOnly"];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

export const visitorCookie = (id, secure) => cookie(VISITOR_COOKIE, id, VISITOR_COOKIE_MAX_AGE, secure);
export const visitorCookieExpiry = (secure) => cookie(VISITOR_COOKIE, "", 0, secure);
export const optOutCookie = (optedOut, secure) =>
  optedOut
    ? cookie(ANALYTICS_OPT_OUT_COOKIE, "1", OPT_OUT_COOKIE_MAX_AGE, secure)
    : cookie(ANALYTICS_OPT_OUT_COOKIE, "", 0, secure);

const utcDay = (timestamp) => Math.floor(timestamp / DAY_MS);
const utcDate = (day) => new Date(day * DAY_MS).toISOString().slice(0, 10);

async function hashVisitorId(visitorId) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(visitorId));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

// ---------- HTTP routes ----------

const [TRACK_ROUTE, STATS_ROUTE, ANALYTICS_ROUTE] = ANALYTICS_PERSISTENCE_IDENTITY.routes;
export const OPT_OUT_ROUTE = `${TRACK_ROUTE}/opt-out`;
export const PAGE_LOAD_ROUTE = `${TRACK_ROUTE}/load`;

const BOT_UA =
  /bot|crawler|spider|slurp|headless|phantom|pingdom|uptime|lighthouse|pagespeed|curl|wget|python|axios|fetch\//i;

const CAMPAIGN_SOURCES = {
  google: "search:google", bing: "search:bing", baidu: "search:baidu", duckduckgo: "search:duckduckgo",
  wechat: "social:wechat", weixin: "social:wechat", linkedin: "social:linkedin", twitter: "social:x",
  x: "social:x", github: "social:github", zhihu: "social:zhihu", bilibili: "social:bilibili",
  xiaohongshu: "social:xiaohongshu", rednote: "social:xiaohongshu", email: "campaign:email",
  newsletter: "campaign:email", qr: "campaign:qr", qrcode: "campaign:qr", rss: "campaign:rss",
};

const REFERRER_CATEGORIES = [
  ["search:bing", ["bing.com"]],
  ["search:baidu", ["baidu.com"]],
  ["search:duckduckgo", ["duckduckgo.com"]],
  ["search:yahoo", ["yahoo.com"]],
  ["search:yandex", ["yandex.com", "yandex.ru"]],
  ["search:ecosia", ["ecosia.org"]],
  ["search:naver", ["naver.com"]],
  ["search:sogou", ["sogou.com"]],
  ["search:360", ["so.com"]],
  ["social:wechat", ["weixin.qq.com", "servicewechat.com", "wechat.com"]],
  ["social:linkedin", ["linkedin.com", "lnkd.in"]],
  ["social:x", ["x.com", "twitter.com", "t.co"]],
  ["social:facebook", ["facebook.com", "fb.com"]],
  ["social:instagram", ["instagram.com"]],
  ["social:reddit", ["reddit.com", "redd.it"]],
  ["social:github", ["github.com"]],
  ["social:zhihu", ["zhihu.com"]],
  ["social:bilibili", ["bilibili.com"]],
  ["social:xiaohongshu", ["xiaohongshu.com", "xhslink.com"]],
];

const object = (env) => env.ANALYTICS.get(env.ANALYTICS.idFromName(ANALYTICS_PERSISTENCE_IDENTITY.objectName));

/** The whole analytics API, or null when the request is not one of its routes. */
export async function routeAnalyticsRequest(request, env) {
  const { pathname } = new URL(request.url);
  if (pathname === TRACK_ROUTE && request.method === "POST") return trackPageView(request, env);
  if (pathname === PAGE_LOAD_ROUTE && request.method === "POST") return trackPageLoad(request, env);
  if (pathname === OPT_OUT_ROUTE) return optOut(request);
  if (pathname === STATS_ROUTE && request.method === "GET") return stats(env);
  if (pathname === ANALYTICS_ROUTE && request.method === "GET") return analytics(request, env);
  return null;
}

/** Same-origin, not Do Not Track / Global Privacy Control / opted out, not a bot. */
function countable(request) {
  if (!isSameOriginTrackRequest(request)) return false;
  if (request.headers.get("DNT") === "1" || request.headers.get("Sec-GPC") === "1" || hasOptedOut(request.headers.get("Cookie")))
    return false;
  const userAgent = request.headers.get("User-Agent") ?? "";
  return Boolean(userAgent) && !BOT_UA.test(userAgent);
}

function requestCountry(request) {
  const raw = typeof request.cf?.country === "string" ? request.cf.country.toUpperCase() : "";
  return /^[A-Z0-9]{2}$/.test(raw) ? raw : "XX";
}

async function trackPageLoad(request, env) {
  const noContent = new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
  if (!countable(request)) return noContent;
  const payload = await request.json().catch(() => null);
  const ttfb = loadTimeMs(payload?.t);
  const shown = loadTimeMs(payload?.l);
  if (ttfb === null || shown === null) return noContent;
  try {
    await object(env).fetch("https://analytics.internal/load", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ country: requestCountry(request), ttfb, shown }),
    });
  } catch {
    // A lost report only thins the sample.
  }
  return noContent;
}

function loadTimeMs(raw) {
  if (typeof raw !== "number" || !Number.isFinite(raw)) return null;
  const ms = Math.round(raw);
  return ms >= 0 && ms <= MAX_LOAD_TIME_MS ? ms : null;
}

async function trackPageView(request, env) {
  if (!countable(request)) return new Response(null, { status: 204 });
  const payload = await request.json().catch(() => null);
  const path = normalizeTrackedPath(payload?.p);
  if (!path) return new Response(null, { status: 204 });
  const cookieHeader = request.headers.get("Cookie");
  const existing = readVisitorId(cookieHeader);
  const visitorId = existing ?? crypto.randomUUID();
  const source = normalizeAcquisitionSource(payload?.r, payload?.s, new URL(request.url));
  const cf = request.cf ?? {};
  const secure = request.url.startsWith("https://");
  const headers = new Headers({ "cache-control": "no-store" });
  // Set once, never renewed: the id lasts a year from the first visit.
  if (!existing) headers.append("Set-Cookie", visitorCookie(visitorId, secure));
  try {
    const response = await object(env).fetch("https://analytics.internal/hit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        visitorHash: await hashVisitorId(visitorId),
        path,
        country: requestCountry(request),
        lat: cfNumber(cf.latitude),
        lng: cfNumber(cf.longitude),
        source,
      }),
    });
    if (!response.ok) throw new Error(`Visit tracking failed (${response.status})`);
    return Response.json(await response.json(), { headers });
  } catch {
    return new Response(null, { status: 204, headers });
  }
}

/** "Stop counting me": the visitor id goes and the choice is kept 13 months. */
async function optOut(request) {
  const cookieHeader = request.headers.get("Cookie");
  const headers = new Headers({ "cache-control": "no-store" });
  if (request.method === "GET") return Response.json({ optedOut: hasOptedOut(cookieHeader) }, { headers });
  if (request.method !== "POST") return Response.json({ error: "method-not-allowed" }, { status: 405 });
  if (!isSameOriginTrackRequest(request)) return Response.json({ error: "forbidden" }, { status: 403 });
  const body = await request.json().catch(() => null);
  if (typeof body?.optOut !== "boolean") return Response.json({ error: "invalid-request" }, { status: 400 });
  const secure = request.url.startsWith("https://");
  headers.append("Set-Cookie", optOutCookie(body.optOut, secure));
  if (body.optOut) headers.append("Set-Cookie", visitorCookieExpiry(secure));
  return Response.json({ optedOut: body.optOut }, { headers });
}

async function stats(env) {
  try {
    const response = await object(env).fetch("https://analytics.internal/stats");
    if (!response.ok) throw new Error();
    return Response.json({ ...(await response.json()), scope: "all" }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: "Analytics unavailable" }, { status: 502 });
  }
}

async function analytics(request, env) {
  if (env.ANALYTICS_KEY && new URL(request.url).searchParams.get("key") !== env.ANALYTICS_KEY)
    return Response.json({ error: "Forbidden" }, { status: 403 });
  try {
    const response = await object(env).fetch("https://analytics.internal/analytics");
    if (!response.ok) throw new Error();
    return Response.json(await response.json(), { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: "Analytics unavailable" }, { status: 502 });
  }
}

export function normalizeTrackedPath(raw) {
  if (typeof raw !== "string") return null;
  let path = raw.split("?")[0]?.split("#")[0] ?? "";
  if (!path.startsWith("/")) return null;
  if (path.length > 120) path = path.slice(0, 120);
  if (path.startsWith("/api/") || /^\/analytics\/?$/.test(path)) return null;
  return path;
}

export function normalizeAcquisitionSource(rawReferrer, rawCampaignSource, siteUrl) {
  if (typeof rawCampaignSource === "string" && rawCampaignSource.trim()) {
    const key = rawCampaignSource.trim().toLowerCase();
    if (!/^[a-z0-9._-]{1,40}$/.test(key)) return "campaign:other";
    return CAMPAIGN_SOURCES[key] ?? "campaign:other";
  }
  if (typeof rawReferrer !== "string" || !rawReferrer.trim()) return "direct-or-unknown";
  try {
    const referrer = new URL(rawReferrer);
    if (!/^https?:$/.test(referrer.protocol)) return "direct-or-unknown";
    const hostname = canonicalHostname(referrer.hostname);
    if (!hostname || hostname === canonicalHostname(siteUrl.hostname)) return "direct-or-unknown";
    if (/^google\.[a-z.]+$/.test(hostname)) return "search:google";
    for (const [source, domains] of REFERRER_CATEGORIES)
      if (domains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`))) return source;
    return /^[a-z0-9.-]{1,100}$/.test(hostname) ? `ref:${hostname}` : "ref:other";
  } catch {
    return "direct-or-unknown";
  }
}

function isSameOriginTrackRequest(request) {
  const expectedOrigin = new URL(request.url).origin;
  const origin = request.headers.get("Origin");
  const fetchSite = request.headers.get("Sec-Fetch-Site");
  if (origin && origin !== expectedOrigin) return false;
  if (fetchSite && fetchSite !== "same-origin") return false;
  if (origin || fetchSite === "same-origin") return true;
  const referer = request.headers.get("Referer");
  if (!referer) return false;
  try {
    return new URL(referer).origin === expectedOrigin;
  } catch {
    return false;
  }
}

const canonicalHostname = (hostname) => hostname.toLowerCase().replace(/^www\./, "").replace(/\.$/, "");

function cfNumber(value) {
  if (!value) return null;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
}
