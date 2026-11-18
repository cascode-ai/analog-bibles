// One question at a time: the question, its figures, then the reference answer.
// /browse (and /) only shows them; /review is the maintainers' mode, where P
// passes a question, a reason (1–6) plus Enter reports an issue, and a note
// alone is a comment. English by default; the A/文 button switches to Chinese.

const STRINGS = {
  en: {
    sub: "Razavi · Gray · Allen textbook problems",
    modes: "Mode",
    browse: "Browse",
    review: "Review",
    reviewTitle: "For maintainers: pass, report issues, comment",
    switchLang: "切换到中文",
    search: "Search ID, problem no. or text (/)",
    sideWidth: "Sidebar width",
    analytics: "Analytics",
    analyticsTitle: "Open visitor analytics",
    privacy: "Privacy",
    visits: (uv, pv) => `${uv} visitors · ${pv} views`,
    sideWidthTitle: "Drag to resize; double-click to reset",
    book: "Book",
    difficulty: "Difficulty",
    status: "Status",
    name: "Name",
    namePh: "Your name (optional)",
    hintReview: "Keys: ← → step · R random · P pass · 1–6 pick a reason · Enter submit",
    hintBrowse: "Keys: ← → step · R random · / search",
    prev: "Previous (←)",
    next: "Next (→)",
    random: "Random",
    randomTitle: "A random question (R)",
    loading: "Loading…",
    loadFailed: "Failed to load.",
    indexFailed: "Could not load the questions. Please refresh.",
    noMatch: "No questions match these filters.",
    bookAll: "All, in order",
    bookRandom: "Random",
    all: "All",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    simulation: "Simulation",
    unseen: "Not reviewed by me",
    hasIssue: "Issues reported",
    hasNotes: "Has comments",
    fQuestion: "Question wrong",
    fAnswer: "Answer wrong",
    fFigure: "Figure wrong / missing",
    fRender: "Formula / formatting",
    fLevel: "Wrong difficulty",
    fOther: "Other",
    progress: (p, f, l) => `Me: <b>${p}</b> passed · <b>${f}</b> flagged · <b>${l}</b> to review`,
    youPassed: "✓ You passed",
    youFlagged: "✕ You flagged",
    stats: (p, i, c) => `${p} passed · ${i} issues · ${c} comments`,
    notePh: "Comment, or say what is wrong (optional). Enter submits, Shift+Enter for a new line",
    pass: "✓ Pass",
    passTitle: "Question and answer are both fine (P)",
    issue: "✕ Report issue",
    issueTitleNone: "Pick a reason below first",
    issueTitle: "Send the reasons with your note",
    reasons: "Reasons",
    othersLoading: "Reviews (loading)",
    othersFailed: "Could not load reviews",
    othersCount: (n) => `Reviews (${n})`,
    othersNone: "No one has reviewed this question yet",
    anonymous: "Anonymous",
    vPass: "✓ Pass",
    vIssue: "✕ Issue",
    vComment: "💬 Comment",
    del: "Delete",
    delTitle: "Delete my review",
    question: "Question",
    answer: "Reference answer",
    grading: "Grading notes",
    refFig: "Reference figure",
    fig: (n) => `Fig. ${n}`,
    pickReason: "Pick a reason first (1–6).",
    commented: "Comment posted.",
    failed: (e) => `Could not submit: ${e}`,
    keyTitle: "Review mode (maintainers)",
    keyAsk: "Review mode is for passing, reporting and commenting on questions, and needs the maintainer key.",
    keyWrong: "That key is not right. Please try again.",
    keyBrowse: 'To just read the questions, use <a href="/browse">Browse</a>.',
    keyPh: "Maintainer key",
    keyGo: "Enter review",
    earlier: "↑ Show earlier questions",
    reviewThis: "Review ↗",
    focus: "Focus reading",
    listView: "Scrolling list",
    solution: "Solution",
    hideSidebar: "Collapse sidebar",
    showSidebar: "Expand sidebar",
    showOriginal: "English original",
    showTranslation: "中文",
    prevCh: "Previous chapter (Shift+←)",
    nextCh: "Next chapter (Shift+→)",
    gotoTitle: "Type a question number and press Enter",
    chapter: (n) => `Ch. ${n}`,
    exercise: (e) => `Problem ${e}`,
    chapterNeedsBook: "Pick one book (Razavi, Gray or Allen) to step by chapter",
    detailed: "Detailed solution",
    unreviewed: "Unreviewed",
    reviewThisTitle: "Review this question: pass it, report an issue or comment (maintainers)",
    bookName: { razavi: "Razavi", gray: "Gray", allen: "Allen" },
  },
  zh: {
    sub: "Razavi · Gray · Allen 教材习题",
    modes: "模式",
    browse: "浏览",
    review: "审阅",
    reviewTitle: "给维护者：通过、报错、评论",
    switchLang: "Switch to English",
    search: "搜索 ID、题号或题目（/）",
    sideWidth: "侧边栏宽度",
    analytics: "访问统计",
    analyticsTitle: "打开访问统计",
    privacy: "隐私",
    visits: (uv, pv) => `${uv} 位访客 · ${pv} 次浏览`,
    sideWidthTitle: "拖动调整宽度，双击恢复默认",
    book: "教材",
    difficulty: "难度",
    status: "状态",
    name: "署名",
    namePh: "你的名字（可选）",
    hintReview: "快捷键：← → 翻题 · R 随机 · P 通过 · 1–6 选报错原因 · Enter 提交",
    hintBrowse: "快捷键：← → 翻题 · R 随机 · / 搜索",
    prev: "上一题 (←)",
    next: "下一题 (→)",
    random: "随机",
    randomTitle: "随机一道题 (R)",
    loading: "加载中…",
    loadFailed: "加载失败。",
    indexFailed: "题库加载失败，请刷新重试。",
    noMatch: "没有符合条件的题目。",
    bookAll: "全部（按顺序）",
    bookRandom: "随机",
    all: "全部",
    easy: "简单",
    medium: "中等",
    hard: "困难",
    simulation: "仿真",
    unseen: "我未审过",
    hasIssue: "有人报错",
    hasNotes: "有评论",
    fQuestion: "题目有误",
    fAnswer: "答案有误",
    fFigure: "题图有误/缺图",
    fRender: "公式/排版问题",
    fLevel: "难度不当",
    fOther: "其他",
    progress: (p, f, l) => `我：<b>${p}</b> 通过 · <b>${f}</b> 报错 · <b>${l}</b> 未审`,
    youPassed: "✓ 你已通过",
    youFlagged: "✕ 你已报错",
    stats: (p, i, c) => `${p} 通过 · ${i} 报错 · ${c} 评论`,
    notePh: "评论或说明哪里有问题（可选）。Enter 提交，Shift+Enter 换行",
    pass: "✓ 通过",
    passTitle: "题目和答案都没问题 (P)",
    issue: "✕ 报错",
    issueTitleNone: "先在下面选原因",
    issueTitle: "提交报错原因和说明",
    reasons: "报错原因",
    othersLoading: "其他人的审阅（加载中）",
    othersFailed: "审阅记录加载失败",
    othersCount: (n) => `其他人的审阅（${n}）`,
    othersNone: "还没有人审阅这道题",
    anonymous: "匿名",
    vPass: "✓ 通过",
    vIssue: "✕ 报错",
    vComment: "💬 评论",
    del: "删除",
    delTitle: "删除我的这条",
    question: "题目",
    answer: "参考答案",
    grading: "评分说明",
    refFig: "参考图",
    fig: (n) => `图 ${n}`,
    pickReason: "先选一个报错原因（1–6）。",
    commented: "评论已发布。",
    failed: (e) => `提交失败：${e}`,
    keyTitle: "审阅模式（维护者）",
    keyAsk: "审阅模式用来通过、报错、评论，需要维护者口令。",
    keyWrong: "口令不对，请重新输入。",
    keyBrowse: '只想看题，请用 <a href="/browse">浏览模式</a>。',
    keyPh: "维护者口令",
    keyGo: "进入审阅",
    earlier: "↑ 显示前面的题",
    reviewThis: "审阅这题 ↗",
    focus: "专注阅读",
    listView: "连续浏览",
    solution: "解答",
    hideSidebar: "收起侧边栏",
    showSidebar: "展开侧边栏",
    showOriginal: "查看英文原文",
    showTranslation: "查看中文译文",
    prevCh: "上一章 (Shift+←)",
    nextCh: "下一章 (Shift+→)",
    gotoTitle: "输入题号后按回车",
    chapter: (n) => `第 ${n} 章`,
    exercise: (e) => `习题 ${e}`,
    chapterNeedsBook: "先选一本书（Razavi、Gray 或 Allen）才能按章跳转",
    detailed: "详细步骤",
    unreviewed: "未审核",
    reviewThisTitle: "进入这道题的审阅：通过、报错、评论（维护者）",
    bookName: { razavi: "Razavi", gray: "Gray", allen: "Allen" },
  },
};

