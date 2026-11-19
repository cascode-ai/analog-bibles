import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { startBrowser } from "./test-browser.mjs";

test("reading layout and existing browser behavior", { timeout: 180000 }, async (t) => {
  const b = await startBrowser();
  t.after(() => b.close());
  const screenshotDir = process.env.AB_SCREENSHOTS_DIR;
  if (screenshotDir) fs.mkdirSync(screenshotDir, { recursive: true });
  const click = (selector) => b.evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  const panels = () => b.evaluate(`(() => {
    const rect = (selector) => { const r = document.querySelector(selector).getBoundingClientRect(); return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom}; };
    return {left:rect('.question-panel'),right:rect('.solution-panel'),width:innerWidth,height:innerHeight,
      pageWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,pageHeight:document.documentElement.scrollHeight};
  })()`);
  async function split() {
    const p = await panels();
    assert.ok(p.left.x < p.right.x);
    assert.ok(Math.abs(p.left.y - p.right.y) < 1);
    assert.ok(Math.abs(p.left.width / (p.left.width + p.right.width) - .4) < .02);
    assert.ok(p.left.height > 250);
    assert.ok(p.right.bottom <= p.height + 1);
    assert.ok(p.pageWidth <= p.clientWidth);
    assert.ok(p.pageHeight <= p.height + 1);
  }
  await b.viewport(1440, 960);

  await t.test("The sidebar's edge drags wider, the width is kept, double-click resets it", async () => {
    await b.viewport(1440, 960);
    await b.open("/browse?scope=razavi&id=R001&lang=zh");
    const width = () => b.evaluate('Math.round(document.getElementById("side").getBoundingClientRect().width)');
    const edge = () => b.evaluate('(() => { const r = document.getElementById("side-resizer").getBoundingClientRect(); return {x: r.x + r.width / 2, y: r.y + 40}; })()');
    const before = await width();
    const start = await edge();
    await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",...start,button:"left",clickCount:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseMoved",x:start.x + 120,y:start.y,button:"left",buttons:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",x:start.x + 120,y:start.y,button:"left",clickCount:1});
    const wider = await width();
    assert.ok(wider >= before + 100, `${before} → ${wider}`);
    // The search hint fits once the sidebar is wider.
    assert.ok(await b.evaluate('(() => { const s = document.getElementById("search"); return s.scrollWidth <= s.clientWidth + 1; })()'));
    await b.open("/browse?scope=razavi&id=R001&lang=zh");
    assert.equal(await width(), wider);
    const p = await edge();
    await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",...p,button:"left",clickCount:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",...p,button:"left",clickCount:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",...p,button:"left",clickCount:2});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",...p,button:"left",clickCount:2});
    assert.equal(await b.evaluate('document.getElementById("side-resizer").getAttribute("aria-valuenow")'), "260");
    await b.evaluate('document.getElementById("sidebar-toggle").click()');
    assert.equal(await b.evaluate('getComputedStyle(document.getElementById("side-resizer")).display'), "none");
    await b.evaluate('document.getElementById("sidebar-toggle").click()');
  });

  await t.test("The bottom bar shows visitor counts and fits under the reading view", async () => {
    const { identifier } = await b.cdp("Page.addScriptToEvaluateOnNewDocument", { source:
      `{const real=window.fetch;window.fetch=(u,o)=>String(u).startsWith('/api/stats')?Promise.resolve(new Response('{"pv":12345,"uv":678,"scope":"all"}')):real(u,o);}` });
    await b.viewport(1440, 900);
    await b.open("/browse?scope=razavi&id=R001&lang=zh");
    await b.waitFor('!document.getElementById("visit-stats").hidden');
    assert.equal(await b.evaluate('document.getElementById("visit-stats").textContent'), "678 位访客 · 12,345 次浏览");
    assert.equal(await b.evaluate('document.getElementById("visit-stats").getAttribute("href")'), "/analytics");
    assert.ok(await b.evaluate('Math.abs(document.getElementById("site-foot").getBoundingClientRect().bottom - innerHeight) <= 1'));
    // The counts sit in the bottom-right corner, the links stay centred.
    const corner = '(() => { const s = document.getElementById("visit-stats").getBoundingClientRect(), f = document.getElementById("site-foot").getBoundingClientRect(), l = document.querySelector(".foot-links").getBoundingClientRect(); return f.right - s.right <= 17 && Math.abs((l.left + l.right) / 2 - innerWidth / 2) < 2; })()';
    assert.ok(await b.evaluate(corner));
    await b.viewport(390, 844);
    assert.ok(await b.evaluate('(() => { const s = document.getElementById("visit-stats").getBoundingClientRect(); return s.right <= innerWidth && document.documentElement.scrollWidth <= innerWidth; })()'));
    await b.viewport(1440, 900);
    assert.ok(await b.evaluate("document.documentElement.scrollHeight <= innerHeight + 1"));
    await b.evaluate('document.getElementById("lang-switch").click()');
    assert.equal(await b.evaluate('document.getElementById("visit-stats").textContent'), "678 visitors · 12,345 views");
    await b.cdp("Page.removeScriptToEvaluateOnNewDocument", { identifier });
  });

  await t.test("By default → walks the books in order, not shuffled", async () => {
    const current = () => b.evaluate("state.cards[state.index].id");
    const right = async () => {
      await b.evaluate("document.activeElement.blur()");
      await b.cdp("Input.dispatchKeyEvent", {type:"keyDown",key:"ArrowRight",code:"ArrowRight"});
    };
    await b.open("/browse?id=R001");
    assert.equal(await b.evaluate("state.scope"), "all");
    for (const id of ["R002", "R003", "R004"]) {
      await right();
      await b.waitFor(`state.cards[state.index].id === ${JSON.stringify(id)}`);
    }
    const lastRazavi = await b.evaluate('state.all.filter((q) => q.book === "razavi").at(-1).id');
    await b.open(`/browse?id=${lastRazavi}`);
    await right();
    await b.waitFor('state.cards[state.index].book === "gray"');
    assert.equal(await current(), await b.evaluate('state.all.find((q) => q.book === "gray").id'));
    assert.equal(await b.evaluate("new URL(location).searchParams.get('scope')"), "all");
  });

  await t.test("A list link keeps its question on a phone, where the toolbar is taller", async () => {
    for (const [width, height] of [[1440, 960], [390, 844]]) {
      await b.viewport(width, height);
      await b.open("/browse?scope=razavi&id=R100&view=list");
      // Cards above it load and grow after the first paint; give them time.
      await b.waitFor('document.querySelector("#card-R099 .q-answer") && !document.querySelector("#card-R100 .q-answer .empty")');
      await new Promise((r) => setTimeout(r, 3000));
      assert.match(await b.evaluate("location.search"), /[?&]id=R100(&|$)/, `width ${width}`);
    }
    await b.viewport(1440, 960);
  });

  await t.test("Tab skips passive reading containers and reaches actionable controls", async () => {
    for (const [url, width, height] of [
      ["/browse?scope=random&level=hard&id=R453&view=focus", 1440, 960],
      ["/review?scope=razavi&id=R050&lang=zh", 1440, 960],
      ["/browse?scope=gray&id=G001&view=focus", 390, 844],
    ]) {
      await b.viewport(width, height);
      await b.open(url);
      const stops = [];
      for (let i = 0; i < 100; i++) {
        await b.cdp("Input.dispatchKeyEvent", {type:"keyDown",key:"Tab",code:"Tab"});
        // Focus may wrap from the last control straight back to the first
        // without resting on BODY: one full cycle is the whole order.
        const stop = await b.evaluate(`(() => {
          const el = document.activeElement;
          const wrapped = el === window.__firstTabStop;
          if (!window.__firstTabStop) window.__firstTabStop = el;
          return {tag:el.tagName, wrapped, passive:el.matches('.panel, .solution-content'),
            tab:el.dataset.solutionTab || null, selected:el.getAttribute('aria-selected'), id:el.id};
        })()`);
        if (stop.tag === "BODY" || stop.wrapped) break;
        stops.push(stop);
      }
      assert.ok(stops.length > 0 && stops.length < 100);
      assert.equal(stops.some((s) => s.passive), false);
      assert.deepEqual(stops.filter((s) => s.tab).map((s) => [s.tab,s.selected]), [["answer","true"]]);
      assert.ok(stops.some((s) => s.id === (width <= 900 ? "navigation-trigger" : "search")));
      assert.ok(stops.some((s) => s.id === "next"));
    }
    await b.viewport(1440, 960);
    await b.open("/browse?scope=razavi&id=R050&view=focus");
    await click('[data-solution-tab="detailed"]');
    await b.evaluate('document.querySelector("[data-solution-tab=detailed]").focus()');
    await b.cdp("Input.dispatchKeyEvent", {type:"keyDown",key:"Tab",code:"Tab"});
    assert.equal(await b.evaluate('document.activeElement.matches("[data-current-step-toggle]")'), true);
  });

  await t.test("tabs switch cached content, reset only solution scrolling, and support keyboard navigation", async () => {
    for (const url of ["/review?scope=razavi&id=R050&lang=en", "/browse?scope=razavi&id=R050&view=focus&lang=zh", "/browse?scope=razavi&id=R050&lang=en&view=list"]) {
      await b.open(url);
      const card = url.includes("view=focus") || url.includes("review") ? "#item" : "#card-R050";
      const tab = (key) => `${card} [data-solution-tab="${key}"]`;
      await b.waitFor(`!document.querySelector(${JSON.stringify(tab("grading"))}).hidden`);
      const contentRequests = () => b.requests.filter((r) => /^\/(b\/R050\.|q\/R050\/|api\/)/.test(r.path)).length;
      const count = contentRequests();
      await b.evaluate(`window.savedAnswer = document.querySelector('${card} .q-answer'); document.querySelector('${card} .question-panel').scrollTop=100`);
      const left = await b.evaluate(`document.querySelector('${card} .question-panel').scrollTop`);
      for (const key of ["detailed", "grading", "answer"]) {
        await b.evaluate(`document.querySelector('${card} .solution-panel').scrollTop=200`);
        await click(tab(key));
        assert.equal(await b.evaluate(`document.querySelector('${card} .solution-panel').scrollTop`), 0);
        assert.equal(await b.evaluate(`document.querySelector('${card} .question-panel').scrollTop`), left);
        assert.equal(await b.evaluate(`document.querySelectorAll('${card} [role="tabpanel"]:not([hidden])').length`), 1);
      }
      assert.equal(await b.evaluate(`savedAnswer === document.querySelector('${card} .q-answer')`), true);
      assert.equal(contentRequests(), count);
      await b.evaluate(`document.querySelector(${JSON.stringify(tab("answer"))}).focus()`);
      await b.cdp("Input.dispatchKeyEvent", { type: "keyDown", key: "ArrowRight", code: "ArrowRight" });
      assert.equal(await b.evaluate('document.activeElement.dataset.solutionTab'), "detailed");
      assert.equal(await b.evaluate(`document.querySelector('${card}').dataset.qid`), "R050");
      assert.equal(await b.evaluate(`document.querySelector(${JSON.stringify(tab("answer"))}).querySelector('.tab-label').textContent`), url.includes("lang=zh") ? "参考答案" : "Reference answer");
    }
  });

  await t.test("short review questions use the available height with answer visible by default", async () => {
    await b.open("/review?scope=razavi&id=R650");
    await split();
    assert.equal(await b.evaluate('document.querySelector(".steps-sol").hidden'), true);
    assert.ok(await b.evaluate('document.querySelector(".q-answer").textContent.length > 20'));
    assert.ok(await b.evaluate('document.getElementById("pass").getBoundingClientRect().bottom < document.querySelector(".cols").getBoundingClientRect().top'));
  });

  await t.test("unavailable tabs stay hidden and a new question starts with its reference answer", async () => {
    await b.open("/browse?scope=gray&id=G001&view=focus&lang=en");
    assert.equal(await b.evaluate('document.querySelector("[data-solution-tab=detailed]").hidden'), true);
    await b.open("/review?scope=razavi&id=R050&lang=en");
    await click('[data-solution-tab="grading"]');
    await click("#next");
    await b.waitFor('document.querySelector("#item").dataset.qid === "R051" && document.querySelector(".q-answer").textContent.length > 20');
    assert.equal(await b.evaluate('document.querySelector("[role=tab][aria-selected=true]").dataset.solutionTab'), "answer");
    assert.equal(await b.evaluate('document.querySelector(".solution-panel").scrollTop'), 0);
    // Local fixture exercises absent/empty notes without editing any source Markdown.
    await b.evaluate(`(async () => {
      const original = bundle;
      bundle = async () => ({'instruction.md':'Fixture question', 'golden_solution.md':'# Answer\\n## Reference answer\\nFixture answer\\n## Grading notes\\n  ', 'detailed_solution.md':'  '});
      try { await fillCard(document.getElementById('item'),state.cards[state.index]); } finally { bundle = original; }
    })()`);
    assert.equal(await b.evaluate('document.querySelector("[data-solution-tab=grading]").hidden'), true);
    assert.equal(await b.evaluate('document.querySelector("[data-solution-tab=detailed]").hidden'), true);
    assert.equal(await b.evaluate('document.querySelector(".grading").hidden'), true);
  });

  await t.test("pane divider supports pointer and keyboard resizing without changing questions", async () => {
    await b.open("/review?scope=razavi&id=R050&lang=en");
    const rect = await b.evaluate('(() => { const r=document.querySelector(".pane-resizer").getBoundingClientRect(); return {x:r.x+4,y:r.y+40}; })()');
    await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",x:rect.x,y:rect.y,button:"left",clickCount:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseMoved",x:rect.x+100,y:rect.y,button:"left",buttons:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",x:rect.x+100,y:rect.y,button:"left",clickCount:1});
    assert.ok(await b.evaluate('Number(document.querySelector(".pane-resizer").getAttribute("aria-valuenow")) > 40'));
    await b.cdp("Input.dispatchKeyEvent", {type:"keyDown",key:"Home",code:"Home"});
    assert.equal(await b.evaluate('document.querySelector(".pane-resizer").getAttribute("aria-valuenow")'), "25");
    assert.equal(await b.evaluate('document.querySelector("#item").dataset.qid'), "R050");
  });

  await t.test("three circuit figures, KaTeX and independent pane scrolling", async () => {
    await b.open("/review?scope=razavi&id=R050");
    await b.waitFor('Array.from(document.querySelectorAll(".question-panel img")).every(i => i.complete && i.naturalWidth > 0)');
    assert.equal(await b.evaluate('document.querySelectorAll(".question-panel img").length'), 3);
    assert.ok(await b.evaluate('document.querySelectorAll(".katex").length > 0'));
    await click('[data-solution-tab="detailed"]');
    await b.evaluate('document.querySelector(".question-panel").scrollTop=150; document.querySelector(".solution-panel").scrollTop=300');
    const at = await b.evaluate('({left:document.querySelector(".question-panel").scrollTop,right:document.querySelector(".solution-panel").scrollTop,y:scrollY})');
    assert.ok(at.left > 0);
    assert.ok(at.right > 0);
    assert.equal(at.y, 0);
    await b.evaluate('document.querySelector(".solution-panel").scrollTop+=200');
    assert.equal(await b.evaluate('document.querySelector(".question-panel").scrollTop'), at.left);
    await split();
    await click(".question-panel .pic");
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), false);
    await b.cdp("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape" });
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
  });

  await t.test("individual step folds survive tab switches", async () => {
    assert.ok(await b.evaluate('document.querySelectorAll("details.step").length > 0'));
    await click("details.step > summary");
    assert.equal(await b.evaluate('document.querySelector("details.step").open'), false);
    await click('[data-solution-tab="answer"]');
    assert.equal(await b.evaluate('document.querySelector(".steps-sol").hidden'), true);
    await click('[data-solution-tab="detailed"]');
    assert.equal(await b.evaluate('document.querySelector("details.step").open'), false);
  });

  await t.test("long problems, oversized formulas, Markdown images and tables stay contained", async () => {
    await b.open("/review?scope=razavi&id=R377");
    await click('[data-solution-tab="answer"]');
    await b.evaluate(`(() => {
      const answer=document.querySelector('.q-answer');
      answer.insertAdjacentHTML('beforeend', window.katex.renderToString('x='+'\\\\frac{g_m R_D}{1+g_m R_S}+'.repeat(40)+'1',{displayMode:true}));
      answer.insertAdjacentHTML('beforeend','<table><tbody><tr>'+'<td>Long circuit parameter</td>'.repeat(40)+'</tr></tbody></table>');
      const image=document.createElement('img'); image.src=document.querySelector('.question-panel img').src; image.width=3200; answer.append(image);
    })()`);
    await split();
    const widths = await b.evaluate(`(() => {
      const formula=Array.from(document.querySelectorAll('.q-answer .katex-display')).at(-1);
      const table=document.querySelector('.q-answer table');
      formula.scrollLeft=100; table.scrollLeft=100;
      return [formula.scrollLeft,table.scrollLeft,document.querySelector('.q-answer img').getBoundingClientRect().width,document.querySelector('.solution-panel').clientWidth];
    })()`);
    assert.ok(widths[0] > 0 && widths[1] > 0);
    assert.ok(widths[2] <= widths[3]);
  });

  await t.test("language, original text and review controls remain usable", async () => {
    await b.open("/review?scope=razavi&id=R050");
    await b.evaluate('document.getElementById("note").value="local review note"');
    await click('[data-flag="question"]');
    await b.evaluate('document.querySelector("[data-solution-tab=detailed]").focus()');
    const submitted = b.reviews.length;
    await b.cdp("Input.dispatchKeyEvent", { type: "keyDown", key: "Enter", code: "Enter" });
    assert.equal(b.reviews.length, submitted);
    assert.equal(await b.evaluate('document.querySelector("#item").dataset.qid'), "R050");
    await click("#lang-switch");
    await b.waitFor('document.documentElement.lang === "zh-CN" && document.querySelector(".orig-toggle")?.textContent === "查看英文原文"');
    assert.equal(await b.evaluate('document.getElementById("note").value'), "local review note");
    assert.equal(await b.evaluate('document.querySelector("[data-flag=question]").getAttribute("aria-pressed")'), "true");
    await click(".orig-toggle");
    await b.waitFor('document.querySelector(".orig-toggle").textContent === "查看中文译文"');
    await split();
    await click("#issue");
    await b.waitFor('document.getElementById("item").dataset.qid !== "R050"');
    assert.equal(b.reviews.at(-1).verdict, "issue");
    assert.equal(b.reviews.at(-1).note, "local review note");
    assert.deepEqual(b.reviews.at(-1).flags, ["question"]);
    assert.equal(await b.evaluate('document.querySelector(".question-panel").scrollTop'), 0);
  });

  await t.test("next, previous, goto, chapter navigation and local comment submission", async () => {
    await b.open("/review?scope=razavi&id=R050&lang=en");
    await click("#next");
    await b.waitFor('document.getElementById("item").dataset.qid === "R051"');
    await click("#prev");
    await b.waitFor('document.getElementById("item").dataset.qid === "R050"');
    await b.evaluate('const box=document.getElementById("goto");box.value="1";box.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:true}))');
    await b.waitFor('document.getElementById("item").dataset.qid === "R001"');
    await click("#next-ch");
    await b.waitFor('state.cards[state.index].ch === 3');
    await b.evaluate('const note=document.getElementById("note");note.value="mock comment";note.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:true}))');
    await b.waitFor('document.getElementById("message").textContent === "Comment posted."');
    assert.equal(b.reviews.at(-1).verdict, "comment");
    await click("#pass");
    await b.waitFor('state.mine[' + JSON.stringify(b.reviews.at(-1).qid) + '] === "pass"');
    assert.equal(b.reviews.at(-1).verdict, "pass");
  });

  await t.test("Browse keeps ordinary document scrolling and incremental loading", async () => {
    await b.open("/browse?scope=razavi&id=R050&lang=en&view=list");
    assert.equal(await b.evaluate('document.body.classList.contains("single-reading")'), false);
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".question-panel")).overflowY'), "visible");
    const before = await b.evaluate("feed.end");
    assert.ok(before < await b.evaluate("state.cards.length"));
    await b.evaluate("window.scrollTo(0,document.documentElement.scrollHeight)");
    await b.waitFor(`feed.end > ${before}`);
  });

  await t.test("Browse focus isolates one card, preserves filters and returns to its list", async () => {
    await b.open("/browse?scope=razavi&id=R050&lang=en&view=list");
    const apiBefore = b.requests.filter((r) => r.path.startsWith("/api/")).length;
    await click('[data-focus-id="R050"]');
    await b.waitFor('state.focus && document.getElementById("item").dataset.qid === "R050"');
    await split();
    assert.equal(await b.evaluate('document.querySelectorAll(".cols").length'), 1);
    assert.equal(await b.evaluate('document.getElementById("cards") === null && document.getElementById("pass") === null'), true);
    assert.ok(await b.evaluate('!location.search.includes("view=list")'));
    assert.equal(b.requests.filter((r) => r.path.startsWith("/api/")).length, apiBefore);
    await click("#next");
    await b.waitFor('document.getElementById("item").dataset.qid === "R051"');
    await click("#reading-view");
    await b.waitFor('!state.focus && document.getElementById("card-R051") !== null');
    assert.equal(await b.evaluate("state.scope"), "razavi");
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".panel")).overflowY'), "visible");
    assert.ok((await b.evaluate("location.search")).includes("view=list"));
  });

  await t.test("shareable focus links preserve language, search and lazy loading", async () => {
    const before = b.requests.length;
    await b.open("/browse?scope=razavi&id=R050&view=focus&lang=zh");
    assert.equal(await b.evaluate('document.getElementById("reading-view").textContent'), "连续浏览");
    assert.equal(await b.evaluate('state.all.some(q => "t" in q)'), false);
    assert.ok(!b.requests.slice(before).some((r) => /\/assets\/search\./.test(r.path)));
    await click('[data-kind="level"][data-key="hard"]');
    assert.equal(await b.evaluate('document.getElementById("item").dataset.qid'), "R050");
    await click('[data-kind="level"][data-key="all"]');
    await b.evaluate('(() => {const input=document.getElementById("search");input.value="R650";input.dispatchEvent(new Event("input",{bubbles:true}));})()');
    await b.waitFor('state.search === "R650" && document.getElementById("item").dataset.qid === "R650"');
    await split();
    await b.evaluate('(() => {const input=document.getElementById("search");input.value="no-such-problem-999999";input.dispatchEvent(new Event("input",{bubbles:true}));})()');
    await b.waitFor('state.search === "no-such-problem-999999" && state.cards.length === 0');
    assert.equal(await b.evaluate('document.querySelector(".cols") === null'), true);
    assert.match(await b.evaluate('document.getElementById("item").textContent'), /没有符合条件/);
  });

  await t.test("textbook search works together with Review, focus reading and the Browse feed", async () => {
    await b.viewport(1440,960);
    async function search(query) {
      await b.evaluate(`(() => { const input=document.getElementById('search'); input.value=${JSON.stringify(query)}; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
      await b.waitFor(`state.search === ${JSON.stringify(query)}`);
      return b.evaluate('state.cards.map(q => q.id).sort()');
    }
    for (const url of ["/review?scope=random&id=R050&lang=en", "/browse?scope=random&id=R050&view=focus&lang=en", "/browse?scope=random&id=R050&lang=en&view=list"]) {
      await b.open(url);
      assert.deepEqual(await search("Allen 5.3-3"), ["A168"]);
      assert.deepEqual(await search("ALLEN PROBLEMS 5.3-3"), ["A168"]);
      assert.deepEqual(await search("razavi problems 7.6"), ["R333","R334","R335","R336","R337","R338"]);
      if (url.includes("review") || url.includes("view=focus")) await split();
      else assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".question-panel")).overflowY'), "visible");
      assert.deepEqual(await search("Razavi 7.600"), []);
      assert.equal(await b.evaluate('document.querySelector(".cols") === null'), true);
      await click('[data-kind="scope"][data-key="allen"]');
      assert.deepEqual(await search("5.3-3"), ["A168"]);
      assert.deepEqual(await search("a168"), ["A168"]);
      assert.ok((await search("MOSFET")).length > 0);
      await b.waitFor('searchText !== null');
      assert.equal(await b.evaluate('state.cards.every(q => searchText[q.id].includes("mosfet"))'), true);
    }
  });

  await t.test("sidebar folding expands reading space, persists, and keeps search accessible", async () => {
    await b.viewport(1440,960);
    await b.open("/review?scope=razavi&id=R050&lang=en");
    await click('[data-solution-tab="detailed"]');
    await b.evaluate('document.getElementById("note").value="keep my draft";document.querySelector(".solution-panel").scrollTop=100');
    const width = await b.evaluate('document.querySelector(".main").getBoundingClientRect().width');
    assert.equal(await b.evaluate('document.querySelector(".sidebar-shell > #sidebar-toggle") !== null'), true);
    assert.equal(await b.evaluate('document.querySelector(".toolbar #sidebar-toggle") === null'), true);
    assert.equal(await b.evaluate('document.getElementById("sidebar-toggle").textContent.trim()'), "");
    await click("#sidebar-toggle");
    assert.equal(await b.evaluate('document.getElementById("side").hidden'), true);
    assert.equal(await b.evaluate('document.getElementById("sidebar-toggle").getAttribute("aria-expanded")'), "false");
    assert.ok(await b.evaluate('document.querySelector(".main").getBoundingClientRect().width') > width + 180);
    assert.equal(await b.evaluate('document.getElementById("sidebar-toggle").getBoundingClientRect().width > 0'), true);
    assert.equal(await b.evaluate('document.getElementById("note").value'), "keep my draft");
    assert.equal(await b.evaluate('!document.querySelector(".steps-sol").hidden'), true);
    assert.equal(await b.evaluate('document.querySelector(".solution-panel").scrollTop'), 100);
    await split();
    if (screenshotDir) await b.screenshot(path.join(screenshotDir,"reading-sidebar-collapsed.png"));
    await b.open("/browse?scope=razavi&id=R050&view=focus&lang=zh");
    assert.equal(await b.evaluate('document.getElementById("side").hidden'), true);
    assert.equal(await b.evaluate('document.getElementById("sidebar-toggle").title'), "展开侧边栏");
    await split();
    await b.cdp("Input.dispatchKeyEvent", { type: "keyDown", key: "/", code: "Slash" });
    assert.equal(await b.evaluate('document.getElementById("side").hidden'), false);
    assert.equal(await b.evaluate('document.activeElement.id'), "search");
    await click("#reading-view");
    await b.viewport(390,844);
    await click("#sidebar-toggle");
    assert.equal(await b.evaluate('document.getElementById("side").hidden'), true);
    assert.equal(await b.evaluate('document.querySelector(".feed") !== null'), true);
    assert.ok(await b.evaluate('document.documentElement.scrollWidth <= document.documentElement.clientWidth'));
    await click("#sidebar-toggle");
    assert.equal(await b.evaluate('document.getElementById("side").hidden'), false);
    assert.equal(await b.evaluate('document.getElementById("sidebar-toggle").title'), "收起侧边栏");
  });

  await t.test("resizing and mobile use a single column without page-width overflow", async () => {
    await b.open("/review?scope=razavi&id=R050&lang=en");
    await click('[data-solution-tab="detailed"]');
    for (const [width, height] of [[1280,720],[1024,768],[999,700],[768,1024],[390,844],[320,640],[1440,500]]) {
      await b.viewport(width, height);
      const p = await panels();
      assert.ok(p.pageWidth <= p.clientWidth, `${width}x${height}: page width ${p.pageWidth}`);
      if (width >= 1000 && height >= 600) await split();
      else {
        assert.ok(p.left.y < p.right.y, `${width}x${height}: single column`);
        assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".question-panel")).overflowY'), "visible");
      }
    }
    if (screenshotDir) {
      await b.viewport(390,844);
      await b.screenshot(path.join(screenshotDir,"reading-mobile.png"));
    }
  });

  await t.test("final desktop screenshot and no browser exceptions", async () => {
    await b.viewport(1440,960);
    await b.open("/review?scope=razavi&id=R050&lang=en");
    await click('[data-solution-tab="detailed"]');
    await b.waitFor('Array.from(document.querySelectorAll(".question-panel img")).every(i=>i.complete && i.naturalWidth>0)');
    if (screenshotDir) await b.screenshot(path.join(screenshotDir,"reading-after.png"));
    assert.deepEqual(b.errors, []);
    assert.ok(b.requests.every((r) => !r.path.startsWith("/api/") || ["GET","POST"].includes(r.method)));
  });

  await t.test("long derivations, translated grading and mobile solution typography", async () => {
    await b.viewport(1440,960);
    await b.open("/browse?scope=razavi&id=R377&view=focus&lang=zh");
    await click('[data-solution-tab="detailed"]');
    assert.ok(await b.evaluate('document.querySelectorAll(".q-steps .katex-display").length > 3'));
    assert.ok(await b.evaluate('document.querySelector(".solution-panel").scrollHeight > document.querySelector(".solution-panel").clientHeight'));
    if (screenshotDir) await b.screenshot(path.join(screenshotDir,"solution-long-zh.png"));
    await click('[data-solution-tab="grading"]');
    assert.ok(await b.evaluate('document.querySelector(".grading .md").textContent.trim().length > 0'));
    if (screenshotDir) await b.screenshot(path.join(screenshotDir,"solution-grading-zh.png"));
    await b.viewport(390,844);
    await click('[data-solution-tab="detailed"]');
    await b.evaluate('document.querySelector(".solution-tabs").scrollIntoView()');
    assert.ok(await b.evaluate('document.documentElement.scrollWidth <= document.documentElement.clientWidth'));
    if (screenshotDir) await b.screenshot(path.join(screenshotDir,"solution-mobile-zh.png"));
    assert.deepEqual(b.errors, []);
  });

  await t.test("answer reading measures follow content language across all tabs and viewport widths", async () => {
    for (const language of ["en", "zh"]) for (const width of [320,390,768,999,1000,1440,2560]) {
      await b.viewport(width,960);
      await b.open('/browse?scope=razavi&id=R377&lang=' + language);
      await b.waitFor('!document.querySelector("[data-solution-tab=grading]").hidden');
      for (const key of ["answer","detailed","grading"]) {
        await click('[data-solution-tab="' + key + '"]');
        const m = await b.evaluate('(() => { const md=document.querySelector("[role=tabpanel]:not([hidden]) .md"), s=getComputedStyle(md), r=md.getBoundingClientRect(), panel=document.querySelector(".solution-panel"); return {locale:md.lang,width:r.width,limit:parseFloat(s.maxWidth),size:parseFloat(s.fontSize),line:parseFloat(s.lineHeight),pane:panel.clientWidth,overflow:document.documentElement.scrollWidth>innerWidth,errors:md.querySelectorAll(".katex-error").length}; })()');
        const label = language + ' ' + width + ' ' + key;
        assert.equal(m.locale, key === "grading" ? "en" : language, label);
        assert.equal(m.size,16,label);
        assert.ok(m.width <= m.limit + 1 && m.width <= m.pane,label);
        assert.ok(Math.abs(m.line / m.size - (m.locale === "zh" ? 1.9 : 1.75)) < .01,label);
        if (width === 2560) {
          assert.ok(Math.abs(m.width - m.limit) < 1,label);
          assert.ok(m.pane > m.width + 300,"wide panes remain wide: " + label);
        }
        assert.equal(m.overflow,false,label);
        assert.equal(m.errors,0,label);
      }
    }
  });

  await t.test("reading measures survive sidebar and pane width extremes without coupling scroll positions", async () => {
    for (const width of [1000,1440,2560]) {
      await b.viewport(width,960);
      await b.open('/review?scope=razavi&id=R377&lang=zh');
      await click('[data-solution-tab="detailed"]');
      for (const side of [180,480]) for (const closed of [false,true]) for (const percent of [25,70]) {
        const m = await b.evaluate('(() => { setSideWidth(' + side + ',false);setSidebar(' + closed + ');resizePanes(document.querySelector(".pane-resizer"),' + percent + ');const left=document.querySelector(".question-panel"),right=document.querySelector(".solution-panel"),md=document.querySelector(".q-steps");left.scrollTop=80;const before=left.scrollTop;right.scrollTop=200;return {before,after:left.scrollTop,page:scrollY,overflow:document.documentElement.scrollWidth>innerWidth,width:md.getBoundingClientRect().width,pane:right.clientWidth,limit:parseFloat(getComputedStyle(md).maxWidth)}; })()');
        assert.equal(m.overflow,false,[width,side,closed,percent].join('/'));
        assert.ok(m.width <= Math.min(m.limit,m.pane) + 1);
        assert.equal(m.before,m.after);
        assert.equal(m.page,0);
      }
    }
    await b.evaluate('setSidebar(false);setSideWidth(260,false)');
  });

  await t.test("English originals, grading and missing Chinese files use English reading typography", async () => {
    await b.viewport(2560,960);
    await b.open('/browse?scope=razavi&id=R377&lang=zh');
    await b.waitFor('document.querySelector(".q-steps").lang === "zh"');
    await click('.orig-toggle');
    await b.waitFor('document.querySelector(".q-steps").lang === "en"');
    assert.equal(await b.evaluate('document.documentElement.lang'),"zh-CN");
    assert.equal(await b.evaluate('document.querySelector(".q-answer").lang'),"en");
    await click('.orig-toggle');
    await b.waitFor('document.querySelector(".q-steps").lang === "zh"');
    await b.evaluate('(async () => {const q=state.cards[state.index],files=await bundle(q),original=bundle;bundle=async()=>Object.fromEntries(Object.entries(files).filter(([name])=>!name.endsWith(".zh.md")));try {await fillCard(document.getElementById("item"),q);} finally {bundle=original;} })()');
    for (const selector of [".q-question",".q-answer",".q-steps",".grading .md"]) {
      assert.equal(await b.evaluate('document.querySelector(' + JSON.stringify(selector) + ').lang'),"en");
    }
  });

  await t.test("inline math, oversized display math and tables stay readable in light and dark narrow layouts", async () => {
    for (const theme of ["light","dark"]) {
      await b.cdp("Emulation.setEmulatedMedia",{features:[{name:"prefers-color-scheme",value:theme}]});
      for (const language of ["en","zh"]) for (const width of [320,390,768,999,1000,1440,2560]) {
        await b.viewport(width,960);
        await b.open('/browse?scope=razavi&id=R377&lang=' + language);
        await b.evaluate(String.raw`(() => {
          const box=document.querySelector('.q-answer');
          const inline=renderMarkdown('中文电压 $V_{GS}=0.7\\,\\mathrm{V}$ 与 $g_m=\\frac{2I_D}{V_{ov}}$ 混排，English units and subscripts.');
          box.insertAdjacentHTML('beforeend','<section class="typography-fixture"><h2>Heading two</h2><h3>Heading three</h3><h4>Heading four</h4>'+inline+window.katex.renderToString('x='+'\\frac{g_m R_D}{1+g_m R_S}+'.repeat(40)+'1',{displayMode:true})+'<table><tbody><tr>'+'<td>Long circuit parameter</td>'.repeat(40)+'</tr></tbody></table></section>');
        })()`);
        const m = await b.evaluate('(() => {const f=document.querySelector(".typography-fixture"),md=f.closest(".md"),math=f.querySelector("p .katex"),eq=f.querySelector(".katex-display"),table=f.querySelector("table"),size=el=>parseFloat(getComputedStyle(el).fontSize);eq.scrollLeft=100;table.scrollLeft=100;return {eq:eq.scrollLeft,table:table.scrollLeft,eqWidth:eq.getBoundingClientRect().width,tableWidth:table.getBoundingClientRect().width,width:md.clientWidth,overflow:document.documentElement.scrollWidth>innerWidth,mathColor:getComputedStyle(math).color,textColor:getComputedStyle(md).color,inlineHeight:math.getBoundingClientRect().height,line:parseFloat(getComputedStyle(md).lineHeight),sizes:[size(f.querySelector("h2")),size(f.querySelector("h3")),size(f.querySelector("h4"))],errors:f.querySelectorAll(".katex-error").length}; })()');
        assert.ok(m.eq > 0 && m.table > 0,[theme,language,width].join('/'));
        assert.ok(m.eqWidth <= m.width + 1 && m.tableWidth <= m.width + 1);
        assert.equal(m.overflow,false);
        assert.equal(m.mathColor,m.textColor);
        assert.ok(m.inlineHeight <= m.line + 2);
        assert.ok(m.sizes[0] > m.sizes[1] && m.sizes[1] > m.sizes[2]);
        assert.equal(m.errors,0);
      }
    }
    await b.cdp("Emulation.setEmulatedMedia",{features:[]});
    assert.deepEqual(b.errors,[]);
  });

  await t.test("current-step tools remain visible in desktop, mobile and list scrolling", async () => {
    for (const width of [320,390,768,999,1000,1440,2560]) {
      for (const mode of ["focus","list"]) {
        await b.viewport(width,960);
        await b.open('/browse?scope=razavi&id=R005&lang=zh&view=' + mode);
        const card = mode === "list" ? '#card-R005' : '#item';
        await b.waitFor(`!document.querySelector('${card} [data-solution-tab=detailed]').hidden`);
        await click(card + ' [data-solution-tab=detailed]');
        await b.evaluate(`(() => {
          const card=document.querySelector('${card}'), panel=card.querySelector('.solution-panel');
          const tabs=panel.querySelector('.solution-tabs'),tools=panel.querySelector('.solution-tools');
          const step=card.querySelector('[data-step-number="3"]');
          const bounded=getComputedStyle(panel).overflowY === 'auto';
          const top=bounded ? panel.getBoundingClientRect().top+tabs.getBoundingClientRect().height : headerBottom();
          const delta=step.getBoundingClientRect().top-top-tools.getBoundingClientRect().height-4;
          if (bounded) panel.scrollTop+=delta; else window.scrollBy(0,delta);
        })()`);
        await b.waitFor(`document.querySelector('${card} .solution-tools').dataset.currentStep === '3'`);
        const position = await b.evaluate(`(() => {
          const p=document.querySelector('${card} .solution-panel'),tools=p.querySelector('.solution-tools');
          const top=getComputedStyle(p).overflowY === 'auto' ? p.getBoundingClientRect().top+p.querySelector('.solution-tabs').getBoundingClientRect().height : headerBottom();
          return {actual:tools.getBoundingClientRect().top,expected:top,overflow:document.documentElement.scrollWidth>innerWidth};
        })()`);
        assert.ok(Math.abs(position.actual-position.expected)<2,`${width}/${mode}: ${JSON.stringify(position)}`);
        assert.equal(position.overflow,false);
      }
    }
  });

  await t.test("section boundaries, empty steps and navigation cleanup survive replacement", async () => {
    await b.viewport(1440,960);
    await b.open('/browse?scope=razavi&id=R005&lang=en');
    await b.evaluate(String.raw`(async () => {
      const q=state.cards[state.index], files=await bundle(q), original=bundle;
      bundle=async()=>({...files,'detailed_solution.md':'# Solution\n### Step 1 — Model\nFirst body.\n## Parent section\nOutside step one.\n### Method\nGeneral method.\n### Step 2 — Compute\nSecond body.\n### Result\n**42 V**\n### Possible result\nUncertain discussion.'});
      try {await fillCard(document.getElementById('item'),q);} finally {bundle=original;}
    })()`);
    assert.equal(await b.evaluate('document.querySelectorAll(".q-steps > h2").length'),1);
    assert.equal(await b.evaluate('document.querySelectorAll(".q-steps [data-step-number]").length'),2);
    assert.equal(await b.evaluate('document.querySelectorAll(".q-steps .result-section").length'),1);
    assert.equal(await b.evaluate('solutionNavigation.size'),1);
    await b.evaluate(String.raw`(async () => {
      const q=state.cards[state.index],files=await bundle(q),original=bundle;
      const figure=state.all.find(q=>q.id === 'R050');
      bundle=async()=>({...files,'golden_solution.md':'# Answer\n## Reference answer\n![Circuit]('+asset(figure,figure.figs[0])+')','detailed_solution.md':'### Method\nA solution with no numbered steps.'});
      try {await fillCard(document.getElementById('item'),q);} finally {bundle=original;}
    })()`);
    assert.equal(await b.evaluate('document.querySelector(".solution-tools").hidden'),true);
    assert.equal(await b.evaluate('solutionNavigation.size'),0);
    assert.equal(await b.evaluate('document.querySelectorAll(".tab-meta").length'),0);
    await b.open('/browse?scope=razavi&id=R005&lang=zh');
    await b.waitFor('solutionNavigation.size === 1');
    await click('#lang-switch');
    await b.waitFor('document.querySelector(".q-steps").lang === "en" && solutionNavigation.size === 1');
    await click('#next');
    await b.waitFor('document.getElementById("item").dataset.qid === "R006" && solutionNavigation.size === 1');
    assert.equal(await b.evaluate('[...solutionNavigation.keys()].every(p=>p.isConnected)'),true);
    await b.open('/browse?scope=gray&id=G001&lang=zh');
    assert.equal(await b.evaluate('solutionNavigation.size'),0);
    assert.equal(await b.evaluate('document.querySelector("[data-solution-tab=detailed]").hidden'),true);
    assert.deepEqual(b.errors,[]);
  });

  await t.test("tabs stay quiet and current-step actions preserve other folds and review drafts", async () => {
    for (const language of ["en","zh"]) {
      await b.viewport(1440,960);
      await b.open('/review?scope=razavi&id=R006&lang=' + language);
      await b.waitFor('!document.querySelector("[data-solution-tab=detailed]").hidden');
      const contentRequests = () => b.requests.filter(({path}) => /^(?:\/b\/|\/q\/.*\.md$)/.test(path)).length;
      const requests = contentRequests();
      assert.equal(await b.evaluate('document.querySelectorAll(".tab-meta").length'),0);
      assert.deepEqual(await b.evaluate('[...document.querySelectorAll("[role=tab]")].map(tab=>tab.textContent)'),language === "zh" ? ["参考答案","详细步骤","评分说明"] : ["Reference answer","Detailed solution","Grading notes"]);
      await click('[data-solution-tab=detailed]');
      await b.waitFor('document.querySelector(".solution-tools").dataset.currentStep === "1"');
      assert.equal(await b.evaluate('document.querySelector(".step-menu").open'),false);
      await b.evaluate('document.querySelector(".question-panel").scrollTop=70;window.leftBeforeToggle=document.querySelector(".question-panel").scrollTop;document.getElementById("note").value="keep draft"');
      await click('[data-current-step-toggle]');
      assert.equal(await b.evaluate(`document.querySelector('[data-step-number="1"]').open`),false);
      assert.equal(await b.evaluate('document.querySelectorAll("[data-step-number][open]").length'),5);
      assert.equal(await b.evaluate('document.querySelector(".result-section").open'),true);
      assert.equal(await b.evaluate('document.querySelector("[data-current-step-toggle]").getAttribute("aria-expanded")'),"false");
      await click('[data-solution-tab=answer]');
      await click('[data-solution-tab=detailed]');
      assert.equal(await b.evaluate(`document.querySelector('[data-step-number="1"]').open`),false);
      await click('[data-current-step-toggle]');
      assert.equal(await b.evaluate('document.querySelectorAll("[data-step-number][open]").length'),6);
      assert.equal(await b.evaluate('document.querySelector(".question-panel").scrollTop === leftBeforeToggle'),true);
      assert.equal(contentRequests(),requests);
      await click('[data-flag=question]');
      const submissions=b.reviews.length;
      await b.evaluate('document.querySelector("[data-current-step-toggle]").focus()');
      for (const type of ["keyDown","keyUp"]) await b.cdp("Input.dispatchKeyEvent",{type,key:"Enter",code:"Enter"});
      assert.equal(b.reviews.length,submissions);
      assert.equal(await b.evaluate('document.getElementById("note").value'),"keep draft");
      await click('.step-menu > summary');
      await click('[data-steps-open=false]');
      assert.equal(await b.evaluate('document.querySelector(".step-menu").open'),false);
      assert.equal(await b.evaluate('document.querySelectorAll("[data-step-number][open]").length'),0);
      await click('.step-menu > summary');
      await click('[data-steps-open=true]');
      assert.equal(await b.evaluate('document.querySelectorAll("[data-step-number][open]").length'),6);
      await click('.step-menu > summary');
      await b.evaluate('document.querySelector(".step-menu > summary").focus()');
      await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape"});
      assert.equal(await b.evaluate('document.querySelector(".step-menu").open'),false);
      assert.equal(await b.evaluate('document.activeElement.matches(".step-menu > summary")'),true);
    }
  });

  await t.test("collapsing the step being read keeps its title and inverse action reachable", async () => {
    for (const width of [320,390,1000,1440]) for (const mode of ["focus","list"]) {
      await b.viewport(width,960);
      await b.open('/browse?scope=razavi&id=R377&lang=zh&view=' + mode);
      const card=mode === "list" ? '#card-R377' : '#item';
      await b.waitFor(`!document.querySelector('${card} [data-solution-tab=detailed]').hidden`);
      await click(card+' [data-solution-tab=detailed]');
      await b.evaluate(`(() => {
        const card=document.querySelector('${card}'),panel=card.querySelector('.solution-panel');
        const tools=panel.querySelector('.solution-tools'),tabs=panel.querySelector('.solution-tabs');
        const step=card.querySelector('[data-step-number="2"]');
        const bounded=getComputedStyle(panel).overflowY === 'auto';
        const top=bounded ? panel.getBoundingClientRect().top+tabs.getBoundingClientRect().height : headerBottom();
        const delta=step.getBoundingClientRect().top-top-tools.getBoundingClientRect().height+80;
        if (bounded) panel.scrollTop+=delta; else window.scrollBy(0,delta);
      })()`);
      await b.waitFor(`document.querySelector('${card} .solution-tools').dataset.currentStep === '2'`);
      const count=await b.evaluate(`document.querySelectorAll('${card} [data-step-number][open]').length`);
      for (const expanded of [false,true]) {
        await click(card+' [data-current-step-toggle]');
        await b.evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))');
        const position=await b.evaluate(`(() => {
          const card=document.querySelector('${card}'),tools=card.querySelector('.solution-tools');
          const step=card.querySelector('[data-step-number="2"]'),button=tools.querySelector('[data-current-step-toggle]');
          return {current:tools.dataset.currentStep,open:step.open,stepTop:step.getBoundingClientRect().top,toolsBottom:tools.getBoundingClientRect().bottom,buttonTop:button.getBoundingClientRect().top,buttonBottom:button.getBoundingClientRect().bottom,controls:button.getAttribute('aria-controls'),stepId:step.id,overflow:document.documentElement.scrollWidth>innerWidth};
        })()`);
        assert.equal(position.current,"2",`${width}/${mode}`);
        assert.equal(position.open,expanded);
        assert.ok(position.stepTop>=position.toolsBottom-1 && position.stepTop<position.toolsBottom+50,`${width}/${mode}: ${JSON.stringify(position)}`);
        assert.ok(position.buttonTop>=0 && position.buttonBottom<960);
        assert.equal(position.controls,position.stepId);
        assert.equal(position.overflow,false);
      }
      assert.equal(await b.evaluate(`document.querySelectorAll('${card} [data-step-number][open]').length`),count);
    }
    assert.deepEqual(b.errors,[]);
  });

  await t.test("compact navigation is a left drawer, preserves the reader and never moves below the page", async () => {
    for (const width of [320,390,768,900]) for (const language of ["en","zh"]) {
      await b.viewport(width,800);
      await b.open('/browse?scope=razavi&id=R377&lang='+language);
      await b.waitFor('[...document.querySelectorAll(".question-panel img")].every(i=>i.complete&&i.naturalWidth>0)');
      await b.evaluate('window.scrollTo(0,200);window.positionBeforeDrawer=scrollY;window.sidebarPreference=state.sidebarClosed;document.getElementById("navigation-trigger").focus();document.getElementById("navigation-trigger").click()');
      await b.waitFor('document.getElementById("navigation-dialog").open');
      const drawer = await b.evaluate('(() => {const d=document.getElementById("navigation-dialog"),r=d.getBoundingClientRect();return {left:r.left,top:r.top,right:r.right,bottom:r.bottom,height:innerHeight,width:innerWidth,parent:document.getElementById("side").parentElement.id,shell:getComputedStyle(document.querySelector(".sidebar-shell")).display,preference:state.sidebarClosed===sidebarPreference};})()');
      assert.equal(drawer.left,0);
      assert.equal(drawer.top,0);
      assert.ok(drawer.right<drawer.width && Math.abs(drawer.bottom-drawer.height)<2);
      assert.equal(drawer.parent,"navigation-content");
      assert.equal(drawer.shell,"none");
      assert.equal(drawer.preference,true);
      for (let i=0;i<18;i++) {
        await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"Tab",code:"Tab"});
        assert.equal(await b.evaluate('document.getElementById("navigation-dialog").contains(document.activeElement)'),true);
      }
      await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape"});
      await b.waitFor('!document.getElementById("navigation-dialog").open && document.getElementById("side").parentElement.classList.contains("sidebar-shell")');
      assert.equal(await b.evaluate('document.activeElement.id'),"navigation-trigger");
      assert.equal(await b.evaluate('document.querySelectorAll("#side").length'),1);
      assert.equal(await b.evaluate('document.querySelectorAll("#search").length'),1);
      assert.ok(await b.evaluate('Math.abs(scrollY-positionBeforeDrawer)<2'));
      assert.equal(await b.evaluate('document.body.classList.contains("overlay-open")'),false);
      assert.ok(await b.evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth'));
      if (width<=600) for (const id of ["prev-ch","prev","next","next-ch"]) {
        assert.ok(await b.evaluate(`(() => {const r=document.getElementById('${id}').getBoundingClientRect();return r.width>=44&&r.height>=44;})()`));
      }
    }
  });

  await t.test("drawer filters, lazy search, random action and desktop sidebar preference stay connected", async () => {
    await b.viewport(1440,960);
    await b.open('/review?scope=razavi&id=R005&lang=zh');
    await b.evaluate('setSidebar(true);document.getElementById("note").value="drawer draft"');
    await b.viewport(390,800);
    const before=b.requests.filter(r=>/\/assets\/search\./.test(r.path)).length;
    await click('#navigation-trigger');
    assert.equal(b.requests.filter(r=>/\/assets\/search\./.test(r.path)).length,before,"opening contents alone does not load search text");
    await click('[data-kind=scope][data-key=allen]');
    await b.waitFor('state.scope === "allen"');
    assert.equal(await b.evaluate('document.getElementById("navigation-dialog").open'),true);
    await click('#navigation-done');
    assert.equal(await b.evaluate('state.sidebarClosed'),true);
    await b.viewport(1440,960);
    assert.equal(await b.evaluate('document.getElementById("side").hidden'),true);
    await b.viewport(390,800);
    await b.evaluate('document.activeElement.blur()');
    await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"/",code:"Slash"});
    assert.equal(await b.evaluate('document.activeElement.id'),"search");
    await b.waitFor('searchText !== null');
    await b.evaluate('const input=document.getElementById("search");input.value="A168";input.dispatchEvent(new Event("input",{bubbles:true}))');
    await b.waitFor('state.cards.length === 1 && state.cards[0].id === "A168"');
    await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"ArrowRight",code:"ArrowRight"});
    assert.equal(await b.evaluate('state.cards[state.index].id'),"A168");
    await b.viewport(1440,960);
    await b.waitFor('!document.getElementById("navigation-dialog").open');
    assert.equal(await b.evaluate('document.getElementById("side").parentElement.className'),"sidebar-shell");
    assert.equal(await b.evaluate('document.getElementById("search").value'),"A168");
    assert.equal(await b.evaluate('state.sidebarClosed'),true);
    await b.viewport(390,800);
    await b.open('/browse?scope=razavi&id=R005&lang=zh');
    await click('#navigation-trigger');
    await click('#mobile-random');
    await b.waitFor('!document.getElementById("navigation-dialog").open && state.cards[state.index].id !== "R005"');
  });

  await t.test("shortcut help is discoverable, keyboard accessible and protects review actions", async () => {
    for (const width of [320,1440]) for (const language of ["en","zh"]) for (const mode of ["browse","review"]) {
      await b.viewport(width,800);
      await b.open('/'+mode+'?scope=razavi&id=R005&lang='+language);
      if (mode === "review") await b.evaluate('document.getElementById("note").value="keep help draft"');
      await b.evaluate('document.getElementById("keyboard-help").focus();document.getElementById("keyboard-help").click()');
      assert.equal(await b.evaluate('document.getElementById("shortcuts-dialog").open'),true);
      assert.equal(await b.evaluate('document.activeElement.id'),"shortcuts-close");
      const text=await b.evaluate('document.getElementById("shortcuts-dialog").textContent');
      assert.match(text,/Shift/);
      assert.match(text,/←/);
      assert.match(text,language === "zh" ? /随机/ : /Random/);
      const submissions=b.reviews.length;
      for (const key of ["p","r","ArrowRight"]) await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key});
      assert.equal(await b.evaluate('state.cards[state.index].id'),"R005");
      assert.equal(b.reviews.length,submissions);
      for (let i=0;i<8;i++) {
        await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"Tab",code:"Tab"});
        assert.equal(await b.evaluate('document.getElementById("shortcuts-dialog").contains(document.activeElement)'),true);
      }
      await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape"});
      await b.waitFor('!document.getElementById("shortcuts-dialog").open');
      assert.equal(await b.evaluate('document.activeElement.id'),"keyboard-help");
      if (mode === "review") assert.equal(await b.evaluate('document.getElementById("note").value'),"keep help draft");
      await b.evaluate('document.activeElement.blur()');
      await b.cdp("Input.dispatchKeyEvent",{type:"keyDown",key:"?",code:"Slash",modifiers:8});
      assert.equal(await b.evaluate('document.getElementById("shortcuts-dialog").open'),true);
      await click('#shortcuts-close');
      await b.waitFor('!document.getElementById("shortcuts-dialog").open');
      assert.ok(await b.evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth'));
    }
    assert.deepEqual(b.errors,[]);
  });

});
