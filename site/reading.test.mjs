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

  await t.test("short review questions use the available height with answer visible by default", async () => {
    await b.open("/review?scope=razavi&id=R650");
    await split();
    assert.equal(await b.evaluate('document.querySelector("details.steps-sol").open'), false);
    assert.ok(await b.evaluate('document.querySelector(".q-answer").textContent.length > 20'));
    assert.ok(await b.evaluate('document.getElementById("pass").getBoundingClientRect().bottom < document.querySelector(".cols").getBoundingClientRect().top'));
  });

  await t.test("three circuit figures, KaTeX and independent pane scrolling", async () => {
    await b.open("/review?scope=razavi&id=R050");
    await b.waitFor('Array.from(document.querySelectorAll(".question-panel img")).every(i => i.complete && i.naturalWidth > 0)');
    assert.equal(await b.evaluate('document.querySelectorAll(".question-panel img").length'), 3);
    assert.ok(await b.evaluate('document.querySelectorAll(".katex").length > 0'));
    await click("details.steps-sol > summary");
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

  await t.test("detailed solutions and individual steps still fold independently", async () => {
    assert.ok(await b.evaluate('document.querySelectorAll("details.step").length > 0'));
    await click("details.step > summary");
    assert.equal(await b.evaluate('document.querySelector("details.step").open'), false);
    await click("details.steps-sol > summary");
    assert.equal(await b.evaluate('document.querySelector("details.steps-sol").open'), false);
    await click("details.steps-sol > summary");
    assert.equal(await b.evaluate('document.querySelector("details.step").open'), false);
  });

  await t.test("long problems, oversized formulas, Markdown images and tables stay contained", async () => {
    await b.open("/review?scope=razavi&id=R377");
    await click("details.steps-sol > summary");
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
    await b.open("/browse?scope=razavi&id=R050&lang=en");
    assert.equal(await b.evaluate('document.body.classList.contains("single-reading")'), false);
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".question-panel")).overflowY'), "visible");
    const before = await b.evaluate("feed.end");
    assert.ok(before < await b.evaluate("state.cards.length"));
    await b.evaluate("window.scrollTo(0,document.documentElement.scrollHeight)");
    await b.waitFor(`feed.end > ${before}`);
  });

  await t.test("Browse focus isolates one card, preserves filters and returns to its list", async () => {
    await b.open("/browse?scope=razavi&id=R050&lang=en");
    const apiBefore = b.requests.filter((r) => r.path.startsWith("/api/")).length;
    await click('[data-focus-id="R050"]');
    await b.waitFor('state.focus && document.getElementById("item").dataset.qid === "R050"');
    await split();
    assert.equal(await b.evaluate('document.querySelectorAll(".cols").length'), 1);
    assert.equal(await b.evaluate('document.getElementById("cards") === null && document.getElementById("pass") === null'), true);
    assert.ok(await b.evaluate('location.search.includes("view=focus")'));
    assert.equal(b.requests.filter((r) => r.path.startsWith("/api/")).length, apiBefore);
    await click("#next");
    await b.waitFor('document.getElementById("item").dataset.qid === "R051"');
    await click("#reading-view");
    await b.waitFor('!state.focus && document.getElementById("card-R051") !== null');
    assert.equal(await b.evaluate("state.scope"), "razavi");
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".panel")).overflowY'), "visible");
    assert.ok(!(await b.evaluate("location.search")).includes("view=focus"));
  });

  await t.test("shareable focus links preserve language, search and lazy loading", async () => {
    const before = b.requests.length;
    await b.open("/browse?scope=razavi&id=R050&view=focus&lang=zh");
    assert.equal(await b.evaluate('document.getElementById("reading-view").textContent'), "返回列表");
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

  await t.test("sidebar folding expands reading space, persists, and keeps search accessible", async () => {
    await b.viewport(1440,960);
    await b.open("/review?scope=razavi&id=R050&lang=en");
    await click("details.steps-sol > summary");
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
    assert.equal(await b.evaluate('document.querySelector("details.steps-sol").open'), true);
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
    await click("details.steps-sol > summary");
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
    await click("details.steps-sol > summary");
    await b.waitFor('Array.from(document.querySelectorAll(".question-panel img")).every(i=>i.complete && i.naturalWidth>0)');
    if (screenshotDir) await b.screenshot(path.join(screenshotDir,"reading-after.png"));
    assert.deepEqual(b.errors, []);
    assert.ok(b.requests.every((r) => !r.path.startsWith("/api/") || ["GET","POST"].includes(r.method)));
  });
});