// "all" walks the three books in their order (→ is the next question);
// "random" is the same questions shuffled.
const BOOKS = [
  { key: "all", label: "bookAll" },
  { key: "random", label: "bookRandom" },
  { key: "razavi" },
  { key: "gray" },
  { key: "allen" },
];
const LEVELS = ["all", "easy", "medium", "hard", "simulation"];
const STATUSES = [
  { key: "all", label: "all" },
  { key: "unseen", label: "unseen" },
  { key: "issue", label: "hasIssue" },
  { key: "notes", label: "hasNotes" },
];
const FLAGS = [
  { key: "question", label: "fQuestion", hotkey: "1" },
  { key: "answer", label: "fAnswer", hotkey: "2" },
  { key: "figure", label: "fFigure", hotkey: "3" },
  { key: "render", label: "fRender", hotkey: "4" },
  { key: "level", label: "fLevel", hotkey: "5" },
  { key: "other", label: "fOther", hotkey: "6" },
];

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* private window */ } },
};
const client = store.get("ab.client") || (() => {
  const id = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now();
  store.set("ab.client", id);
  return id;
})();

const params = new URLSearchParams(location.search);
// A link's ?lang= wins, then the reader's last choice; English otherwise.
let lang = ["en", "zh"].includes(params.get("lang")) ? params.get("lang") : store.get("ab.lang") === "zh" ? "zh" : "en";
const t = (key, ...args) => {
  const value = STRINGS[lang][key];
  return typeof value === "function" ? value(...args) : value;
};
const bookName = (book) => STRINGS[lang].bookName[book] || book;

// /browse (and /) only shows the questions; /review is the maintainers' mode,
// behind the review key that the Worker checks on every API call.
const mode = location.pathname.startsWith("/review") ? "review" : "browse";
document.body.dataset.mode = mode;
let reviewKey = store.get("ab.key") || "";
const apiHeaders = () => ({ "x-review-key": reviewKey });

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const num = (n) => n.toLocaleString("en-US");

const state = {
  all: [],
  shuffled: [],
  summary: {},
  mine: {},
  scope: BOOKS.some((b) => b.key === params.get("scope")) ? params.get("scope") : "all",
  level: LEVELS.includes(params.get("level")) ? params.get("level") : "all",
  status: mode === "review" && STATUSES.some((s) => s.key === params.get("status")) ? params.get("status") : "all",
  search: "",
  // Browse opens one question at a time (question left, answer right); the
  // scrolling list of cards is the alternative, ?view=list.
  focus: mode === "browse" && params.get("view") !== "list",
  sidebarClosed: store.get("ab.sidebarClosed") === "1",
  cards: [],
  index: 0,
  flags: [],
  busy: false,
  ready: false,
  keyPrompt: null,
};

// ---------- language ----------

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); el.title = t(el.dataset.i18nPh); });
  $("side-resizer").setAttribute("aria-label", t("sideWidth"));
  $("side-resizer").title = t("sideWidthTitle");
  document.querySelectorAll("[data-i18n-title]").forEach((el) => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  const button = $("lang-switch");
  button.title = t("switchLang");
  button.setAttribute("aria-label", t("switchLang"));
  applySidebar();
  showVisitStats();
}

function applySidebar() {
  $("side").hidden = state.sidebarClosed;
  document.body.classList.toggle("sidebar-collapsed", state.sidebarClosed);
  const button = $("sidebar-toggle");
  const label = t(state.sidebarClosed ? "showSidebar" : "hideSidebar");
  button.setAttribute("aria-expanded", String(!state.sidebarClosed));
  button.setAttribute("aria-label", label);
  button.title = label;
}

function setSidebar(closed) {
  state.sidebarClosed = closed;
  store.set("ab.sidebarClosed", closed ? "1" : "0");
  applySidebar();
}

$("sidebar-toggle").addEventListener("click", () => setSidebar(!state.sidebarClosed));

// The sidebar's width: drag its right edge (or ←/→ on it), double-click to reset.
const SIDE_DEFAULT = 260, SIDE_MIN = 180, SIDE_MAX = 480;
function setSideWidth(px, save = true) {
  const value = Math.max(SIDE_MIN, Math.min(SIDE_MAX, Math.round(px)));
  document.documentElement.style?.setProperty("--side-w", `${value}px`);
  $("side-resizer").setAttribute("aria-valuenow", String(value));
  if (save) store.set("ab.sideWidth", String(value));
}
setSideWidth(Number(store.get("ab.sideWidth")) || SIDE_DEFAULT, false);
$("side-resizer").addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  event.preventDefault();
  const handle = event.currentTarget;
  handle.setPointerCapture(event.pointerId);
  handle.classList.add("dragging");
  const left = handle.closest(".sidebar-shell").getBoundingClientRect().left;
  const move = (e) => setSideWidth(e.clientX - left);
  const end = () => {
    handle.classList.remove("dragging");
    handle.removeEventListener("pointermove", move);
    handle.removeEventListener("lostpointercapture", end);
  };
  handle.addEventListener("pointermove", move);
  handle.addEventListener("lostpointercapture", end);
});
$("side-resizer").addEventListener("dblclick", () => setSideWidth(SIDE_DEFAULT));
$("side-resizer").addEventListener("keydown", (event) => {
  const now = Number($("side-resizer").getAttribute("aria-valuenow"));
  const to = { ArrowLeft: now - 20, ArrowRight: now + 20, Home: SIDE_MIN, End: SIDE_MAX }[event.key];
  if (to === undefined) return;
  event.preventDefault();
  event.stopPropagation();
  setSideWidth(to);
});

// ---------- visitor analytics, as on Analog Canvas ----------
// The bottom bar shows the public totals to every visitor. Only the
// production site counts this page load: once, without blocking anything,
// and never for a browser that asks not to be tracked.
let visitStats = null;

function showVisitStats() {
  const link = $("visit-stats");
  if (!link) return;
  link.hidden = !visitStats;
  if (visitStats) link.textContent = t("visits", num(visitStats.uv), num(visitStats.pv));
}

function reportPageLoad() {
  if (document.visibilityState === "hidden") return;
  let largestPaint = 0;
  let observer = null;
  try {
    observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) largestPaint = entry.startTime;
    });
    observer.observe({ type: "largest-contentful-paint", buffered: true });
  } catch {
    observer = null;
  }
  const send = () => {
    observer?.disconnect();
    const navigation = performance.getEntriesByType("navigation")[0];
    if (!navigation) return;
    const shown = largestPaint || navigation.loadEventEnd;
    if (!(navigation.responseStart > 0) || !(shown > 0)) return;
    fetch("/api/track/load", {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "same-origin",
      keepalive: true,
      cache: "no-store",
      body: JSON.stringify({ t: Math.round(navigation.responseStart), l: Math.round(shown) }),
    }).catch(() => {});
  };
  // The largest paint settles shortly after load.
  const afterLoad = () => setTimeout(send, 3000);
  if (document.readyState === "complete") afterLoad();
  else addEventListener("load", afterLoad, { once: true });
}

function trackVisit() {
  if (typeof fetch !== "function") return;
  fetch("/api/stats", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((value) => {
      if (value && Number.isFinite(value.pv) && Number.isFinite(value.uv)) {
        visitStats = value;
        showVisitStats();
      }
    })
    .catch(() => {});
  const host = String(location.hostname || "");
  const counted = host === "analog-bibles.tokenzhang.com" || host.endsWith(".workers.dev");
  if (!counted) return;
  // Do Not Track and Global Privacy Control both mean: do not count me.
  if (navigator.doNotTrack === "1" || navigator.globalPrivacyControl === true) return;
  let referrer = "";
  try {
    const from = new URL(document.referrer);
    if (/^https?:$/.test(from.protocol)) referrer = from.origin;
  } catch {
    // Direct visit or opaque referrer.
  }
  const source = (new URLSearchParams(location.search).get("utm_source") ?? "").trim().toLowerCase().slice(0, 40);
  fetch("/api/track", {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "same-origin",
    keepalive: true,
    cache: "no-store",
    body: JSON.stringify({ p: location.pathname, r: referrer, s: source }),
  }).catch(() => {});
  reportPageLoad();
}

$("lang-switch").addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  store.set("ab.lang", lang);
  applyLanguage();
  if (state.keyPrompt !== null) askForKey(state.keyPrompt);
  else if (!state.ready) syncUrl();
  else if (mode === "review" || state.focus) renderItem(true);
  else {
    // The same place in the list, in the other language.
    const y = window.scrollY;
    renderFeed(feed.start);
    while (feed.end <= state.index) appendCards();
    window.scrollTo({ top: y });
  }
});

// ---------- data ----------

// The question texts for the search box, fetched the first time someone
// searches (the light index the page starts with leaves them out).
let searchText = null;
let searchLoad = null;
function loadSearch() {
  if (searchText || searchLoad || !window.AB?.search) return searchLoad;
  searchLoad = fetch(window.AB.search)
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((texts) => {
      searchText = texts;
      if (state.ready && state.search) {
        refilter(state.cards[state.index]?.id);
        render(0);
      }
    })
    .catch(() => { searchLoad = null; });
  return searchLoad;
}

