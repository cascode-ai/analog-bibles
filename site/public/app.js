// /review: one question at a time — the question and its figures beside the
// reference answer; P passes it, a reason (1–6) plus Enter reports an issue,
// and a note alone is a comment.

const BOOKS = [
  { key: "random", label: "随机 Random" },
  { key: "razavi", label: "Razavi" },
  { key: "gray", label: "Gray" },
  { key: "allen", label: "Allen" },
];
const BOOK_NAME = { razavi: "Razavi", gray: "Gray", allen: "Allen" };
const LEVELS = [
  { key: "all", label: "全部" },
  { key: "easy", label: "简单" },
  { key: "medium", label: "中等" },
  { key: "hard", label: "困难" },
  { key: "simulation", label: "仿真" },
];
const LEVEL_NAME = { easy: "简单", medium: "中等", hard: "困难", simulation: "仿真" };
const STATUSES = [
  { key: "all", label: "全部" },
  { key: "unseen", label: "我未审过" },
  { key: "issue", label: "有人报错" },
  { key: "notes", label: "有评论" },
];
const FLAGS = [
  { key: "question", label: "题目有误", hotkey: "1" },
  { key: "answer", label: "答案有误", hotkey: "2" },
  { key: "figure", label: "题图有误/缺图", hotkey: "3" },
  { key: "render", label: "公式/排版问题", hotkey: "4" },
  { key: "level", label: "难度不当", hotkey: "5" },
  { key: "other", label: "其他", hotkey: "6" },
];
const FLAG_NAME = Object.fromEntries(FLAGS.map((f) => [f.key, f.label]));

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* private window */ } },
};
const client = store.get("ab.client") || (() => {
  const id = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now();
  store.set("ab.client", id);
  return id;
})();

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const num = (n) => n.toLocaleString("en-US");

const params = new URLSearchParams(location.search);
const state = {
  all: [],
  shuffled: [],
  summary: {},
  mine: {},
  scope: BOOKS.some((b) => b.key === params.get("scope")) ? params.get("scope") : "random",
  level: LEVELS.some((l) => l.key === params.get("level")) ? params.get("level") : "all",
  status: STATUSES.some((s) => s.key === params.get("status")) ? params.get("status") : "all",
  search: "",
  cards: [],
  index: 0,
  flags: [],
  busy: false,
};

// ---------- data ----------

async function getJSON(url) {
  const response = await fetch(url, { credentials: "same-origin" });
  if (!response.ok) throw new Error(`${url}: ${response.status}`);
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
  let src = text
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => keep(t, true))
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, t) => keep(t, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, t) => keep(t, false))
    .replace(/\$(?!\s)((?:\\\$|[^$\n])+?)\$/g, (_, t) => keep(t, false));
  let html = window.marked ? window.marked.parse(src) : `<p>${esc(src)}</p>`;
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
  const row = (item, on, count, kind) =>
    `<button type="button" class="row${on ? " on" : ""}" data-kind="${kind}" data-key="${item.key}">` +
    `<span>${esc(item.label)}</span><span class="n">${num(count)}</span></button>`;
  $("scopes").innerHTML = BOOKS.map((b) =>
    row(b, b.key === state.scope, state.all.filter((q) => matches(q, { scope: b.key })).length, "scope")).join("");
  $("levels").innerHTML = LEVELS.map((l) =>
    row(l, l.key === state.level, state.all.filter((q) => matches(q, { level: l.key })).length, "level")).join("");
  $("statuses").innerHTML = STATUSES.map((s) =>
    row(s, s.key === state.status, state.all.filter((q) => matches(q, { status: s.key })).length, "status")).join("");
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
    `<span>我：<b>${num(passed)}</b> 通过 · <b>${num(flagged)}</b> 报错 · <b>${num(total - passed - flagged)}</b> 未审</span>`;
  $("position").textContent = total ? `${num(state.index + 1)} / ${num(total)}` : "0 / 0";
}

function syncUrl() {
  const q = state.cards[state.index];
  const parts = [`scope=${state.scope}`];
  if (state.level !== "all") parts.push(`level=${state.level}`);
  if (state.status !== "all") parts.push(`status=${state.status}`);
  if (q) parts.push(`id=${encodeURIComponent(q.id)}`);
  history.replaceState(null, "", `/review?${parts.join("&")}`);
}

// ---------- the question ----------

let shownId = null;

