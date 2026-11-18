// The visitor analytics dashboard (/analytics), ported from Analog Canvas
// (apps/editor/analytics/AnalyticsPage.tsx) to plain JS: the same sections,
// labels, chart, world map and tables, with the same class names so the copied
// analytics.css applies unchanged.
(() => {
  const DEFAULT_RANGE_DAYS = 90;
  const DEFAULT_BREAKDOWN_ROWS = 10;
  const WORLD_BOUNDS = { west: -180, east: 180, south: -58, north: 84 };
  const MAP_W = 3600;
  const MAP_H = Math.round(MAP_W * ((WORLD_BOUNDS.north - WORLD_BOUNDS.south) / (WORLD_BOUNDS.east - WORLD_BOUNDS.west)));
  const fmt = new Intl.NumberFormat("en");
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const SOURCE_LABELS = {
    "direct-or-unknown": "Direct / unknown",
    "search:google": "Google Search",
    "search:bing": "Bing Search",
    "search:baidu": "Baidu Search",
    "search:duckduckgo": "DuckDuckGo Search",
    "search:yahoo": "Yahoo Search",
    "search:yandex": "Yandex Search",
    "search:ecosia": "Ecosia Search",
    "search:naver": "Naver Search",
    "search:sogou": "Sogou Search",
    "search:360": "360 Search",
    "social:wechat": "WeChat",
    "social:linkedin": "LinkedIn",
    "social:x": "X / Twitter",
    "social:facebook": "Facebook",
    "social:instagram": "Instagram",
    "social:reddit": "Reddit",
    "social:github": "GitHub",
    "social:zhihu": "Zhihu",
    "social:bilibili": "Bilibili",
    "social:xiaohongshu": "Xiaohongshu",
    "campaign:email": "Email / newsletter",
    "campaign:qr": "QR code",
    "campaign:rss": "RSS",
    "campaign:other": "Other campaign",
    "ref:other": "Other website",
    __other__: "Other sources",
  };

  function shiftUtcDay(iso, delta) {
    const date = new Date(`${iso}T00:00:00.000Z`);
    date.setUTCDate(date.getUTCDate() + delta);
    return date.toISOString().slice(0, 10);
  }

  function dayCount(from, to) {
    const start = Date.parse(`${from}T00:00:00.000Z`);
    const end = Date.parse(`${to}T00:00:00.000Z`);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) return 0;
    return Math.round((end - start) / 86_400_000) + 1;
  }

  const rowMetrics = (row) => ({ pv: row.pv ?? row.count ?? 0, uv: row.uv ?? 0 });

  // "Back" goes to the questions page the reader came from, else the home page.
  function backLink() {
    try {
      const from = new URL(document.referrer);
      if (from.origin === location.origin && /^\/(browse|review)?\/?$/.test(from.pathname))
        return { href: `${from.pathname}${from.search}`, label: "Back to questions" };
    } catch {
      // No referrer, or not a URL.
    }
    return { href: "/", label: "Back to Analog Bibles" };
  }

  function countryName(code) {
    if (code === "__other__") return "Other regions";
    if (code === "T1") return "Tor network";
    if (code === "XX") return "Unknown";
    try {
      return new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? code;
    } catch {
      return code;
    }
  }

  const sourceName = (source) => SOURCE_LABELS[source] ?? (source.startsWith("ref:") ? source.slice(4) : source);

  function formatLoadTime(ms) {
    if (ms <= 0) return "—";
    return `≤ ${(ms / 1000).toLocaleString("en-US", { maximumFractionDigits: 2 })} s`;
  }

  // ---------- world map ----------

  function ringToPath(ring, width, height) {
    if (ring.length < 2) return "";
    let path = "";
    for (let index = 0; index < ring.length; index++) {
      const [lng, lat] = ring[index];
      const x = ((lng - WORLD_BOUNDS.west) / (WORLD_BOUNDS.east - WORLD_BOUNDS.west)) * width;
      const y = ((WORLD_BOUNDS.north - lat) / (WORLD_BOUNDS.north - WORLD_BOUNDS.south)) * height;
      path += `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    return `${path}Z`;
  }

  function landPathsForWorld(land, width, height) {
    const paths = [];
    for (const feature of land.features) {
      const geometry = feature.geometry;
      if (!geometry) continue;
      const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
      for (const polygon of polygons) {
        const outer = polygon[0];
        if (!outer) continue;
        let path = ringToPath(outer, width, height);
        for (let index = 1; index < polygon.length; index++) path += ringToPath(polygon[index], width, height);
        if (path) paths.push(path);
      }
    }
    return paths;
  }

  function worldHeatmap(points, landPaths) {
    const maxCount = Math.max(1, ...points.map((point) => point.count));
    const heat = points.map((point) => {
      const cx = (point.lng + 180) * 10;
      const cy = (84 - point.lat) * 10;
      const radius = 18 + 64 * Math.sqrt(point.count / maxCount);
      const title = `<title>${esc(`${fmt.format(point.count)} views near ${point.lat}, ${point.lng}`)}</title>`;
      return `<g><circle class="analytics-heat-blob" cx="${cx}" cy="${cy}" r="${radius}">${title}</circle>` +
        `<circle class="analytics-heat-core" cx="${cx}" cy="${cy}" r="${Math.max(2.8, radius * 0.09)}">${title}</circle></g>`;
    }).join("");
    return `<div class="analytics-map-frame">
      <svg class="analytics-map-svg" viewBox="0 0 ${MAP_W} ${MAP_H}" role="img" aria-label="World heatmap of request origins">
        <defs><radialGradient id="analytics-heat-gradient">
          <stop offset="0%" stop-opacity="0.85"/><stop offset="55%" stop-opacity="0.35"/><stop offset="100%" stop-opacity="0"/>
        </radialGradient></defs>
        <rect class="analytics-map-ocean" x="0" y="0" width="${MAP_W}" height="${MAP_H}"/>
        <g class="analytics-map-land" aria-hidden="true">${landPaths.map((d) => `<path d="${d}"/>`).join("")}</g>
        <g class="analytics-map-heat">${heat}</g>
      </svg>
    </div>`;
  }

  // ---------- daily chart ----------

  function dailyChart(days) {
    const width = 900, height = 220, padTop = 16, padBottom = 22, padX = 2;
    const plotHeight = height - padTop - padBottom;
    const open = `<svg class="analytics-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Daily page views and unique visitors">`;
    if (!days.length)
      return `${open}<text class="analytics-chart-tick" x="${width / 2}" y="${height / 2}" text-anchor="middle">No days in this range</text></svg>`;
    const max = Math.max(1, ...days.map((day) => day.pv));
    const slot = (width - padX * 2) / days.length;
    const ticks = days.length === 1
      ? [{ index: 0, x: width / 2, anchor: "middle" }]
      : days.length === 2
        ? [{ index: 0, x: 0, anchor: "start" }, { index: 1, x: width, anchor: "end" }]
        : [
            { index: 0, x: 0, anchor: "start" },
            { index: Math.floor(days.length / 2), x: width / 2, anchor: "middle" },
            { index: days.length - 1, x: width, anchor: "end" },
          ];
    const bars = days.map((day, index) => {
      const pvHeight = (day.pv / max) * plotHeight;
      const uvHeight = (day.uv / max) * plotHeight;
      const x = padX + index * slot;
      const title = `<title>${esc(`${day.date}: ${fmt.format(day.pv)} views, ${fmt.format(day.uv)} visitors`)}</title>`;
      let g = `<g><rect class="analytics-chart-bar-pv" x="${x + slot * 0.18}" y="${height - padBottom - pvHeight}" width="${slot * 0.64}" height="${Math.max(pvHeight, day.pv > 0 ? 1.25 : 0)}">${title}</rect>`;
      if (day.uv > 0)
        g += `<rect class="analytics-chart-bar-uv" x="${x + slot * 0.34}" y="${height - padBottom - uvHeight}" width="${slot * 0.32}" height="${Math.max(uvHeight, 1.25)}">${title}</rect>`;
      return `${g}</g>`;
    }).join("");
    return `${open}${bars}
      <line class="analytics-chart-axis" x1="0" x2="${width}" y1="${height - padBottom}" y2="${height - padBottom}"/>
      <text class="analytics-chart-tick" x="0" y="${padTop - 2}">${fmt.format(max)}</text>
      ${ticks.map((tick) => `<text class="analytics-chart-tick" x="${tick.x}" y="${height - 4}" text-anchor="${tick.anchor}">${days[tick.index].date.slice(5)}</text>`).join("")}
    </svg>`;
  }

  // ---------- tables ----------

  const chevron = (expanded) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${expanded ? ' class="is-expanded"' : ""}><path d="m7 10 5 5 5-5"/></svg>`;

  function toggleButton(id, count, expanded) {
    return `<button type="button" class="analytics-table-toggle" data-toggle="${id}" aria-controls="${id}" aria-expanded="${expanded}">` +
      `<span>${expanded ? `Show top ${DEFAULT_BREAKDOWN_ROWS}` : `Show all ${count}`}</span>${chevron(expanded)}</button>`;
  }

  const emptyRow = (span, status) =>
    `<tr><td colspan="${span}" class="analytics-empty">${status === "loading" ? "Loading…" : status === "error" ? "Unavailable." : "No data yet."}</td></tr>`;

  function metricCell(value, total) {
    const percentage = total > 0 ? (value / total) * 100 : 0;
    return `<td class="num analytics-metric"><span>${fmt.format(value)}</span><span class="analytics-metric-distribution">${percentage.toFixed(1)}%</span></td>`;
  }

  function breakdownTable({ id, heading, rows, total, label, mono = false, status }) {
    const expanded = view.expanded.has(id);
    const visible = expanded ? rows : rows.slice(0, DEFAULT_BREAKDOWN_ROWS);
    const body = status || rows.length === 0
      ? emptyRow(3, status)
      : visible.map((row) => {
          const metric = rowMetrics(row);
          return `<tr><td${mono ? ' class="mono"' : ""}>${esc(label(row))}</td>${metricCell(metric.uv, total.uv)}${metricCell(metric.pv, total.pv)}</tr>`;
        }).join("");
    return `<div class="analytics-breakdown"><div class="analytics-table-scroll"><table class="analytics-table" id="${id}">
      <thead><tr><th scope="col">${heading}</th><th scope="col" class="num">Unique Visitors</th><th scope="col" class="num">Page Views</th></tr></thead>
      <tbody>${body}</tbody></table></div>${rows.length > DEFAULT_BREAKDOWN_ROWS ? toggleButton(id, rows.length, expanded) : ""}</div>`;
  }

  function loadTimeTable(loadTimes, status) {
    const id = "analytics-load-table";
    const expanded = view.expanded.has(id);
    const rows = loadTimes?.countries ?? [];
    const visible = expanded ? rows : rows.slice(0, DEFAULT_BREAKDOWN_ROWS);
    const cells = (row, label, strong = false) =>
      `<tr${strong ? ' class="analytics-load-all"' : ""}><td>${esc(label)}</td><td class="num">${fmt.format(row.n)}</td>` +
      `<td class="num">${formatLoadTime(row.ttfbP50)} · ${formatLoadTime(row.ttfbP75)}</td>` +
      `<td class="num">${formatLoadTime(row.shownP50)} · ${formatLoadTime(row.shownP75)}</td></tr>`;
    const body = status || !loadTimes?.all
      ? emptyRow(4, status)
      : cells(loadTimes.all, "All regions", true) + visible.map((row) => cells(row, countryName(row.code))).join("");
    return `<div class="analytics-breakdown"><div class="analytics-table-scroll"><table class="analytics-table" id="${id}" data-testid="analytics-load-table">
      <thead><tr><th scope="col">Region</th><th scope="col" class="num">Page loads</th><th scope="col" class="num">First byte (median · 75%)</th><th scope="col" class="num">Page shown (median · 75%)</th></tr></thead>
      <tbody>${body}</tbody></table></div>${rows.length > DEFAULT_BREAKDOWN_ROWS ? toggleButton(id, rows.length, expanded) : ""}</div>`;
  }

  function sectionHead(title, id, aside, meta = "") {
    return `<div class="analytics-section-head"><h2 id="${id}">${title}</h2><div class="analytics-section-head-meta">${meta}` +
      `${aside ? `<span class="analytics-aside" aria-hidden="true">${esc(aside)}</span>` : ""}</div></div>`;
  }

  const metric = (label, value) => `<div><dt>${label}</dt><dd>${value == null ? "—" : fmt.format(value)}</dd></div>`;

  const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 14.3A8.5 8.5 0 0 1 9.7 3a7 7 0 1 0 11.3 11.3Z"/></svg>';
  const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';

  // ---------- page ----------

  const view = {
    summary: null,
    error: false,
    from: "",
    to: "",
    landPaths: [],
    expanded: new Set(),
    back: backLink(),
  };

  function defaultRange() {
    const days = view.summary?.days ?? [];
    if (!days.length) return;
    const end = days[days.length - 1].date;
    const earliest = days[0].date;
    const start = shiftUtcDay(end, -(DEFAULT_RANGE_DAYS - 1));
    view.from = start < earliest ? earliest : start;
    view.to = end;
  }

  function visibleDays() {
    if (!view.summary || !view.from || !view.to) return [];
    const start = view.from < view.to ? view.from : view.to;
    const end = view.from < view.to ? view.to : view.from;
    return view.summary.days.filter((day) => day.date >= start && day.date <= end);
  }

  function render() {
    const { summary, error } = view;
    const status = !summary && !error ? "loading" : error ? "error" : null;
    const light = document.documentElement.classList.contains("light");
    const themeLabel = light ? "Switch to dark theme" : "Switch to light theme";
    const rangeDays = view.from && view.to ? dayCount(view.from < view.to ? view.from : view.to, view.from < view.to ? view.to : view.from) : 90;
    const minDate = summary?.days[0]?.date ?? "";
    const maxDate = summary?.days[summary.days.length - 1]?.date ?? "";
    const generated = summary
      ? new Date(summary.generatedAt).toLocaleString("en", { dateStyle: "medium", timeStyle: "short" })
      : "—";
    const zero = { pv: 0, uv: 0 };
    const focusedId = document.activeElement?.id;
    document.getElementById("root").innerHTML = `<div class="analytics-shell">
      <header class="analytics-top-bar" aria-label="Page controls">
        <div class="analytics-top-bar-left">
          <button type="button" class="analytics-theme-switch" id="analytics-theme" aria-label="${themeLabel}" title="${themeLabel}">${light ? MOON : SUN}</button>
        </div>
        <div class="analytics-top-bar-right">
          <a class="analytics-bug-report" href="https://github.com/cascode-ai/analog-bibles/issues/new" target="_blank" rel="noopener">Report a bug</a>
          <a class="analytics-home" href="${esc(view.back.href)}">← ${esc(view.back.label)}</a>
        </div>
      </header>
      <main class="analytics-page" id="content">
        <div class="analytics-container">
          <header class="analytics-head">
            <h1>Analytics</h1>
            <p class="analytics-sub">First-party counts · UTC days · updated <time datetime="${esc(summary?.generatedAt ?? "")}">${esc(generated)}</time></p>
          </header>
          ${error ? '<p class="analytics-error">Could not load analytics. If a dashboard key is set, append <code>?key=…</code> to the URL.</p>' : ""}
          <dl class="analytics-metrics" aria-label="Totals">
            ${metric("Unique visitors", summary?.totals.uv)}
            ${metric("Page views", summary?.totals.pv)}
            ${metric("Visitors today", summary?.today.uv)}
            ${metric("Views today", summary?.today.pv)}
          </dl>
          <section class="analytics-section" aria-labelledby="analytics-map-h">
            ${sectionHead("Origins", "analytics-map-h", "Map", '<p class="analytics-note">≈1° request buckets</p>')}
            ${worldHeatmap(summary?.points ?? [], view.landPaths)}
          </section>
          <section class="analytics-section" aria-labelledby="analytics-chart-h">
            ${sectionHead("Daily traffic", "analytics-chart-h", null,
              `<ul class="analytics-legend" aria-hidden="true"><li><span class="analytics-swatch analytics-swatch--pv"></span>Views</li><li><span class="analytics-swatch analytics-swatch--uv"></span>Visitors</li></ul>` +
              `<span class="analytics-aside" aria-hidden="true">${rangeDays === 1 ? "1 day" : `${rangeDays} days`}</span>`)}
            <form class="analytics-range" onsubmit="return false">
              <label class="analytics-range-field"><span>From</span>
                <input class="analytics-range-input" id="analytics-from" type="date" name="from" value="${view.from}" min="${minDate}" max="${maxDate}" required></label>
              <label class="analytics-range-field"><span>To</span>
                <input class="analytics-range-input" id="analytics-to" type="date" name="to" value="${view.to}" min="${minDate}" max="${maxDate}" required></label>
              <button type="button" class="analytics-range-reset" id="analytics-reset">Last 90 days</button>
              <span class="analytics-range-hint">UTC</span>
            </form>
            ${dailyChart(visibleDays())}
          </section>
          <div class="analytics-cols">
            <section class="analytics-section" aria-labelledby="analytics-countries-h">
              ${sectionHead("ISO 3166 Code", "analytics-countries-h", "Top")}
              ${breakdownTable({ id: "analytics-countries", heading: "Region", rows: summary?.countries ?? [], total: summary?.breakdownTotals.countries ?? zero, label: (row) => countryName(row.code), status })}
            </section>
            <section class="analytics-section" aria-labelledby="analytics-sources-h">
              ${sectionHead("Sources", "analytics-sources-h", "Top")}
              ${breakdownTable({ id: "analytics-sources", heading: "Source", rows: summary?.sources ?? [], total: summary?.breakdownTotals.sources ?? zero, label: (row) => sourceName(row.source), status })}
            </section>
            <section class="analytics-section analytics-section--wide" aria-labelledby="analytics-pages-h">
              ${sectionHead("Pages", "analytics-pages-h", "Top")}
              ${breakdownTable({ id: "analytics-pages", heading: "Path", rows: summary?.paths ?? [], total: summary?.breakdownTotals.pages ?? zero, label: (row) => (row.path === "__other__" ? "Other pages" : row.path), mono: true, status })}
            </section>
            <section class="analytics-section analytics-section--wide" aria-labelledby="analytics-load-h">
              ${sectionHead("Page load", "analytics-load-h", `Last ${summary?.loadTimes?.days ?? 30} days`)}
              ${loadTimeTable(summary?.loadTimes, status)}
            </section>
          </div>
        </div>
      </main>
    </div>`;
    if (focusedId) document.getElementById(focusedId)?.focus();
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.id === "analytics-theme") {
      const next = document.documentElement.classList.contains("light") ? "dark" : "light";
      document.documentElement.classList.toggle("light", next === "light");
      try { localStorage.setItem("ab.analyticsTheme", next); } catch {}
      render();
    } else if (target.id === "analytics-reset") {
      defaultRange();
      render();
    } else if (target.dataset.toggle) {
      const id = target.dataset.toggle;
      if (view.expanded.has(id)) view.expanded.delete(id);
      else view.expanded.add(id);
      render();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "analytics-from") view.from = event.target.value;
    else if (event.target.id === "analytics-to") view.to = event.target.value;
    else return;
    render();
  });

  render();
  const key = new URLSearchParams(location.search).get("key");
  fetch(key ? `/api/analytics?key=${encodeURIComponent(key)}` : "/api/analytics", { headers: { Accept: "application/json" } })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      if (!data?.totals || !Array.isArray(data.days)) throw new Error("Unexpected analytics response");
      view.summary = data;
      defaultRange();
      render();
    })
    .catch(() => {
      view.error = true;
      render();
    });
  fetch("/land-110m.json")
    .then((response) => response.json())
    .then((land) => {
      view.landPaths = landPathsForWorld(land, MAP_W, MAP_H);
      render();
    })
    .catch(() => {
      // The map is drawn without land.
    });
})();
