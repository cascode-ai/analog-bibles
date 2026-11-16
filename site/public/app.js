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
    search: "Search ID or question text (/)",
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
    bookName: { razavi: "Razavi", gray: "Gray", allen: "Allen" },
  },
  zh: {
    sub: "Razavi · Gray · Allen 教材习题",
    modes: "模式",
    browse: "浏览",
    review: "审阅",
    reviewTitle: "给维护者：通过、报错、评论",
    switchLang: "Switch to English",
    search: "搜索题号或题目文字（/）",
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
    fig: (n) => `Fig. ${n}`,
    pickReason: "先选一个报错原因（1–6）。",
    commented: "评论已发布。",
    failed: (e) => `提交失败：${e}`,
    keyTitle: "审阅模式（维护者）",
    keyAsk: "审阅模式用来通过、报错、评论，需要维护者口令。",
    keyWrong: "口令不对，请重新输入。",
    keyBrowse: '只想看题，请用 <a href="/browse">浏览模式</a>。',
    keyPh: "维护者口令",
    keyGo: "进入审阅",
    bookName: { razavi: "Razavi", gray: "Gray", allen: "Allen" },
  },
};

const BOOKS = [
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
  scope: BOOKS.some((b) => b.key === params.get("scope")) ? params.get("scope") : "random",
  level: LEVELS.includes(params.get("level")) ? params.get("level") : "all",
  status: mode === "review" && STATUSES.some((s) => s.key === params.get("status")) ? params.get("status") : "all",
  search: "",
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
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  const button = $("lang-switch");
  button.title = t("switchLang");
  button.setAttribute("aria-label", t("switchLang"));
}

$("lang-switch").addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  store.set("ab.lang", lang);
  applyLanguage();
  if (state.keyPrompt !== null) askForKey(state.keyPrompt);
  else if (state.ready) renderItem(true);
  else syncUrl();
});

// ---------- data ----------

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
  if (scope !== "random" && q.book !== scope) return false;
  if (level !== "all" && q.level !== level) return false;
  const s = state.summary[q.id];
  if (status === "unseen" && state.mine[q.id]) return false;
  if (status === "issue" && !(s && s[1])) return false;
  if (status === "notes" && !(s && s[2])) return false;
  if (state.search) {
    const needle = state.search.toLowerCase();
    if (!q.id.toLowerCase().includes(needle) && !q.t.toLowerCase().includes(needle)) return false;
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

// The answer file: its title, the answer, then the grading notes (folded).
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
  $("position").textContent = total ? `${num(state.index + 1)} / ${num(total)}` : "0 / 0";
}

function syncUrl() {
  const q = state.cards[state.index];
  const parts = [`scope=${state.scope}`];
  if (state.level !== "all") parts.push(`level=${state.level}`);
  if (state.status !== "all") parts.push(`status=${state.status}`);
  if (q) parts.push(`id=${encodeURIComponent(q.id)}`);
  if (lang === "zh") parts.push("lang=zh");
  history.replaceState(null, "", `/${mode}?${parts.join("&")}`);
  // The mode switch keeps the question, filters and language (status is review's own).
  $("mode-browse").href = `/browse?${parts.filter((p) => !p.startsWith("status=")).join("&")}`;
  $("mode-review").href = `/review?${parts.join("&")}`;
}

// ---------- the question ----------

let shownId = null;