async function renderItem() {
  renderSide();
  renderProgress();
  syncUrl();
  const q = state.cards[state.index];
  const item = $("item");
  if (!q) {
    shownId = null;
    item.innerHTML = `<p class="empty">没有符合条件的题目。</p>`;
    return;
  }
  if (shownId !== q.id) {
    state.flags = [];
    shownId = q.id;
  }
  const s = state.summary[q.id] || [0, 0, 0];
  const mine = state.mine[q.id];
  item.innerHTML = `
    <div class="head">
      <span class="id">${esc(q.id)}</span>
      <span class="tag">${BOOK_NAME[q.book]}</span>
      <span class="tag lv-${q.level}">${LEVEL_NAME[q.level]}</span>
      ${mine ? `<span class="mine-${mine}">${mine === "pass" ? "✓ 你已通过" : "✕ 你已报错"}</span>` : ""}
      <span class="stats">${num(s[0])} 通过 · ${num(s[1])} 报错 · ${num(s[2])} 评论</span>
    </div>
    <div class="actions">
      <textarea class="note" id="note" rows="1" maxlength="2000" placeholder="评论或说明哪里有问题（可选）。Enter 提交，Shift+Enter 换行"></textarea>
      <button type="button" class="btn pass${mine === "pass" ? " on" : ""}" id="pass" title="题目和答案都没问题 (P)">✓ 通过 <kbd>P</kbd></button>
      <button type="button" class="btn issue" id="issue" title="先在下面选原因">✕ 报错</button>
    </div>
    <div class="flags" role="group" aria-label="报错原因">
      ${FLAGS.map((f) => `<button type="button" class="flag" data-flag="${f.key}"><kbd>${f.hotkey}</kbd>${esc(f.label)}</button>`).join("")}
    </div>
    <p class="message" id="message"></p>
    <details class="others" id="others"><summary>其他人的审阅（加载中）</summary></details>
    <div class="cols">
      <section class="panel">
        <h4>题目</h4>
        <div class="md" id="question"><p class="empty">加载中…</p></div>
        <div class="pics">${q.figs.map((f, i) => picture(q.id, f, `Fig. ${i + 1}`)).join("")}</div>
      </section>
      <section class="panel">
        <h4>参考答案</h4>
        <div class="md" id="answer"><p class="empty">加载中…</p></div>
        <div class="pics">${q.refs.map((f) => picture(q.id, f, "参考图")).join("")}</div>
        <details class="grading" id="grading" hidden><summary>评分说明</summary><div class="md"></div></details>
      </section>
    </div>`;
  renderFlags();
  const id = q.id;
  const [question, solution] = await Promise.all([
    fetch(`/q/${id}/instruction.md`).then((r) => r.text()),
    fetch(`/q/${id}/golden_solution.md`).then((r) => r.text()),
  ]).catch(() => ["加载失败。", "加载失败。"]);
  if (shownId !== id) return;
  $("question").innerHTML = renderMarkdown(question);
  const { body, grading } = splitSolution(solution);
  $("answer").innerHTML = renderMarkdown(body);
  if (grading.trim()) {
    $("grading").hidden = false;
    $("grading").querySelector(".md").innerHTML = renderMarkdown(grading);
  }
  loadOthers(id);
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
  issue.innerHTML = `✕ 报错${state.flags.length ? " <kbd>Enter</kbd>" : ""}`;
  issue.title = state.flags.length ? "提交报错原因和说明" : "先在下面选原因";
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
    box.innerHTML = `<summary>审阅记录加载失败</summary>`;
    return;
  }
  box.open = rows.some((r) => r.verdict !== "pass");
  box.innerHTML = `<summary>${rows.length ? `其他人的审阅（${rows.length}）` : "还没有人审阅这道题"}</summary>` +
    (rows.length ? `<ul>${rows.map(otherRow).join("")}</ul>` : "");
}

function otherRow(r) {
  const verdict = r.verdict === "pass"
    ? `<span class="v-pass">✓ 通过</span>`
    : r.verdict === "issue"
      ? `<span class="v-issue">✕ 报错</span>${r.flags.map((f) => `<span class="ftag">${esc(FLAG_NAME[f] || f)}</span>`).join("")}`
      : `<span>💬 评论</span>`;
  const when = (r.created_at || "").replace("T", " ").replace("Z", "").slice(0, 16);
  const own = mineIds.has(r.id) ? `<button type="button" class="del" data-del="${r.id}" title="删除我的这条">删除</button>` : "";
  return `<li>${own}<span class="who">${esc(r.author || "匿名")}</span><span class="when">${esc(when)} UTC</span> · ${verdict}` +
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
    message("先选一个报错原因（1–6）。", true);
    return;
  }
  if (verdict === "comment" && !note) return;
  state.busy = true;
  try {
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
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
      message("评论已发布。");
      renderItem();
    } else {
      // A verdict moves on to the next question, as in Analog Canvas review.
      go(state.index + 1);
    }
  } catch (error) {
    message(`提交失败：${error.message}`, true);
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
  if (!target) return;
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
    const r = await fetch(`/api/reviews/${id}?client=${encodeURIComponent(client)}`, { method: "DELETE" });
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
  if (event.metaKey || event.ctrlKey || event.altKey) return;
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
  const flag = FLAGS.find((f) => f.hotkey === event.key);
  if (flag) toggleFlag(flag.key);
  else if (event.key === "ArrowLeft") go(state.index - 1);
  else if (event.key === "ArrowRight") go(state.index + 1);
  else if (event.key === "r" || event.key === "R") jumpRandom();
  else if (event.key === "p" || event.key === "P") submit("pass");
  else if (event.key === "Enter" && state.flags.length) submit("issue");
  else if (event.key === "/") { event.preventDefault(); $("search").focus(); }
  else return;
  event.preventDefault();
});

let searchTimer;
$("search").addEventListener("input", (event) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = event.target.value.trim();
    refilter(state.cards[state.index]?.id);
    renderItem();
  }, 150);
});

$("author").value = store.get("ab.author") || "";
$("author").addEventListener("change", (event) => store.set("ab.author", event.target.value.trim()));

// ---------- start ----------

(async () => {
  try {
    state.all = await getJSON("/index.json");
  } catch {
    $("item").innerHTML = `<p class="empty">题库加载失败，请刷新重试。</p>`;
    return;
  }
  state.shuffled = shuffle(state.all);
  // Reviews are extra: the questions still show if the API is down.
  [state.summary, state.mine] = await Promise.all([
    getJSON("/api/summary").catch(() => ({})),
    getJSON(`/api/mine?client=${encodeURIComponent(client)}`).catch(() => ({})),
  ]);
  const wanted = params.get("id");
  refilter(wanted);
  if (wanted && state.cards[state.index]?.id !== wanted) {
    // The linked question is outside the filters in the link: show it among all.
    state.level = "all";
    state.status = "all";
    refilter(wanted);
  }
  renderItem();
})();
