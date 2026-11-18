import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { startBrowser } from "./test-browser.mjs";

test("inline image viewer in a real browser", { timeout: 180000 }, async (t) => {
  let b = await startBrowser();
  t.after(() => b.close());
  const screenshots = process.env.AB_SCREENSHOTS_DIR;
  if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
  const frame = ".question-panel .image-viewport";
  const scale = (selector = frame) => b.evaluate(`Number(document.querySelector(${JSON.stringify(selector)}).dataset.scale)`);
  const fit = (selector = frame) => b.evaluate(`document.querySelector(${JSON.stringify(selector)}).parentElement.querySelector('[data-image-fit]').click()`);
  const settle = () => b.evaluate('new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))');
  async function open(url = "/review?scope=razavi&id=R050&lang=en", loaded = ".image-viewport") {
    await b.cdp("Emulation.setTouchEmulationEnabled", {enabled:false});
    await b.viewport(1440, 960);
    await b.open(url);
    await b.waitFor(`document.querySelector(${JSON.stringify(loaded + " img")})?.naturalWidth > 0`);
    await settle();
    await b.evaluate(`document.querySelector('${frame}').scrollIntoView({block:'center'})`);
  }
  async function point(selector = frame, x = .5, y = .5) {
    return b.evaluate(`(() => {const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return {x:r.x+r.width*${x},y:r.y+r.height*${y}};})()`);
  }
  async function wheel(deltaY, selector = frame, at) {
    const p = at || await point(selector);
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseWheel",...p,deltaX:0,deltaY});
    await settle();
  }
  async function drag(start, end, modifiers = 0, during) {
    await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",...start,button:"left",clickCount:1,modifiers});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseMoved",...end,button:"left",buttons:1,modifiers});
    await settle();
    if (during) await during();
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",...end,button:"left",clickCount:1,modifiers});
    await settle();
  }
  async function snapshot(name) {
    if (screenshots) await b.screenshot(path.join(screenshots, name));
  }

  await t.test("wheel keeps a point anchored, clamps to 12x and preserves panel bounds", async () => {
    await open();
    const p = await point(frame, .48, .43);
    const mark = () => b.evaluate(`(() => {const r=document.querySelector('${frame} img').getBoundingClientRect();return {u:(${p.x}-r.left)/r.width,v:(${p.y}-r.top)/r.height,w:r.width,h:r.height,scroll:document.querySelector('.question-panel').scrollTop};})()`);
    const before = await mark();
    await snapshot("images-before.png");
    await wheel(-80, frame, p);
    const after = await mark();
    assert.ok(await scale() > 1);
    assert.ok(Math.abs(before.u - after.u) < .002);
    assert.ok(Math.abs(before.v - after.v) < .002);
    assert.equal(after.scroll, before.scroll);
    for (let i = 0; i < 12; i++) await wheel(-160, frame, p);
    assert.equal(await scale(), 12);
    const max = await mark();
    assert.ok(Math.abs(max.w / before.w - 12) < .01);
    assert.ok(Math.abs(max.h / before.h - 12) < .01);
    assert.ok(await b.evaluate('document.documentElement.scrollWidth <= innerWidth'));
    assert.equal(await b.evaluate('document.querySelectorAll(".image-viewport.is-zoomed").length'), 1);
    await snapshot("images-12x.png");
  });

  await t.test("pan is bounded and dragging never opens the modal", async () => {
    const start = await point();
    await drag(start, {x:start.x+200,y:start.y+130});
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
    const first = await b.evaluate(`document.querySelector('${frame} img').getBoundingClientRect().left`);
    await drag(start, {x:start.x-300,y:start.y-180});
    assert.ok(await b.evaluate(`document.querySelector('${frame} img').getBoundingClientRect().left`) < first);
    await drag(start, {x:start.x+4000,y:start.y+4000});
    const bounds = await b.evaluate(`(() => {const f=document.querySelector('${frame}').getBoundingClientRect(),r=document.querySelector('${frame} img').getBoundingClientRect();return {left:r.left-f.left,top:r.top-f.top,right:r.right-f.right,bottom:r.bottom-f.bottom};})()`);
    assert.ok(bounds.left <= 2 && bounds.top <= 2 && bounds.right >= -2 && bounds.bottom >= -2);
    assert.equal(await b.evaluate('document.querySelector(".is-panning") === null'), true);
  });

  await t.test("Fit and double-click reset zoom, and wheel scrolling resumes at 100%", async () => {
    await fit();
    assert.equal(await scale(), 1);
    assert.equal(await b.evaluate(`document.querySelector('${frame} img').style.transform`), "");
    assert.equal(await b.evaluate('document.querySelector(".image-controls").hidden'), true);
    await wheel(-160);
    const p = await point();
    for (const clickCount of [1,2]) {
      await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",...p,button:"left",clickCount});
      await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",...p,button:"left",clickCount});
    }
    assert.equal(await scale(), 1);
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
    await b.evaluate(`document.querySelector('${frame}').scrollIntoView({block:'start'})`);
    const before = await b.evaluate('document.querySelector(".question-panel").scrollTop');
    await wheel(160);
    await b.waitFor(`document.querySelector('.question-panel').scrollTop > ${before}`);
    assert.equal(await scale(), 1);
    assert.equal(await b.evaluate('scrollY'), 0);
  });

  await t.test("Shift region zoom fits proportionally; tiny and cancelled selections do nothing", async () => {
    await open();
    const start = await point(frame, .25, .25), end = await point(frame, .75, .75);
    await drag(start, end, 8, async () => {
      assert.equal(await b.evaluate('document.querySelector(".image-selection").hidden'), false);
      await snapshot("images-region-select.png");
    });
    assert.ok(Math.abs(await scale() - 2) < .05);
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
    await snapshot("images-region-zoom.png");
    await fit();
    await drag(start, {x:start.x+16,y:start.y+16}, 8);
    assert.equal(await scale(), 12);
    await fit();
    await drag(start, {x:start.x+3,y:start.y+3}, 8);
    assert.equal(await scale(), 1);
    await drag(start, end, 8, async () => {
      await b.cdp("Input.dispatchKeyEvent", {type:"keyDown",key:"Escape",code:"Escape"});
    });
    assert.equal(await scale(), 1);
    assert.equal(await b.evaluate('document.querySelector(".image-selection").hidden'), true);
    assert.equal(await b.evaluate('imageGesture'), null);
    await drag(start, end, 8, async () => {
      await b.evaluate('document.querySelector(".image-viewport").dispatchEvent(new PointerEvent("pointercancel",{bubbles:true}))');
    });
    assert.equal(await scale(), 1);
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
  });

  await t.test("click at fitted size opens the existing full-resolution modal and Escape closes it", async () => {
    await open();
    const p = await point();
    await b.cdp("Input.dispatchMouseEvent", {type:"mousePressed",...p,button:"left",clickCount:1});
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseReleased",...p,button:"left",clickCount:1});
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), false);
    assert.equal(await b.evaluate(`document.querySelector('#zoom img').src === document.querySelector('${frame} img').src`), true);
    await b.cdp("Input.dispatchKeyEvent", {type:"keyDown",key:"Escape",code:"Escape"});
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
    await b.evaluate('window.imageNativeDrags=0; document.addEventListener("dragstart",()=>imageNativeDrags++)');
    await drag(p, {x:p.x+40,y:p.y+30});
    assert.equal(await scale(), 1);
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
    assert.equal(await b.evaluate('imageNativeDrags'), 0);
  });

  await t.test("trackpad pinch zooms locally while two-finger scrolling never changes scale", async () => {
    await open();
    const beforeScroll = await b.evaluate('document.querySelector(".question-panel").scrollTop');
    await wheel(12);
    assert.equal(await scale(),1);
    await b.waitFor(`document.querySelector('.question-panel').scrollTop > ${beforeScroll}`);
    const p = await point(frame,.48,.43);
    const mark = () => b.evaluate(`(() => {const r=document.querySelector('${frame} img').getBoundingClientRect();return {u:(${p.x}-r.left)/r.width,v:(${p.y}-r.top)/r.height,pageZoom:visualViewport.scale};})()`);
    const before = await mark();
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseWheel",...p,deltaX:0,deltaY:-40,modifiers:2});
    await settle();
    assert.ok(await scale()>1);
    const after = await mark();
    assert.ok(Math.abs(before.u-after.u)<.002 && Math.abs(before.v-after.v)<.002);
    assert.equal(after.pageZoom,before.pageZoom);
    const magnification = await scale();
    const top = await b.evaluate(`document.querySelector('${frame} img').getBoundingClientRect().top`);
    await wheel(12);
    assert.equal(await scale(),magnification);
    assert.ok(await b.evaluate(`document.querySelector('${frame} img').getBoundingClientRect().top`) < top);
    // Accelerated samples in the same scrolling stream also remain panning.
    await wheel(120);
    assert.equal(await scale(),magnification);
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseWheel",...await point(),deltaX:0,deltaY:160,modifiers:2});
    await settle();
    assert.equal(await scale(),1);
    await b.cdp("Input.dispatchMouseEvent", {type:"mouseWheel",...await point(),deltaX:0,deltaY:40,modifiers:2});
    await settle();
    assert.equal(await scale(),1);
    assert.equal(await b.evaluate('visualViewport.scale'),before.pageZoom);
  });

  await t.test("resize, navigation and language changes dispose old views and reset state", async () => {
    await wheel(-160);
    await b.viewport(1280,800);
    await b.waitFor(`document.querySelector('${frame}').dataset.scale === '1'`);
    for (let i=0; i<4; i++) {
      await b.evaluate(`window.oldImageFrame=document.querySelector('${frame}'); window.oldId=document.getElementById('item').dataset.qid; document.getElementById('next').click()`);
      await b.waitFor('document.getElementById("item").dataset.qid !== oldId && document.querySelector(".q-question").textContent.length > 20');
      assert.equal(await b.evaluate('oldImageFrame ? imageViews.has(oldImageFrame) : false'), false);
      if (await b.evaluate('!!document.querySelector(".image-viewport")')) {
        await b.waitFor('document.querySelector(".image-viewport img").naturalWidth > 0');
        assert.equal(await scale(), 1);
      }
    }
    await wheel(-100);
    await b.evaluate('window.oldImageFrame=document.querySelector(".image-viewport"); document.getElementById("lang-switch").click()');
    await b.waitFor('!oldImageFrame.isConnected && document.querySelector(".image-viewport")?.dataset.scale === "1"');
    assert.equal(await b.evaluate('imageViews.has(oldImageFrame)'), false);
  });

  await t.test("two-finger pinch anchors its midpoint, hands off to one-finger pan, and avoids page zoom", async (t) => {
    await b.close();
    b = await startBrowser();
    await open();
    await b.viewport(390,844);
    await settle();
    await b.evaluate(`document.querySelector('${frame}').scrollIntoView({block:'center'})`);
    await b.cdp("Emulation.setTouchEmulationEnabled", {enabled:true,maxTouchPoints:5});
    t.after(async () => { if (await b.evaluate('!!imageTouchGesture')) await b.cdp("Input.dispatchTouchEvent", {type:"touchCancel",touchPoints:[]}); });
    const center = await point();
    const contacts = (half, dx=0, dy=0) => [
      {x:center.x-half+dx,y:center.y+dy,id:0},
      {x:center.x+half+dx,y:center.y+dy,id:1},
    ];
    const before = await b.evaluate(`(() => {const r=document.querySelector('${frame} img').getBoundingClientRect();return {u:(${center.x}-r.left)/r.width,v:(${center.y}-r.top)/r.height,scroll:document.querySelector('.question-panel').scrollTop,page:scrollY,pageZoom:visualViewport.scale};})()`);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:contacts(18)});
    for (const half of [24,36,54]) await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:contacts(half,12,8)});
    await settle();
    assert.ok(Math.abs(await scale() - 3) < .02);
    const after = await b.evaluate(`(() => {const r=document.querySelector('${frame} img').getBoundingClientRect();return {u:(${center.x+12}-r.left)/r.width,v:(${center.y+8}-r.top)/r.height,scroll:document.querySelector('.question-panel').scrollTop,page:scrollY,pageZoom:visualViewport.scale};})()`);
    assert.ok(Math.abs(before.u-after.u) < .002 && Math.abs(before.v-after.v) < .002);
    assert.equal(after.scroll,before.scroll);
    assert.equal(after.page,before.page);
    assert.equal(after.pageZoom,before.pageZoom);
    await snapshot("images-touch-pinch.png");
    const remaining = contacts(54,12,8).slice(0,1);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchEnd",touchPoints:contacts(54,12,8).slice(1)});
    assert.equal(await b.evaluate('imageTouchGesture?.mode'), "pan");
    const left = await b.evaluate(`document.querySelector('${frame} img').getBoundingClientRect().left`);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:[{...remaining[0],x:remaining[0].x+25}]});
    assert.ok(await b.evaluate(`document.querySelector('${frame} img').getBoundingClientRect().left`) > left);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchEnd",touchPoints:[]});
    assert.equal(await b.evaluate('imageTouchGesture'), null);
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'), true);
    await fit();
  });

  await t.test("pinch clamps to 1–12x and cancellation or navigation clears touch state", async (t) => {
    await b.close();
    b = await startBrowser();
    await open();
    await b.cdp("Emulation.setTouchEmulationEnabled", {enabled:true,maxTouchPoints:5});
    t.after(async () => { if (await b.evaluate('!!imageTouchGesture')) await b.cdp("Input.dispatchTouchEvent", {type:"touchCancel",touchPoints:[]}); });
    const center = await point();
    const contacts = (half) => [{x:center.x-half,y:center.y,id:0},{x:center.x+half,y:center.y,id:1}];
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:contacts(18)});
    await b.waitFor('imageTouchGesture?.mode === "pinch"');
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:contacts(240)});
    assert.equal(await scale(),12);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:contacts(220)});
    assert.ok(await scale()<12, "reversing at maximum responds immediately");
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:contacts(2)});
    assert.equal(await scale(),1);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:contacts(3)});
    assert.ok(await scale()>1, "reversing at minimum responds immediately");
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:contacts(54)});
    assert.ok(await scale()>1);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchCancel",touchPoints:[]});
    assert.equal(await b.evaluate('imageTouchGesture'),null);
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'),true);
    await fit();
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:contacts(18)});
    await b.evaluate('document.getElementById("next").click()');
    await b.waitFor('document.getElementById("item").dataset.qid === "R051"');
    assert.equal(await b.evaluate('imageTouchGesture'),null);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchEnd",touchPoints:[]});
  });

  await t.test("a moving first finger can become a pinch, and a fitted tap still opens the image", async (t) => {
    await b.close();
    b = await startBrowser();
    await open();
    await b.viewport(390,844);
    await settle();
    await b.evaluate(`document.querySelector('${frame}').scrollIntoView({block:'center'})`);
    await b.cdp("Emulation.setTouchEmulationEnabled", {enabled:true,maxTouchPoints:5});
    t.after(async () => { if (await b.evaluate('!!imageTouchGesture')) await b.cdp("Input.dispatchTouchEvent", {type:"touchCancel",touchPoints:[]}); });
    const center = await point();
    const before = await b.evaluate('scrollY');
    const first = {x:center.x-25,y:center.y,id:0};
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:[first]});
    const moved = {...first,y:first.y-24};
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:[moved]});
    assert.ok(await b.evaluate('scrollY')>before);
    const second = {x:center.x+25,y:moved.y,id:1};
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:[moved,second]});
    await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:[{...moved,x:center.x-50},{...second,x:center.x+50}]});
    assert.ok(Math.abs(await scale()-2)<.02);
    await b.cdp("Input.dispatchTouchEvent", {type:"touchEnd",touchPoints:[]});
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'),true);
    await fit();
    const tap = {...await point(),id:2};
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:[tap]});
    await b.cdp("Input.dispatchTouchEvent", {type:"touchEnd",touchPoints:[]});
    assert.equal(await b.evaluate('document.getElementById("zoom").hidden'),false);
    await b.evaluate('document.getElementById("zoom").click()');
  });

  await t.test("Browse, reference images, SVG steps and Markdown images share the viewer", async () => {
    await open("/browse?scope=razavi&id=R013&view=focus&lang=zh");
    for (let i=0;i<3;i++) await wheel(-120);
    await snapshot("images-circuit-zoom.png");
    await fit();
    await b.evaluate('document.querySelector("[data-solution-tab=detailed]").click()');
    const diagram = ".q-steps .image-viewport";
    await b.waitFor(`document.querySelector('${diagram} img')?.naturalWidth > 0`);
    await b.evaluate(`document.querySelector('${diagram}').scrollIntoView({block:'center'})`);
    await wheel(-120, diagram);
    assert.ok(await scale(diagram) > 1);
    await fit(diagram);
    await b.evaluate(`(() => {
      document.querySelector('[data-solution-tab=answer]').click();
      const box=document.querySelector('.q-answer');
      box.insertAdjacentHTML('beforeend',renderMarkdown('![Local Markdown image]('+document.querySelector('.question-panel img').src+')'));
      const q=state.cards[state.index];
      document.querySelector('[data-solution-content=answer] .pics').innerHTML=picture(q,q.figs[0],'Reference figure fixture');
      prepareImageViews(document.getElementById('item'));
    })()`);
    const answer = ".q-answer .image-viewport";
    await b.waitFor(`document.querySelector('${answer} img')?.naturalWidth > 0`);
    await b.evaluate(`document.querySelector('${answer}').scrollIntoView({block:'center'})`);
    await wheel(-100, answer);
    assert.ok(await scale(answer) > 1);
    await fit(answer);
    const reference = '[data-solution-content="answer"] .pics .image-viewport';
    await b.waitFor(`document.querySelector('${reference} img')?.naturalWidth > 0`);
    await b.evaluate(`document.querySelector('${reference}').scrollIntoView({block:'center'})`);
    await wheel(-100, reference);
    assert.ok(await scale(reference) > 1);
    await open("/browse?scope=razavi&id=R050&lang=en&view=list", "#card-R050 .image-viewport");
    // The feed may prepend earlier cards as we scroll. Target this card,
    // rather than whichever image happens to be first in the document.
    const feedFrame = "#card-R050 .image-viewport";
    await b.evaluate(`document.querySelector('${feedFrame}').scrollIntoView({block:'center'})`);
    await wheel(-100, feedFrame);
    assert.ok(await scale(feedFrame) > 1);
    await fit(feedFrame);
    await b.viewport(390,844);
    await settle();
    assert.equal(await scale(feedFrame), 1);
    assert.ok(await b.evaluate('document.documentElement.scrollWidth <= innerWidth'));
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".image-viewport")).touchAction'), "none");
    await b.evaluate(`document.querySelector('${feedFrame}').scrollIntoView({block:'center'})`);
    await b.cdp("Emulation.setTouchEmulationEnabled", {enabled:true,maxTouchPoints:5});
    const touch = await point(feedFrame);
    const beforeScroll = await b.evaluate('scrollY');
    await b.cdp("Input.dispatchTouchEvent", {type:"touchStart",touchPoints:[{...touch,id:0}]});
    for (let i=1;i<=4;i++) await b.cdp("Input.dispatchTouchEvent", {type:"touchMove",touchPoints:[{x:touch.x,y:touch.y-i*25,id:0}]});
    await b.cdp("Input.dispatchTouchEvent", {type:"touchEnd",touchPoints:[]});
    await b.waitFor(`scrollY > ${beforeScroll}`);
    assert.equal(await scale(feedFrame), 1);
    assert.equal(await b.evaluate('imageGesture'), null);
    await snapshot("images-mobile.png");
    assert.deepEqual(b.errors, []);
  });
});