// keepFlags: a re-render of the same question (a language switch) keeps
// the reasons picked and the note typed.
async function renderItem(keepFlags = false) {
  renderSide();
  renderProgress();
  syncUrl();
  const q = state.cards[state.index];
  const item = $("item");
  if (!q) {
    shownId = null;
    item.innerHTML = `<p class="empty">${t("noMatch")}</p>`;
    return;
  }
  const note = keepFlags && $("note") ? $("note").value : "";
  if (shownId !== q.id) state.flags = [];
  shownId = q.id;
  const s = state.summary[q.id] || [0, 0, 0];
  const mine = state.mine[q.id];
  const reviewing = mode === "review";
  item.innerHTML = `
    <div class="head">
      <span class="id">${esc(q.id)}</span>
      <span class="tag">${bookName(q.book)}</span>
      <span class="tag lv-${q.level}">${t(q.level)}</span>
      ${reviewing && mine ? `<span class="mine-${mine}">${mine === "pass" ? t("youPassed") : t("youFlagged")}</span>` : ""}
      ${reviewing ? `<span class="stats">${t("stats", num(s[0]), num(s[1]), num(s[2]))}</span>` : ""}
    </div>
    ${reviewing ? reviewControls(mine) : ""}
    <div class="cols">
      <section class="panel">
        <h4>${t("question")}</h4>
        <div class="md" id="question"><p class="empty">${t("loading")}</p></div>
        <div class="pics">${q.figs.map((f, i) => picture(q.id, f, t("fig", i + 1))).join("")}</div>
      </section>
      <section class="panel">
        <h4>${t("answer")}</h4>
        <div class="md" id="answer"><p class="empty">${t("loading")}</p></div>
        <div class="pics">${q.refs.map((f) => picture(q.id, f, t("refFig"))).join("")}</div>
        <details class="grading" id="grading" hidden><summary>${t("grading")}</summary><div class="md"></div></details>
      </section>
    </div>`;
  if ($("note")) $("note").value = note;
  renderFlags();
  const id = q.id;
  const [question, solution] = await Promise.all([
    fetch(`/q/${id}/instruction.md`).then((r) => r.text()),
    fetch(`/q/${id}/golden_solution.md`).then((r) => r.text()),
  ]).catch(() => [t("loadFailed"), t("loadFailed")]);
  if (shownId !== id) return;
  $("question").innerHTML = renderMarkdown(question);
  const { body, grading } = splitSolution(solution);
  $("answer").innerHTML = renderMarkdown(body);
  if (grading.trim()) {
    $("grading").hidden = false;
    $("grading").querySelector(".md").innerHTML = renderMarkdown(grading);
  }
  if (reviewing) loadOthers(id);
}

function reviewControls(mine) {
  return `
    <div class="actions">
      <textarea class="note" id="note" rows="1" maxlength="2000" placeholder="${esc(t("notePh"))}"></textarea>
      <button type="button" class="btn pass${mine === "pass" ? " on" : ""}" id="pass" title="${esc(t("passTitle"))}">${t("pass")} <kbd>P</kbd></button>
      <button type="button" class="btn issue" id="issue"></button>
    </div>
    <div class="flags" role="group" aria-label="${esc(t("reasons"))}">
      ${FLAGS.map((f) => `<button type="button" class="flag" data-flag="${f.key}"><kbd>${f.hotkey}</kbd>${esc(t(f.label))}</button>`).join("")}
    </div>
    <p class="message" id="message"></p>
    <details class="others" id="others"><summary>${t("othersLoading")}</summary></details>`;
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

function picture(id, file, label) {
  const src = `/q/${encodeURIComponent(id)}/${encodeURIComponent(file)}`;
  return `<div><a class="pic" href="${src}" data-zoom="${src}"><img src="${src}" alt="${esc(label)}" loading="lazy"></a><div class="pic-label">${esc(label)}</div></div>`;
}

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
  state.index = Math.max(0, Math.min(state.cards.length - 1, index));
  renderItem();
  window.scrollTo({ top: 0 });
}

function jumpRandom() {
  const left = state.cards.map((q, i) => [q, i]).filter(([q, i]) => !state.mine[q.id] && i !== state.index);
  const pool = left.length ? left : state.cards.map((q, i) => [q, i]);
  if (pool.length) go(pool[Math.floor(Math.random() * pool.length)][1]);
}

function toggleFlag(key) {
  state.flags = state.flags.includes(key) ? state.flags.filter((f) => f !== key) : [...state.flags, key];
  renderFlags();
}

// ---------- wiring ----------

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, a");
  if (!target || !state.ready) return;
  if (target.classList.contains("row")) {
    const keep = state.cards[state.index]?.id;
    state[target.dataset.kind] = target.dataset.key;
    refilter(keep);
    renderItem();
  } else if (target.dataset.flag) {
    toggleFlag(target.dataset.flag);
  } else if (target.id === "pass") {
    submit("pass");
  } else if (target.id === "issue") {
    submit("issue");
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
  else if (event.key === "ArrowLeft") go(state.index - 1);
  else if (event.key === "ArrowRight") go(state.index + 1);
  else if (event.key === "r" || event.key === "R") jumpRandom();
  else if (reviewing && (event.key === "p" || event.key === "P")) submit("pass");
  else if (reviewing && event.key === "Enter" && state.flags.length) submit("issue");
  else if (event.key === "/") { event.preventDefault(); $("search").focus(); }
  else return;
  event.preventDefault();
});

let searchTimer;
$("search").addEventListener("input", (event) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    if (!state.ready) return;
    state.search = event.target.value.trim();
    refilter(state.cards[state.index]?.id);
    renderItem();
  }, 150);
});

$("author").value = store.get("ab.author") || "";
$("author").addEventListener("change", (event) => store.set("ab.author", event.target.value.trim()));

// ---------- start ----------

(async () => {
  applyLanguage();
  try {
    state.all = await getJSON("/index.json");
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
  renderItem();
})();