// All of a question's Markdown files in one cached request (b/<id>.<v>.json),
// or file by file from /q/ where there is no bundle.
const bundles = new Map();
function bundle(q) {
  if (!q.v) return Promise.resolve(null);
  if (!bundles.has(q.id)) {
    bundles.set(q.id, fetch(`/b/${encodeURIComponent(q.id)}.${q.v}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null));
  }
  return bundles.get(q.id);
}
const asset = (q, file) => `/q/${encodeURIComponent(q.id)}/${encodeURIComponent(file)}${q.v ? `?v=${q.v}` : ""}`;

async function getJSON(url) {
  const response = await fetch(url, { credentials: "same-origin", headers: apiHeaders() });
  if (!response.ok) throw Object.assign(new Error(`${url}: ${response.status}`), { status: response.status });
  return response.json();
}

function shuffle(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function matches(q, { scope = state.scope, level = state.level, status = state.status } = {}) {
  if (scope !== "random" && scope !== "all" && q.book !== scope) return false;
  if (level !== "all" && q.level !== level) return false;
  const s = state.summary[q.id];
  if (status === "unseen" && state.mine[q.id]) return false;
  if (status === "issue" && !(s && s[1])) return false;
  if (status === "notes" && !(s && s[2])) return false;
  if (state.search) {
    const needle = state.search.toLowerCase();
    // Textbook references use the light index's metadata, without needing
    // the question texts. Match complete numbers so 7.6 cannot find 7.60;
    // a base number includes its parenthesized subparts.
    const problem = needle.match(/^(?:(razavi|gray|allen)\s+(?:problems?\s+)?)?((?:\d+(?:[.-]\d+)+|a-\d+)(?:\s*\(.*\))?)$/);
    if (problem) {
      if (problem[1] && q.book !== problem[1]) return false;
      const exercise = q.ex.toLowerCase();
      if (exercise !== problem[2] && exercise.replace(/\s*\(.*$/, "") !== problem[2]) return false;
    } else {
      const text = q.t !== undefined ? q.t.toLowerCase() : searchText?.[q.id] || "";
      if (!q.id.toLowerCase().includes(needle) && !text.includes(needle)) return false;
    }
  }
  return true;
}

function refilter(keepId) {
  const base = state.scope === "random" ? state.shuffled : state.all;
  state.cards = base.filter((q) => matches(q));
  const at = keepId ? state.cards.findIndex((q) => q.id === keepId) : -1;
  state.index = at >= 0 ? at : 0;
}

// ---------- markdown + math ----------

function renderMarkdown(text) {
  const maths = [];
  const keep = (tex, display) => {
    maths.push({ tex, display });
    return `@@MATH${maths.length - 1}@@`;
  };
  const src = text
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => keep(m, true))
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => keep(m, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, m) => keep(m, false))
    .replace(/\$(?!\s)((?:\\\$|[^$\n])+?)\$/g, (_, m) => keep(m, false));
  const html = window.marked ? window.marked.parse(src) : `<p>${esc(src)}</p>`;
  return html.replace(/@@MATH(\d+)@@/g, (_, i) => {
    const { tex, display } = maths[Number(i)];
    try {
      return window.katex.renderToString(tex, { displayMode: display, throwOnError: false });
    } catch {
      return esc(display ? `$$${tex}$$` : `$${tex}$`);
    }
  });
}

// The answer file: its title, the answer, then the grading notes.
function splitSolution(text) {
  const at = text.search(/^## Grading notes\s*$/m);
  const body = (at >= 0 ? text.slice(0, at) : text)
    .replace(/^# .*\n/, "")
    .replace(/^## Reference answer\s*\n/m, "");
  return { body, grading: at >= 0 ? text.slice(at).replace(/^## Grading notes\s*\n/, "") : "" };
}

// ---------- sidebar ----------

function renderSide() {
  const row = (key, label, on, count, kind) =>
    `<button type="button" class="row${on ? " on" : ""}" data-kind="${kind}" data-key="${key}">` +
    `<span>${esc(label)}</span><span class="n">${num(count)}</span></button>`;
  $("scopes").innerHTML = BOOKS.map((b) =>
    row(b.key, b.label ? t(b.label) : bookName(b.key), b.key === state.scope,
      state.all.filter((q) => matches(q, { scope: b.key })).length, "scope")).join("");
  $("levels").innerHTML = LEVELS.map((l) =>
    row(l, t(l), l === state.level, state.all.filter((q) => matches(q, { level: l })).length, "level")).join("");
  $("statuses").innerHTML = STATUSES.map((s) =>
    row(s.key, t(s.label), s.key === state.status, state.all.filter((q) => matches(q, { status: s.key })).length, "status")).join("");
}

function renderProgress() {
  const total = state.cards.length;
  let passed = 0;
  let flagged = 0;
  for (const q of state.cards) {
    if (state.mine[q.id] === "pass") passed++;
    else if (state.mine[q.id] === "issue") flagged++;
  }
  const w = (n) => `${(100 * n) / Math.max(1, total)}%`;
  $("progress").innerHTML =
    `<div class="bar" aria-hidden="true"><span class="p" style="width:${w(passed)}"></span><span class="i" style="width:${w(flagged)}"></span></div>` +
    `<span>${t("progress", num(passed), num(flagged), num(total - passed - flagged))}</span>`;
  updatePosition();
}

function syncUrl() {
  const q = state.cards[state.index];
  const parts = [`scope=${state.scope}`];
  if (state.level !== "all") parts.push(`level=${state.level}`);
  if (state.status !== "all") parts.push(`status=${state.status}`);
  if (q) parts.push(`id=${encodeURIComponent(q.id)}`);
  if (lang === "zh") parts.push("lang=zh");
  const focusPart = mode === "browse" && !state.focus ? "&view=list" : "";
  history.replaceState(null, "", `/${mode}?${parts.join("&")}${focusPart}`);
  $("reading-view").textContent = t(state.focus ? "listView" : "focus");
  $("reading-view").setAttribute("aria-pressed", String(state.focus));
  // The mode switch keeps the question, filters and language (status is review's own).
  $("mode-browse").href = `/browse?${parts.filter((p) => !p.startsWith("status=")).join("&")}${mode === "review" ? "" : focusPart}`;
  $("mode-review").href = `/review?${parts.join("&")}`;
}

// ---------- the question ----------

let shownId = null;

// keepFlags: a re-render of the same question (a language switch) keeps
// the reasons picked and the note typed.
async function renderItem(keepFlags = false) {
  disposeImageViews($("item"));
  cardSizes.disconnect();
  pin.el = null;
  const reviewing = mode === "review";
  document.body.classList.add("single-reading");
  renderSide();
  renderProgress();
  syncUrl();
  const q = state.cards[state.index];
  const item = $("item");
  item.className = "item reader";
  if (!q) {
    shownId = null;
    delete item.dataset.qid;
    item.innerHTML = `<p class="empty">${t("noMatch")}</p>`;
    return;
  }
  const note = keepFlags && $("note") ? $("note").value : "";
  if (shownId !== q.id) state.flags = [];
  shownId = q.id;
  const s = state.summary[q.id] || [0, 0, 0];
  const mine = state.mine[q.id];
  item.dataset.qid = q.id;
  item.innerHTML = `
    ${cardHead(q, reviewing ? `
      ${mine ? `<span class="mine-${mine}">${mine === "pass" ? t("youPassed") : t("youFlagged")}</span>` : ""}
      <span class="stats">${t("stats", num(s[0]), num(s[1]), num(s[2]))}</span>` : "")}
    ${reviewing ? reviewControls(mine) : ""}
    ${cardBody(q, reviewing)}`;
  if ($("note")) $("note").value = note;
  if (reviewing) renderFlags();
  if (await fillCard(item, q) && reviewing) loadOthers(q.id);
}

function cardHead(q, extra = "") {
  return `
    <div class="head">
      <span class="id">${esc(q.id)}</span>
      ${q.reviewStatus !== "APPROVED" ? `<span class="review-status">${t("unreviewed")}</span>` : ""}
      <span class="tag">${bookName(q.book)} · ${t("exercise", q.ex)}</span>
      <span class="tag lv-${q.level}">${t(q.level)}</span>
      ${extra}
    </div>`;
}

function cardBody(q, reviewing = false) {
  return `
    <div class="cols">
      <section class="panel question-panel" tabindex="-1" role="region" aria-label="${esc(t("question"))}">
        <h4>${t("question")}${lang === "zh" && q.zh ? ` <button type="button" class="orig-toggle">${t("showOriginal")}</button>` : ""}</h4>
        <div class="md q-question"><p class="empty">${t("loading")}</p></div>
        <div class="pics">${q.figs.map((f, i) => picture(q, f, t("fig", i + 1))).join("")}</div>
      </section>
      <div class="pane-resizer" role="separator" tabindex="0" aria-label="${esc(t("solution"))}" aria-orientation="vertical" aria-valuemin="25" aria-valuemax="70" aria-valuenow="40"></div>
      <section class="panel solution-panel" tabindex="-1" role="region" aria-label="${esc(t("solution"))}">
        <div class="solution-tabs" role="tablist" aria-label="${esc(t("solution"))}">
          ${["answer", "detailed", "grading"].map((key) => `<button type="button" role="tab" id="${q.id}-tab-${key}" aria-controls="${q.id}-panel-${key}" aria-selected="${key === "answer"}" tabindex="${key === "answer" ? 0 : -1}" data-solution-tab="${key}"${key !== "answer" ? " hidden" : ""}>${t(key)}</button>`).join("")}
        </div>
        <div class="solution-content" role="tabpanel" id="${q.id}-panel-answer" aria-labelledby="${q.id}-tab-answer" tabindex="-1" data-solution-content="answer">
        <div class="md q-answer"><p class="empty">${t("loading")}</p></div>
        <div class="pics">${q.refs.map((f) => picture(q, f, t("refFig"))).join("")}</div>
        </div>
        ${q.sol ? `<div class="solution-content steps-sol" role="tabpanel" id="${q.id}-panel-detailed" aria-labelledby="${q.id}-tab-detailed" tabindex="-1" data-solution-content="detailed" hidden>
          <div class="md q-steps"><p class="empty">${t("loading")}</p></div>
        </div>` : ""}
        <div class="solution-content grading" role="tabpanel" id="${q.id}-panel-grading" aria-labelledby="${q.id}-tab-grading" tabindex="-1" data-solution-content="grading" hidden><div class="md"></div></div>
        ${reviewing ? `<details class="others" id="others"><summary>${t("othersLoading")}</summary></details>` : ""}
      </section>
    </div>`;
}

// Fetches a card's question and answer into it; false if the card has since
// been replaced by another question.
// In Chinese, a translated question shows its .zh.md files, unless the
// reader asked for the English original on this card. The grading notes are
// never translated.
async function fillCard(el, q) {
  const zh = lang === "zh" && q.zh && el.dataset.orig !== "en";
  const files = await bundle(q);
  const get = (name) => (files
    ? (name in files ? Promise.resolve(files[name]) : Promise.reject(404))
    : fetch(`/q/${q.id}/${name}`).then((r) => (r.ok ? r.text() : Promise.reject(r.status))));
  // A Chinese file that fails falls back to its English original, alone.
  const pick = (base) => (zh ? get(`${base}.zh.md`).catch(() => get(`${base}.md`)) : get(`${base}.md`));
  const [question, solution, answerZh, steps] = await Promise.all([
    pick("instruction"),
    get("golden_solution.md"),
    zh ? get("golden_solution.zh.md").catch(() => "") : "",
    q.sol ? pick("detailed_solution") : "",
  ]).catch(() => [t("loadFailed"), t("loadFailed"), "", q.sol ? t("loadFailed") : ""]);
  if (!el.isConnected || el.dataset.qid !== q.id) return false;
  disposeImageViews(el);
  el.querySelector(".q-question").innerHTML = renderMarkdown(question);
  const { body, grading } = splitSolution(solution);
  el.querySelector(".q-answer").innerHTML = renderMarkdown(zh && answerZh ? answerZh : body);
  const toggle = el.querySelector(".orig-toggle");
  if (toggle) toggle.textContent = zh ? t("showOriginal") : t("showTranslation");
  if (q.sol) {
    const box = el.querySelector(".q-steps");
    box.innerHTML = renderMarkdown(withDiagrams(q, steps.replace(/^# .*\n/, "")));
    foldSteps(box);
    el.querySelector('[data-solution-tab="detailed"]').hidden = !steps.trim();
  }
  // Keep the existing availability rule: only notes supplied in the answer
  // and actually nonempty are exposed. Review API authorization is unchanged.
  el.querySelector('[data-solution-tab="grading"]').hidden = !grading.trim();
  el.querySelector(".grading .md").innerHTML = renderMarkdown(grading);
  const selected = el.querySelector('[role="tab"][aria-selected="true"]');
  if (selected.hidden) selectSolutionTab(el.querySelector('[data-solution-tab="answer"]'));
  prepareImageViews(el);
  return true;
}

// Switching tabs never fetches or rebuilds Markdown, formulas or step folds.
function selectSolutionTab(tab) {
  if (tab.hidden) return;
  const panel = tab.closest(".solution-panel");
  for (const button of panel.querySelectorAll('[role="tab"]')) {
    const selected = button === tab;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  }
  for (const content of panel.querySelectorAll('[role="tabpanel"]')) {
    content.hidden = content.dataset.solutionContent !== tab.dataset.solutionTab;
  }
  panel.scrollTop = 0;
}

// "<!-- diagram: diagram-01.cir -->" marks where a drawing of the solution
// belongs: it becomes the drawn figure and its caption, once one exists.
function withDiagrams(q, text) {
  return text.replace(/^<!--\s*diagram:\s*(diagram-\d+)\.cir\s*-->\s*$/gm, (_, name) => {
    if (!q.diags || !(name in q.diags)) return "";
    const src = asset(q, `${name}.svg`);
    const caption = q.diags[name];
    return `<figure class="diagram"><a class="pic" href="${src}" data-zoom="${src}"><img src="${src}" alt="${esc(caption || name)}" loading="lazy"></a>${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}</figure>`;
  });
}

// Each "### Step" heading and what follows it, up to the next one, becomes
// its own fold (open), so a reader can close the steps they have followed.
function foldSteps(box) {
  for (const heading of [...box.querySelectorAll(":scope > h3")]) {
    const fold = document.createElement("details");
    fold.className = "step";
    fold.open = true;
    const summary = document.createElement("summary");
    summary.innerHTML = heading.innerHTML;
    fold.append(summary);
    let next = heading.nextSibling;
    while (next && !(next.nodeType === 1 && next.tagName === "H3")) {
      const move = next;
      next = next.nextSibling;
      fold.append(move);
    }
    heading.replaceWith(fold);
  }
}

// ---------- browse: every question in one scrolling list ----------

const BATCH = 6;
const feed = { start: 0, end: 0 };

// Where the sticky bar and toolbar end. Their height depends on the window
// width (the toolbar wraps on a phone), so a fixed offset misplaces the reader.
function headerBottom() {
  let bottom = 0;
  for (const el of document.querySelectorAll(".top, .toolbar")) bottom = Math.max(bottom, el.getBoundingClientRect().bottom);
  return bottom;
}

// A card whose top is above this line is the one being read.
function readingLine() {
  return headerBottom() + 70;
}

// Lays the list out again from the card at `from` (an index into cards).
function renderFeed(from = 0) {
  disposeImageViews($("item"));
  document.body.classList.remove("single-reading");
  cardSizes.disconnect();
  pin.el = null;
  renderSide();
  feed.start = feed.end = Math.max(0, Math.min(from, state.cards.length));
  const item = $("item");
  item.className = "feed";
  delete item.dataset.qid;
  if (!state.cards.length) {
    item.innerHTML = `<p class="empty">${t("noMatch")}</p>`;
    state.index = 0;
    syncUrl();
    renderPosition();
    return;
  }
  item.innerHTML = `
    <div id="cards"></div>
    <div class="sentinel" id="sentinel"></div>`;
  appendCards();
  // The first card shown is where the reader is.
  pin.el = $("cards").firstElementChild;
  pin.top = pin.el.getBoundingClientRect().top;
  pin.adjusting = false;
  state.index = feed.start;
  syncUrl();
  renderPosition();
  onFeedScroll();
}

// On every scroll: the next batch once the end of the list comes near, and the
// card at the top of the window becomes the current one (position, address).
function onFeedScroll() {
  const sentinel = $("sentinel");
  const cards = $("cards");
  if (mode !== "browse" || state.focus || !sentinel || !cards) return;
  if (!sentinel.hidden && sentinel.getBoundingClientRect().top < window.innerHeight + 1500) appendCards();
  // Near the top of a list that starts later in the book: the questions
  // before it load above, keeping the reader's place.
  else if (feed.start > 0 && cards.firstElementChild && cards.firstElementChild.getBoundingClientRect().top > -1500) prependCards();
  let current = cards.firstElementChild;
  const line = readingLine();
  for (const el of cards.children) {
    if (el.getBoundingClientRect().top > line) break;
    current = el;
  }
  const at = current ? Number(current.dataset.at) : state.index;
  if (at !== state.index) {
    state.index = at;
    syncUrl();
    renderPosition();
  }
}

let scrollTimer = null;
window.addEventListener("scroll", () => {
  if (scrollTimer) return;
  scrollTimer = setTimeout(() => {
    scrollTimer = null;
    onFeedScroll();
  }, 80);
}, { passive: true });

// The reader's place: the card at the top of the window and where it sits.
// Cards loading or growing above it (text, figures, earlier questions) would
// push it down; after any such change the page is scrolled to put it back.
// The reader's own scrolling moves the pin.
const pin = { el: null, top: 0, adjusting: false };

function setPin() {
  const cards = $("cards");
  if (mode !== "browse" || state.focus || !cards) return;
  let el = cards.firstElementChild;
  const line = readingLine();
  for (const card of cards.children) {
    if (card.getBoundingClientRect().top > line) break;
    el = card;
  }
  pin.el = el;
  pin.top = el ? el.getBoundingClientRect().top : 0;
}

function keepPlace() {
  if (!pin.el || !pin.el.isConnected) return;
  const drift = pin.el.getBoundingClientRect().top - pin.top;
  if (Math.abs(drift) < 1) return;
  pin.adjusting = true;
  window.scrollBy(0, drift);
}

window.addEventListener("scroll", () => {
  // A scroll this page made to keep the place is not the reader moving.
  if (pin.adjusting) pin.adjusting = false;
  else setPin();
}, { passive: true });

const cardSizes = new ResizeObserver(() => keepPlace());

function feedCard(at) {
  const q = state.cards[at];
  const el = document.createElement("article");
  el.className = "item";
  el.dataset.qid = q.id;
  el.dataset.at = String(at);
  el.id = `card-${q.id}`;
  const params = [`scope=${state.scope}`, `id=${encodeURIComponent(q.id)}`];
  if (lang === "zh") params.push("lang=zh");
  el.innerHTML = cardHead(q, `<button type="button" class="btn focus-this" data-focus-id="${esc(q.id)}">${t("focus")}</button><a class="btn review-this" href="/review?${params.join("&")}" title="${esc(t("reviewThisTitle"))}">${t("reviewThis")}</a>`) + cardBody(q);
  // Its text arrives later and makes it taller: look again for the list's end.
  fillCard(el, q).then(onFeedScroll);
  cardSizes.observe(el);
  return el;
}

function appendCards() {
  const until = Math.min(state.cards.length, feed.end + BATCH);
  const cards = $("cards");
  for (let at = feed.end; at < until; at++) cards.append(feedCard(at));
  feed.end = until;
  $("sentinel").hidden = feed.end >= state.cards.length;
}

// The cards before the first one shown, keeping the reader's place.
function prependCards() {
  const from = Math.max(0, feed.start - BATCH);
  const cards = $("cards");
  const anchor = cards.firstElementChild;
  const before = anchor.getBoundingClientRect().top;
  const batch = document.createDocumentFragment();
  for (let at = from; at < feed.start; at++) batch.append(feedCard(at));
  cards.prepend(batch);
  feed.start = from;
  if (!pin.el) {
    pin.el = anchor;
    pin.top = before;
  }
  keepPlace();
}

// Scrolls to a card, laying the list out again when it is not near.
function scrollToCard(at) {
  if (!state.cards.length) return;
  at = Math.max(0, Math.min(state.cards.length - 1, at));
  if (at < feed.start || at > feed.end + BATCH) {
    renderFeed(at);
    window.scrollTo({ top: 0 });
    return;
  }
  while (at >= feed.end) appendCards();
  const el = $(`card-${state.cards[at].id}`);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerBottom() - 14, behavior: "smooth" });
}

function renderPosition() {
  const total = state.cards.length;
  updatePosition();
}

// Browse shows one question unless the reader switches to the list of cards.
function render(from) {
  if (mode === "browse" && !state.focus) {
    renderFeed(from ?? 0);
    window.scrollTo({ top: 0 });
  } else {
    renderItem();
    window.scrollTo({ top: 0 });
  }
}

function reviewControls(mine) {
  return `
    <div class="review-controls">
    <div class="actions">
      <textarea class="note" id="note" rows="1" maxlength="2000" placeholder="${esc(t("notePh"))}"></textarea>
      <button type="button" class="btn pass${mine === "pass" ? " on" : ""}" id="pass" title="${esc(t("passTitle"))}">${t("pass")} <kbd>P</kbd></button>
      <button type="button" class="btn issue" id="issue"></button>
    </div>
    <div class="flags" role="group" aria-label="${esc(t("reasons"))}">
      ${FLAGS.map((f) => `<button type="button" class="flag" data-flag="${f.key}"><kbd>${f.hotkey}</kbd>${esc(t(f.label))}</button>`).join("")}
    </div>
    <p class="message" id="message"></p>
    </div>`;
}

// Review mode without a working key: ask for it instead of the question.
function askForKey(wrong) {
  state.keyPrompt = wrong;
  $("item").innerHTML = `
    <form class="keyform" id="keyform">
      <h3>${t("keyTitle")}</h3>
      <p>${wrong ? t("keyWrong") : t("keyAsk")} ${t("keyBrowse")}</p>
      <input id="keyinput" class="search" type="password" autocomplete="current-password" placeholder="${esc(t("keyPh"))}">
      <button type="submit" class="btn">${t("keyGo")}</button>
    </form>`;
  $("keyinput").focus();
  $("keyform").addEventListener("submit", (event) => {
    event.preventDefault();
    reviewKey = $("keyinput").value.trim();
    store.set("ab.key", reviewKey);
    location.reload();
  });
}

function picture(q, file, label) {
  const src = asset(q, file);
  return `<div><a class="pic" href="${src}" data-zoom="${src}"><img src="${src}" alt="${esc(label)}" loading="lazy"></a><div class="pic-label">${esc(label)}</div></div>`;
}

// ---------- inline image reading ----------
// Translations are measured in CSS pixels; scale is relative to the existing
// fitted image, never to its natural pixel resolution. One observer and
// delegated listeners serve all images, including diagrams in Markdown.
const imageViews = new WeakMap();
let imageGesture = null;
let imageTouchGesture = null;
let imageScrollMotion = null;
const imageSizes = new ResizeObserver((entries) => {
  for (const { target } of entries) {
    const view = imageViews.get(target);
    if (view && (view.width !== target.clientWidth || view.height !== target.clientHeight)) fitImage(view);
  }
});

function disposeImageViews(root) {
  if (!root) return;
  if (imageScrollMotion && root.contains(imageScrollMotion.view.frame)) stopImageScroll();
  for (const frame of root.querySelectorAll(".image-viewport")) {
    const view = imageViews.get(frame);
    if (imageGesture?.view === view) cancelImageGesture();
    if (view) fitImage(view);
    imageSizes.unobserve(frame);
    imageViews.delete(frame);
  }
}

function prepareImageViews(root) {
  for (const img of root.querySelectorAll(".question-panel img, .solution-content img")) {
    let frame = img.closest(".image-viewport");
    if (!frame) {
      const link = img.closest("a.pic");
      const wrapper = document.createElement("div");
      wrapper.className = "image-view";
      frame = link || document.createElement(img.closest("a") ? "span" : "a");
      (link || img).replaceWith(wrapper);
      if (!link) {
        frame.className = "pic";
        frame.dataset.zoom = img.currentSrc || img.src;
        if (frame.tagName === "A") frame.href = frame.dataset.zoom;
        frame.append(img);
      }
      frame.classList.add("image-viewport");
      wrapper.append(frame);
      const selection = document.createElement("span");
      selection.className = "image-selection";
      selection.hidden = true;
      selection.setAttribute("aria-hidden", "true");
      frame.append(selection);
      const controls = document.createElement("div");
      controls.className = "image-controls";
      controls.hidden = true;
      controls.innerHTML = `<span class="image-scale"></span><span aria-hidden="true"> · </span><button type="button" data-image-fit title="${lang === "zh" ? "恢复适配大小" : "Restore fitted size"}">Fit</button>`;
      wrapper.append(controls);
    }
    if (imageViews.has(frame)) continue;
    img.draggable = false;
    frame.title = lang === "zh" ? "滚轮或双指捏合缩放 · Shift + 拖动框选 · 双击恢复适配" : "Scroll or pinch to zoom · Shift + drag to select · Double-click to fit";
    const view = { frame, img, scale: 1, x: 0, y: 0, suppressUntil: 0 };
    imageViews.set(frame, view);
    fitImage(view);
    imageSizes.observe(frame);
  }
}

function paintImage(view) {
  const { frame, img, scale, x, y } = view;
  img.style.transform = scale === 1 ? "" : `translate(${x}px, ${y}px) scale(${scale})`;
  frame.dataset.scale = String(scale);
  frame.classList.toggle("is-zoomed", scale > 1);
  const controls = frame.parentElement.querySelector(".image-controls");
  controls.hidden = scale === 1;
  controls.querySelector(".image-scale").textContent = `${Math.round(scale * 100)}%`;
}

function fitImage(view, keepTouch = false) {
  if (imageScrollMotion?.view === view) stopImageScroll();
  if (imageGesture?.view === view) cancelImageGesture();
  if (!keepTouch && imageTouchGesture?.view === view) cancelImageTouchGesture();
  view.scale = 1;
  view.x = view.y = 0;
  view.suppressUntil = 0;
  view.img.style.transform = "";
  const rect = view.img.getBoundingClientRect();
  const frame = view.frame.getBoundingClientRect();
  view.base = { x: rect.left - frame.left, y: rect.top - frame.top, width: rect.width, height: rect.height };
  view.width = view.frame.clientWidth;
  view.height = view.frame.clientHeight;
  paintImage(view);
}

function constrainImage(view) {
  const { base, frame, scale } = view;
  // In a letterboxed axis, keep the whole image inside the viewport without
  // forcing it back to the center: that would break the pointer's anchor.
  const clampAxis = (value, start, size, border, available) => size * scale <= available
    ? Math.max(border - start, Math.min(border + available - start - size * scale, value))
    : Math.max(border + available - start - size * scale, Math.min(border - start, value));
  view.x = clampAxis(view.x, base.x, base.width, frame.clientLeft, frame.clientWidth);
  view.y = clampAxis(view.y, base.y, base.height, frame.clientTop, frame.clientHeight);
}

function zoomImage(view, scale, point, destination = point) {
  const next = Math.max(1, Math.min(12, scale));
  if (next <= 1.00001) return fitImage(view, true);
  const ratio = next / view.scale;
  view.x = destination.x - view.base.x - (point.x - view.base.x - view.x) * ratio;
  view.y = destination.y - view.base.y - (point.y - view.base.y - view.y) * ratio;
  view.scale = next;
  constrainImage(view);
  paintImage(view);
}

function imagePoint(view, event) {
  const rect = view.frame.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

function cancelImageGesture() {
  if (!imageGesture) return;
  const { view, pointerId } = imageGesture;
  imageGesture = null;
  view.frame.classList.remove("is-panning", "is-selecting");
  view.frame.querySelector(".image-selection").hidden = true;
  if (view.frame.hasPointerCapture(pointerId)) view.frame.releasePointerCapture(pointerId);
}

// Own image gestures from the first contact: native scrolling cannot be
// reclaimed reliably when the second finger arrives after the first moves.
// At 100%, single-finger movement scrolls the enclosing reader (with inertia).
function imageTouches(view, event) {
  return [...event.touches].filter((touch) => view.frame.contains(touch.target));
}

function beginImageTouch(view, touches) {
  const hadMultiple = touches.length >= 2 || !!imageTouchGesture?.hadMultiple;
  const rect = view.frame.getBoundingClientRect();
  if (touches.length >= 2) {
    const [a, b] = touches;
    imageTouchGesture = {
      view, mode: "pinch", hadMultiple, rect, ids: [a.identifier, b.identifier],
      distance: Math.max(4, Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY)),
      center: imagePoint(view, { clientX: (a.clientX + b.clientX) / 2, clientY: (a.clientY + b.clientY) / 2 }),
    };
  } else {
    imageTouchGesture = { view, mode: view.scale > 1 ? "pan" : "scroll", hadMultiple, rect, id: touches[0].identifier,
      start: imagePoint(view, touches[0]), x: view.x, y: view.y, moved: hadMultiple,
      clientY: touches[0].clientY, lastTime: performance.now(), velocity: 0, scrollTarget: imageScrollTarget(view) };
  }
  view.frame.classList.add("is-touching");
}

function imageScrollTarget(view) {
  for (let el = view.frame.parentElement; el && el !== document.body; el = el.parentElement) {
    if (/(auto|scroll)/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight + 1) return el;
  }
  return document.scrollingElement;
}

function stopImageScroll() {
  if (imageScrollMotion) cancelAnimationFrame(imageScrollMotion.id);
  imageScrollMotion = null;
}

function coastImageScroll(gesture) {
  if (Math.abs(gesture.velocity) < .1 || performance.now() - gesture.lastTime > 90) return;
  const motion = { view: gesture.view, target: gesture.scrollTarget, velocity: Math.max(-2.5, Math.min(2.5, gesture.velocity)), last: performance.now() };
  imageScrollMotion = motion;
  const tick = (now) => {
    if (imageScrollMotion !== motion || !motion.view.frame.isConnected) return stopImageScroll();
    const elapsed = Math.min(32, now - motion.last);
    motion.last = now;
    const before = motion.target.scrollTop;
    motion.target.scrollTop += motion.velocity * elapsed;
    motion.velocity *= Math.exp(-elapsed / 160);
    if (Math.abs(motion.velocity) < .025 || motion.target.scrollTop === before) return stopImageScroll();
    motion.id = requestAnimationFrame(tick);
  };
  motion.id = requestAnimationFrame(tick);
}

function cancelImageTouchGesture() {
  if (!imageTouchGesture) return;
  imageTouchGesture.view.suppressUntil = performance.now() + 500;
  imageTouchGesture.view.frame.classList.remove("is-panning", "is-touching");
  imageTouchGesture = null;
}

document.addEventListener("touchstart", (event) => {
  stopImageScroll();
  const view = imageTouchGesture?.view || imageViews.get(event.target.closest(".image-viewport"));
  if (!view || !view.base.width || !view.base.height) return;
  const touches = imageTouches(view, event);
  if (!touches.length) return;
  if (event.cancelable) event.preventDefault();
  cancelImageGesture();
  beginImageTouch(view, touches);
}, { passive: false });

document.addEventListener("touchmove", (event) => {
  const gesture = imageTouchGesture;
  if (!gesture) return;
  if (event.cancelable) event.preventDefault();
  const { view } = gesture;
  const touches = imageTouches(view, event);
  if (gesture.mode === "pinch") {
    const [a, b] = gesture.ids.map((id) => touches.find((touch) => touch.identifier === id));
    if (!a || !b) return;
    const distance = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
    const center = { x: (a.clientX + b.clientX) / 2 - gesture.rect.left, y: (a.clientY + b.clientY) / 2 - gesture.rect.top };
    // Incremental anchors respond immediately when reversing at a limit,
    // instead of requiring fingers to retrace an overshot distance first.
    zoomImage(view, view.scale * Math.max(4, distance) / gesture.distance, gesture.center, center);
    gesture.distance = Math.max(4, distance);
    gesture.center = center;
  } else if (gesture.mode === "pan") {
    const touch = touches.find((touch) => touch.identifier === gesture.id);
    if (!touch) return;
    const point = { x: touch.clientX - gesture.rect.left, y: touch.clientY - gesture.rect.top };
    view.x = gesture.x + point.x - gesture.start.x;
    view.y = gesture.y + point.y - gesture.start.y;
    constrainImage(view);
    paintImage(view);
    view.frame.classList.add("is-panning");
  } else if (gesture.mode === "scroll") {
    const touch = touches.find((touch) => touch.identifier === gesture.id);
    if (!touch) return;
    const now = performance.now();
    const delta = gesture.clientY - touch.clientY;
    gesture.moved ||= Math.abs(touch.clientY - gesture.rect.top - gesture.start.y) > 5;
    if (gesture.moved) {
      gesture.scrollTarget.scrollTop += delta;
      gesture.velocity = .25 * gesture.velocity + .75 * delta / Math.max(8, now - gesture.lastTime);
      gesture.clientY = touch.clientY;
      gesture.lastTime = now;
    }
  }
  view.suppressUntil = performance.now() + 500;
}, { passive: false });

document.addEventListener("touchend", (event) => {
  if (!imageTouchGesture) return;
  if (event.cancelable) event.preventDefault();
  const gesture = imageTouchGesture;
  const view = gesture.view;
  const remaining = imageTouches(view, event);
  if (remaining.length) beginImageTouch(view, remaining);
  else {
    if (gesture.mode === "scroll" && !gesture.moved && !gesture.hadMultiple) {
      $("zoom").querySelector("img").src = view.img.currentSrc || view.img.src;
      $("zoom").hidden = false;
    }
    cancelImageTouchGesture();
    if (gesture.mode === "scroll" && gesture.moved) coastImageScroll(gesture);
  }
}, { passive: false });
document.addEventListener("touchcancel", cancelImageTouchGesture);

document.addEventListener("load", (event) => {
  const frame = event.target.closest?.(".image-viewport");
  const view = frame && imageViews.get(frame);
  if (view && event.target === view.img) fitImage(view);
}, true);

function imageWheelKind(view, event) {
  // Chromium reports trackpad pinches as Ctrl+wheel. Plain precision wheel
  // streams are scrolling, rather than zooming. WheelEvent has no device ID;
  // recognize common mouse detents and keep a precision stream classified
  // consistently even when its later accelerated deltas become large.
  if (event.ctrlKey) return "pinch";
  const now = performance.now();
  const amount = Math.abs(event.deltaY);
  const detent = event.deltaMode !== 0 || (!event.deltaX && Number.isInteger(amount) && amount >= 40 && (amount % 40 === 0 || amount % 100 === 0));
  const kind = !detent || (event.deltaMode === 0 && view.wheelKind === "scroll" && now - view.wheelAt < 350) ? "scroll" : "mouse";
  view.wheelKind = kind;
  view.wheelAt = now;
  return kind;
}

document.addEventListener("wheel", (event) => {
  stopImageScroll();
  const view = imageViews.get(event.target.closest(".image-viewport"));
  if (!view || !view.base.width || !view.base.height || (!event.deltaY && !event.deltaX)) return;
  const kind = imageWheelKind(view, event);
  if (kind === "scroll") {
    // Two fingers moving together scroll normally at Fit and pan the image
    // at higher magnification; they never change its scale.
    if (view.scale === 1) return;
    event.preventDefault();
    if (imageGesture || imageTouchGesture) return;
    view.x -= event.deltaX;
    view.y -= event.deltaY;
    constrainImage(view);
    paintImage(view);
    return;
  }
  // A pinch is always local, including at 100%; letting Ctrl+wheel through
  // at that limit would unexpectedly zoom the entire browser page.
  if (kind === "mouse" && view.scale === 1 && event.deltaY > 0) return;
  event.preventDefault();
  if (imageGesture || imageTouchGesture) return;
  const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? view.height : 1);
  zoomImage(view, view.scale * Math.exp(-Math.max(-160, Math.min(160, delta)) * (kind === "pinch" ? .01 : .0015)), imagePoint(view, event));
}, { passive: false });

document.addEventListener("pointerdown", (event) => {
  const view = imageViews.get(event.target.closest(".image-viewport"));
  if (!view || event.pointerType === "touch" || event.button !== 0 || !event.isPrimary || !view.base.width) return;
  event.preventDefault();
  const start = imagePoint(view, event);
  imageGesture = { view, start, end: start, x: view.x, y: view.y, pointerId: event.pointerId, select: event.shiftKey, moved: false };
  view.frame.setPointerCapture(event.pointerId);
  if (event.shiftKey || view.scale > 1) view.frame.classList.add(event.shiftKey ? "is-selecting" : "is-panning");
});

document.addEventListener("pointermove", (event) => {
  const gesture = imageGesture;
  if (!gesture || event.pointerId !== gesture.pointerId) return;
  const { view, start } = gesture;
  const point = imagePoint(view, event);
  gesture.moved ||= Math.hypot(point.x - start.x, point.y - start.y) > 4;
  if (gesture.select) {
    gesture.end = { x: Math.max(0, Math.min(view.width, point.x)), y: Math.max(0, Math.min(view.height, point.y)) };
    const box = view.frame.querySelector(".image-selection");
    box.hidden = !gesture.moved;
    Object.assign(box.style, { left: `${Math.min(start.x, gesture.end.x)}px`, top: `${Math.min(start.y, gesture.end.y)}px`, width: `${Math.abs(start.x - gesture.end.x)}px`, height: `${Math.abs(start.y - gesture.end.y)}px` });
  } else if (gesture.moved && view.scale > 1) {
    view.x = gesture.x + point.x - start.x;
    view.y = gesture.y + point.y - start.y;
    constrainImage(view);
    paintImage(view);
  }
});

document.addEventListener("pointerup", (event) => {
  const gesture = imageGesture;
  if (!gesture || event.pointerId !== gesture.pointerId) return;
  const { view, start, end } = gesture;
  if (gesture.select) {
    const width = Math.abs(end.x - start.x), height = Math.abs(end.y - start.y);
    if (width >= 12 && height >= 12) zoomImage(view, view.scale * Math.min(view.width / width, view.height / height), { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 }, { x: view.width / 2, y: view.height / 2 });
  }
  view.suppressUntil = gesture.moved || gesture.select || view.scale > 1 ? performance.now() + 400 : 0;
  cancelImageGesture();
});
document.addEventListener("pointercancel", cancelImageGesture);
document.addEventListener("lostpointercapture", (event) => {
  if (imageGesture?.pointerId === event.pointerId) cancelImageGesture();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageGesture) {
    imageGesture.view.suppressUntil = performance.now() + 400;
    cancelImageGesture();
    event.preventDefault();
    event.stopImmediatePropagation();
  }
});
document.addEventListener("dblclick", (event) => {
  const view = imageViews.get(event.target.closest(".image-viewport"));
  if (view && view.scale > 1) { event.preventDefault(); fitImage(view); }
});
document.addEventListener("click", (event) => {
  const fit = event.target.closest("[data-image-fit]");
  const frame = fit ? fit.closest(".image-view").querySelector(".image-viewport") : event.target.closest(".image-viewport");
  const view = frame && imageViews.get(frame);
  if (!view) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (fit) { fitImage(view); frame.focus({ preventScroll: true }); }
  else if (view.scale === 1 && performance.now() >= view.suppressUntil && !event.shiftKey) {
    $("zoom").querySelector("img").src = view.img.currentSrc || view.img.src;
    $("zoom").hidden = false;
  }
}, true);

function renderFlags() {
  document.querySelectorAll(".flag").forEach((b) => {
    const on = state.flags.includes(b.dataset.flag);
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", String(on));
  });
  const issue = $("issue");
  if (!issue) return;
  issue.classList.toggle("on", state.flags.length > 0 || state.mine[shownId] === "issue");
  issue.innerHTML = `${t("issue")}${state.flags.length ? " <kbd>Enter</kbd>" : ""}`;
  issue.title = state.flags.length ? t("issueTitle") : t("issueTitleNone");
}

async function loadOthers(id) {
  let rows;
  try {
    rows = await getJSON(`/api/reviews?qid=${encodeURIComponent(id)}`);
  } catch {
    rows = null;
  }
  if (shownId !== id) return;
  const box = $("others");
  if (!rows) {
    box.innerHTML = `<summary>${t("othersFailed")}</summary>`;
    return;
  }
  box.open = rows.some((r) => r.verdict !== "pass");
  box.innerHTML = `<summary>${rows.length ? t("othersCount", rows.length) : t("othersNone")}</summary>` +
    (rows.length ? `<ul>${rows.map(otherRow).join("")}</ul>` : "");
}

function otherRow(r) {
  const flagLabel = (key) => t(FLAGS.find((f) => f.key === key)?.label || "fOther");
  const verdict = r.verdict === "pass"
    ? `<span class="v-pass">${t("vPass")}</span>`
    : r.verdict === "issue"
      ? `<span class="v-issue">${t("vIssue")}</span>${r.flags.map((f) => `<span class="ftag">${esc(flagLabel(f))}</span>`).join("")}`
      : `<span>${t("vComment")}</span>`;
  const when = (r.created_at || "").replace("T", " ").replace("Z", "").slice(0, 16);
  const own = mineIds.has(r.id) ? `<button type="button" class="del" data-del="${r.id}" title="${esc(t("delTitle"))}">${t("del")}</button>` : "";
  return `<li>${own}<span class="who">${esc(r.author || t("anonymous"))}</span><span class="when">${esc(when)} UTC</span> · ${verdict}` +
    (r.note ? `<div class="txt">${esc(r.note)}</div>` : "") + `</li>`;
}

// Rows this browser wrote, so it can take them back.
const mineIds = new Set(JSON.parse(store.get("ab.mineIds") || "[]"));

// ---------- actions ----------

function message(text, err = false) {
  const m = $("message");
  if (!m) return;
  m.textContent = text;
  m.classList.toggle("err", err);
}

async function submit(verdict) {
  const q = state.cards[state.index];
  if (!q || state.busy) return;
  const note = $("note").value.trim();
  if (verdict === "issue" && !state.flags.length) {
    message(t("pickReason"), true);
    return;
  }
  if (verdict === "comment" && !note) return;
  state.busy = true;
  try {
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "content-type": "application/json", ...apiHeaders() },
      body: JSON.stringify({
        qid: q.id,
        verdict,
        flags: state.flags,
        note,
        author: $("author").value.trim(),
        client,
      }),
    });
    if (!response.ok) throw new Error((await response.json().catch(() => ({}))).error || response.status);
    const { id } = await response.json();
    mineIds.add(id);
    store.set("ab.mineIds", JSON.stringify([...mineIds]));
    const s = (state.summary[q.id] ||= [0, 0, 0]);
    if (verdict === "pass") s[0]++;
    if (verdict === "issue") s[1]++;
    if (note) s[2]++;
    if (verdict !== "comment") state.mine[q.id] = verdict;
    state.flags = [];
    if (verdict === "comment") {
      $("note").value = "";
      await renderItem();
      message(t("commented"));
    } else {
      // A verdict moves on to the next question, as in Analog Canvas review.
      go(state.index + 1);
    }
  } catch (error) {
    message(t("failed", error.message), true);
  } finally {
    state.busy = false;
  }
}

function go(index) {
  if (!state.cards.length) return;
  if (mode === "browse" && !state.focus) return scrollToCard(index);
  state.index = Math.max(0, Math.min(state.cards.length - 1, index));
  renderItem();
  window.scrollTo({ top: 0 });
}

function jumpRandom() {
  const left = state.cards.map((q, i) => [q, i]).filter(([q, i]) => !state.mine[q.id] && i !== state.index);
  const pool = left.length ? left : state.cards.map((q, i) => [q, i]);
  if (!pool.length) return;
  const at = pool[Math.floor(Math.random() * pool.length)][1];
  if (mode === "browse" && !state.focus) render(at);
  else go(at);
}

function toggleFlag(key) {
  state.flags = state.flags.includes(key) ? state.flags.filter((f) => f !== key) : [...state.flags, key];
  renderFlags();
}

// ---------- position and chapters ----------

// The toolbar's "n / total": a box to type a number into, the total, and the
// current question's chapter. Chapters step only within one book, in order.
function updatePosition() {
  const total = state.cards.length;
  const box = $("goto");
  if (document.activeElement !== box) box.value = total ? String(state.index + 1) : "0";
  box.style.width = `${Math.max(2, String(total).length) + 1.5}ch`;
  $("total").textContent = `/ ${num(total)}`;
  const q = state.cards[state.index];
  const byChapter = state.scope !== "random";
  $("chapter").textContent = q && byChapter ? (state.scope === "all" ? `${bookName(q.book)} · ` : "") + t("chapter", q.ch) : "";
  for (const id of ["prev-ch", "next-ch"]) {
    $(id).disabled = !byChapter || !total;
    $(id).title = byChapter ? t(id === "prev-ch" ? "prevCh" : "nextCh") : t("chapterNeedsBook");
  }
}

// To the first question of the next chapter (dir 1), or of this chapter's
// start and then the previous chapter's (dir -1), as a book's « » do.
function jumpChapter(dir) {
  if (state.scope === "random" || !state.cards.length) return;
  const cards = state.cards;
  const chapterOf = (q) => `${q.book}:${q.ch}`;
  const here = chapterOf(cards[state.index]);
  let at = state.index;
  if (dir > 0) {
    while (at < cards.length && chapterOf(cards[at]) === here) at++;
    if (at >= cards.length) return;
  } else {
    while (at > 0 && chapterOf(cards[at - 1]) === here) at--;
    if (at === state.index) {
      if (at === 0) return;
      const prev = chapterOf(cards[at - 1]);
      at--;
      while (at > 0 && chapterOf(cards[at - 1]) === prev) at--;
    }
  }
  go(at);
}

$("goto").addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const n = parseInt(event.target.value.replace(/[^0-9]/g, ""), 10);
  event.target.blur();
  if (n >= 1 && state.ready) go(n - 1);
  else updatePosition();
});
$("goto").addEventListener("focus", (event) => event.target.select());
$("goto").addEventListener("blur", () => updatePosition());

// ---------- wiring ----------

function resizePanes(handle, percent) {
  const value = Math.max(25, Math.min(70, Math.round(percent)));
  handle.closest(".cols").style.setProperty("--question-width", `${value}%`);
  handle.setAttribute("aria-valuenow", String(value));
}

document.addEventListener("pointerdown", (event) => {
  const handle = event.target.closest(".pane-resizer");
  if (!handle || event.button !== 0) return;
  event.preventDefault();
  handle.focus({ preventScroll: true });
  handle.setPointerCapture(event.pointerId);
  const move = (e) => {
    const rect = handle.closest(".cols").getBoundingClientRect();
    resizePanes(handle, 100 * (e.clientX - rect.left) / rect.width);
  };
  const end = () => {
    handle.removeEventListener("pointermove", move);
    handle.removeEventListener("lostpointercapture", end);
  };
  handle.addEventListener("pointermove", move);
  handle.addEventListener("lostpointercapture", end);
});

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, a");
  if (!target || !state.ready) return;
  if (target.dataset.solutionTab) {
    selectSolutionTab(target);
  } else if (target.classList.contains("row")) {
    const keep = state.cards[state.index]?.id;
    state[target.dataset.kind] = target.dataset.key;
    refilter(keep);
    // A new filter starts the list from its top.
    render(0);
  } else if (target.id === "reading-view" || target.dataset.focusId) {
    if (mode !== "browse") return;
    if (target.dataset.focusId) {
      const at = state.cards.findIndex((q) => q.id === target.dataset.focusId);
      if (at < 0) return;
      state.index = at;
      state.focus = true;
    } else state.focus = !state.focus;
    render(state.index);
  } else if (target.classList.contains("orig-toggle")) {
    const card = target.closest("[data-qid]");
    const q = state.cards.find((each) => each.id === card.dataset.qid);
    card.dataset.orig = card.dataset.orig === "en" ? "" : "en";
    if (q) fillCard(card, q);
  } else if (target.dataset.flag) {
    toggleFlag(target.dataset.flag);
  } else if (target.id === "pass") {
    submit("pass");
  } else if (target.id === "issue") {
    submit("issue");
  } else if (target.id === "prev-ch") {
    jumpChapter(-1);
  } else if (target.id === "next-ch") {
    jumpChapter(1);
  } else if (target.id === "prev") {
    go(state.index - 1);
  } else if (target.id === "next") {
    go(state.index + 1);
  } else if (target.id === "random") {
    jumpRandom();
  } else if (target.dataset.zoom) {
    event.preventDefault();
    $("zoom").querySelector("img").src = target.dataset.zoom;
    $("zoom").hidden = false;
  } else if (target.dataset.del) {
    const id = Number(target.dataset.del);
    const r = await fetch(`/api/reviews/${id}?client=${encodeURIComponent(client)}`, { method: "DELETE", headers: apiHeaders() });
    if (r.ok) {
      mineIds.delete(id);
      store.set("ab.mineIds", JSON.stringify([...mineIds]));
      [state.summary, state.mine] = await Promise.all([getJSON("/api/summary"), getJSON(`/api/mine?client=${encodeURIComponent(client)}`)]);
      renderItem();
    }
  }
});

$("zoom").addEventListener("click", () => { $("zoom").hidden = true; });

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey || !state.ready) return;
  if (event.target.matches(".pane-resizer") && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    resizePanes(event.target, event.key === "Home" ? 25 : event.key === "End" ? 70 : Number(event.target.getAttribute("aria-valuenow")) + (event.key === "ArrowRight" ? 2 : -2));
    return;
  }
  const tab = event.target.closest('[role="tab"]');
  if (tab && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    const tabs = [...tab.parentElement.querySelectorAll('[role="tab"]')].filter((b) => !b.hidden);
    const at = tabs.indexOf(tab);
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (at + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus({ preventScroll: true });
    selectSolutionTab(tabs[next]);
    return;
  }
  // Let native Enter/Space activate tabs without triggering review shortcuts.
  if (tab) return;
  if (event.target.closest(".image-view") && ["Enter", " "].includes(event.key)) return;
  const inNote = event.target.id === "note";
  if (inNote && event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    submit(state.flags.length ? "issue" : "comment");
    return;
  }
  if (event.key === "Escape") {
    $("zoom").hidden = true;
    if (event.target.blur) event.target.blur();
    return;
  }
  if (event.target.closest("input, textarea")) return;
  const reviewing = mode === "review" && $("pass");
  const flag = reviewing ? FLAGS.find((f) => f.hotkey === event.key) : null;
  if (flag) toggleFlag(flag.key);
  else if (event.key === "ArrowLeft" && event.shiftKey) jumpChapter(-1);
  else if (event.key === "ArrowRight" && event.shiftKey) jumpChapter(1);
  else if (event.key === "ArrowLeft") go(state.index - 1);
  else if (event.key === "ArrowRight") go(state.index + 1);
  else if (event.key === "r" || event.key === "R") jumpRandom();
  else if (reviewing && (event.key === "p" || event.key === "P")) submit("pass");
  else if (reviewing && event.key === "Enter" && state.flags.length) submit("issue");
  else if (event.key === "/") { event.preventDefault(); setSidebar(false); $("search").focus(); }
  else return;
  event.preventDefault();
});

let searchTimer;
$("search").addEventListener("focus", loadSearch);
$("search").addEventListener("input", (event) => {
  loadSearch();
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    if (!state.ready) return;
    state.search = event.target.value.trim();
    refilter(state.cards[state.index]?.id);
    render(0);
  }, 150);
});

$("author").value = store.get("ab.author") || "";
$("author").addEventListener("change", (event) => store.set("ab.author", event.target.value.trim()));

// ---------- start ----------

(async () => {
  applyLanguage();
  try {
    // The page's head has already started fetching the light index.
    state.all = await (window.AB?.indexP || Promise.reject()).catch(() => getJSON("/index.json"));
  } catch {
    $("item").innerHTML = `<p class="empty">${t("indexFailed")}</p>`;
    return;
  }
  state.shuffled = shuffle(state.all);
  if (mode === "review") {
    if (!reviewKey) return askForKey(false);
    try {
      [state.summary, state.mine] = await Promise.all([
        getJSON("/api/summary"),
        getJSON(`/api/mine?client=${encodeURIComponent(client)}`),
      ]);
    } catch (error) {
      if (error.status === 401) return askForKey(true);
      // Reviews are extra: the questions still show if the API is down.
    }
  }
  const wanted = params.get("id");
  refilter(wanted);
  if (wanted && state.cards[state.index]?.id !== wanted) {
    // The linked question is outside the filters in the link: show it among all.
    state.level = "all";
    state.status = "all";
    refilter(wanted);
  }
  state.ready = true;
  if (mode === "browse" && !state.focus) renderFeed(wanted ? state.index : 0);
  else renderItem();
  // After the questions are up, so counting never delays the first paint.
  trackVisit();
})();
