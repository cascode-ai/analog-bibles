import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import crypto from "node:crypto";
import { test } from "node:test";

const source = fs.readFileSync(new URL("public/app.js", import.meta.url), "utf8");
const distFile = (name) => fs.readFileSync(new URL(`../dist/${name.replace(/^\//, "")}`, import.meta.url), "utf8");
const html = distFile("index.html");
const boot = JSON.parse(html.match(/window\.AB=(\{[^;]+\});/)[1]);
const index = JSON.parse(distFile(boot.index));
const texts = JSON.parse(distFile(boot.search));
const fullIndex = JSON.parse(distFile("index.json"));
const exercises = JSON.parse(fs.readFileSync(new URL("../exercises.json", import.meta.url), "utf8"));

function app(fetchResponse = () => new Promise(() => {})) {
  // Load the actual browser script; leave its initial fetch pending so tests
  // can exercise filtering without rendering cards or calling review APIs.
  const element = { dataset: {}, addEventListener() {}, setAttribute() {} };
  const requests = [];
  const context = vm.createContext({
    URLSearchParams,
    location: { search: "", pathname: "/browse" },
    localStorage: { getItem() { return null; }, setItem() {} },
    crypto: { randomUUID() { return "test-client"; } },
    document: {
      body: { dataset: {} }, documentElement: {},
      getElementById() { return element; },
      querySelectorAll() { return []; }, addEventListener() {},
    },
    window: { AB: { search: boot.search, indexP: new Promise(() => {}) }, addEventListener() {} },
    ResizeObserver: class {},
    fetch: (url) => { requests.push(url); return fetchResponse(url); },
  });
  vm.runInContext(source + `\nglobalThis.filtering = {
    state, matches, refilter, loadSearch, bundle, asset,
    setSearchText: (texts) => { searchText = texts; },
    setRender: (fn) => { render = fn; },
  };`, context);
  return { ...context.filtering, requests };
}

function search(query, options = {}, data = index, loadedTexts = null) {
  const { state, matches, setSearchText } = app();
  setSearchText(loadedTexts);
  Object.assign(state, options, { search: query });
  return data.filter((q) => matches(q)).map((q) => q.id);
}

test("build preserves the original exercise/chapter mapping for every indexed question", () => {
  assert.ok(index.length > 0);
  assert.equal(index.length, fullIndex.length);
  for (const q of index) {
    assert.equal(q.ex, exercises[q.id].ex, q.id);
    assert.equal(q.ch, exercises[q.id].ch, q.id);
    assert.ok(!("t" in q), "the startup index must stay light");
    assert.match(q.v, /^[a-f0-9]{10}$/);
  }
  assert.equal(index.find((q) => q.id === "A168").ex, "5.3-3");
});

test("Allen textbook references ignore book-name case and allow extra spacing", () => {
  for (const query of ["Allen 5.3-3", "allen 5.3-3", "ALLEN 5.3-3", "aLlEn   5.3-3"]) {
    assert.deepEqual(search(query), ["A168"]);
  }
});

test("Razavi 7.6 returns only that book's mapped exercises, if any", () => {
  assert.deepEqual(search("Razavi 7.6"), ["R333", "R334", "R335", "R336", "R337", "R338"]);
  assert.ok(!search("Razavi 7.6").includes("grsim-07-06"));
});

test("textbook references accept problem or problems before the number", () => {
  for (const [book, number] of [["Razavi", "7.6"], ["Allen", "5.3-3"], ["Gray", "1.1(a)"]]) {
    for (const label of ["problem", "problems", "PROBLEMS"]) {
      assert.deepEqual(search(`${book}  ${label}  ${number}`), search(`${book} ${number}`));
    }
  }
  assert.deepEqual(search("razavi problems 7.6"), ["R333", "R334", "R335", "R336", "R337", "R338"]);
  assert.deepEqual(search("razavi problems 7.600"), []);
  assert.deepEqual(search("Allen problems 5.3-3", { scope: "razavi" }), []);
});

test("bare exercise numbers work with each selected textbook", () => {
  for (const [scope, number] of [["allen", "5.3-3"], ["gray", "7.6"], ["razavi", "2.1"]]) {
    const expected = index.filter((q) => q.book === scope && q.ex.replace(/\s*\(.*$/, "") === number);
    assert.ok(expected.length > 0);
    assert.deepEqual(search(number, { scope }), expected.map((q) => q.id));
  }
  assert.deepEqual(search("Allen 5.3-3", { scope: "razavi" }), []);
});

test("exercise search cannot fall back to partial numbers or text references", () => {
  const data = ["7.6", "7.60", "17.6", "7.6-1", "7.6(a)"].map((ex, i) => ({
    id: `R${i}`, book: "razavi", level: "easy", ex, t: "See Problem 7.6 and 7.60",
  }));
  for (const query of ["7.6", "Razavi 7.6", "razavi problems 7.6", "Razavi problem 7.6"]) {
    assert.deepEqual(search(query, {}, data), ["R0", "R4"]);
  }
  assert.deepEqual(search("Razavi 7.6(a)", {}, data), ["R4"]);
  assert.deepEqual(search("Razavi 7.600", {}, data), []);
});

test("parenthesized subparts and appendix exercise numbers remain searchable", () => {
  assert.deepEqual(search("Gray 1.1"), ["G001", "G002"]);
  assert.deepEqual(search("Gray 1.1(a)"), ["G001"]);
  for (const ex of ["A-1", "5.1-7 (active load inverter)"]) {
    const expected = index.filter((q) => q.book === "allen" && q.ex === ex);
    assert.ok(expected.length > 0);
    assert.deepEqual(search(`Allen ${ex}`), expected.map((q) => q.id));
  }
});

test("internal IDs work without texts; lazy texts and the legacy index keep text search", () => {
  assert.deepEqual(search("a168"), ["A168"]);
  const text = "MOSFET";
  const expected = fullIndex.filter((q) => q.id.toLowerCase().includes(text.toLowerCase()) || q.t.toLowerCase().includes(text.toLowerCase()));
  assert.ok(expected.length > 0);
  assert.deepEqual(search(text), []);
  assert.deepEqual(search(text, {}, index, texts), expected.map((q) => q.id));
  assert.deepEqual(search(text, {}, fullIndex), expected.map((q) => q.id));
  assert.equal(search("").length, index.length);
});

test("textbook numbers have identical results before and after lazy texts arrive", () => {
  for (const query of ["Allen 5.3-3", "Razavi problems 7.6", "Gray 1.1(a)", "Razavi problem 7.600"]) {
    assert.deepEqual(search(query), search(query, {}, index, texts));
    assert.deepEqual(search(query), search(query, {}, fullIndex));
  }
});

test("search texts stay lazy, share one request and refilter after loading", async () => {
  let deliver;
  const { state, requests, refilter, loadSearch, setRender } = app(() => new Promise((resolve) => { deliver = resolve; }));
  let renders = 0;
  setRender(() => { renders++; });
  Object.assign(state, { all: index, shuffled: index, ready: true, search: "MOSFET" });
  assert.deepEqual(requests, []);
  refilter();
  assert.equal(state.cards.length, 0);
  const pending = loadSearch();
  assert.equal(loadSearch(), pending);
  assert.deepEqual(requests, [boot.search]);
  deliver({ ok: true, json: async () => texts });
  await pending;
  const expected = fullIndex.filter((q) => q.t.toLowerCase().includes("mosfet")).map((q) => q.id);
  assert.deepEqual(Array.from(state.cards, (q) => q.id), expected);
  assert.equal(renders, 1);
  await loadSearch();
  assert.equal(requests.length, 1);
});

test("late search-text responses respect the reader's current textbook query", async () => {
  let deliver;
  const { state, loadSearch, setRender } = app(() => new Promise((resolve) => { deliver = resolve; }));
  setRender(() => {});
  Object.assign(state, { all: index, shuffled: index, ready: true, search: "MOSFET" });
  const pending = loadSearch();
  state.search = "Allen problems 5.3-3";
  deliver({ ok: true, json: async () => texts });
  await pending;
  assert.deepEqual(Array.from(state.cards, (q) => q.id), ["A168"]);
});

test("failed search-text fetches can retry and never block metadata searches", async () => {
  let attempts = 0;
  const { state, matches, loadSearch } = app(async () => ++attempts === 1
    ? { ok: false, status: 503 } : { ok: true, json: async () => texts });
  state.search = "Allen 5.3-3";
  await loadSearch();
  assert.ok(matches(index.find((q) => q.id === "A168")));
  await loadSearch();
  assert.equal(attempts, 2);
  state.search = "MOSFET";
  assert.ok(index.some((q) => matches(q)));
});

test("hashed startup assets and immutable cache headers are preserved", () => {
  const hash = (data) => crypto.createHash("sha256").update(data).digest("hex").slice(0, 10);
  for (const [kind, url] of Object.entries(boot)) {
    assert.equal(url, `/assets/${kind}.${hash(distFile(url))}.json`);
  }
  const script = html.match(/src="(\/assets\/app\.[a-f0-9]+\.js)"/)[1];
  assert.equal(script, `/assets/app.${hash(distFile("app.js"))}.js`);
  assert.equal(distFile(script), source);
  assert.match(html, /AB\.indexP=fetch\(AB\.index\)/);
  assert.match(distFile("_headers"), /\/assets\/\*\n  Cache-Control: public, max-age=31536000, immutable/);
  assert.match(distFile("_headers"), /\/b\/\*\n  Cache-Control: public, max-age=31536000, immutable/);
  for (const q of fullIndex) assert.equal(texts[q.id], q.t.toLowerCase());
});

test("question bundles still share one cached fetch and assets keep their version", async () => {
  const q = index.find((q) => q.id === "A168");
  const url = `/b/${q.id}.${q.v}.json`;
  const content = JSON.parse(distFile(url));
  const { bundle, asset, requests } = app(async () => ({ ok: true, json: async () => content }));
  const first = bundle(q);
  assert.equal(bundle(q), first);
  assert.equal(await first, content);
  assert.equal(content["instruction.md"], fullIndex.find((q) => q.id === "A168").t);
  assert.deepEqual(requests, [url]);
  assert.equal(asset(q, "figure-1.png"), `/q/${q.id}/figure-1.png?v=${q.v}`);
  assert.equal(await bundle({ id: "legacy" }), null);
  assert.equal(requests.length, 1);
});

test("exercise search respects difficulty and review status filters", () => {
  const q = index.find((q) => q.id === "A168");
  const query = "Allen 5.3-3";
  assert.deepEqual(search(query, { level: q.level }), [q.id]);
  assert.deepEqual(search(query, { level: q.level === "easy" ? "hard" : "easy" }), []);
  assert.deepEqual(search(query, { status: "unseen", mine: { [q.id]: "pass" } }), []);
  for (const [status, summary] of [["issue", [0, 1, 0]], ["notes", [0, 0, 1]]]) {
    assert.deepEqual(search(query, { status }), []);
    assert.deepEqual(search(query, { status, summary: { [q.id]: summary } }), [q.id]);
  }
});

test("refilter preserves book order, random order and the current question", () => {
  const { state, refilter } = app();
  state.all = index;
  state.shuffled = index.slice().reverse();
  refilter("A168");
  assert.equal(state.cards[state.index].id, "A168");
  assert.equal(state.cards[0].id, state.shuffled[0].id);
  state.scope = "allen";
  refilter("A168");
  assert.equal(state.cards[0].id, index.find((q) => q.book === "allen").id);
  state.search = "5.3-3";
  refilter("A168");
  assert.deepEqual(Array.from(state.cards, (q) => q.id), ["A168"]);
  state.search = "5.3-30000";
  refilter();
  assert.equal(state.cards.length, 0);
  assert.equal(state.index, 0);
});
