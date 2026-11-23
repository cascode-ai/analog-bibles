import assert from 'node:assert/strict';
import { test } from 'node:test';
import { startBrowser } from './test-browser.mjs';

test('responsive reading context, navigation and bookmarks', { timeout: 120000 }, async t => {
  const b = await startBrowser();
  t.after(() => b.close());
  const click = selector => b.evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  const ready = () => b.waitFor('activeReader?.ready && activeReader.panel.isConnected');
  await b.viewport(1024, 768);
  await b.open('/browse?scope=razavi&id=R006&lang=zh');
  await ready();
  await t.test('medium screens retain a usable split and accessible directory', async () => {
    const m = await b.evaluate('({side:getComputedStyle(document.querySelector(".sidebar-shell")).display,left:document.querySelector(".question-panel").clientWidth,right:document.querySelector(".solution-panel").clientWidth,overflow:document.documentElement.scrollWidth>innerWidth})');
    assert.equal(m.side, 'none');
    assert.ok(m.left > 340 && m.right > 500);
    assert.equal(m.overflow, false);
    await click('#navigation-trigger');
    assert.equal(await b.evaluate('document.getElementById("navigation-dialog").open'), true);
    await click('#navigation-done');
    await b.viewport(1440, 960);
    assert.notEqual(await b.evaluate('getComputedStyle(document.querySelector(".sidebar-shell")).display'), 'none');
  });
  await t.test('mobile question peek retains the actual image, reading position and focus', async () => {
    await b.viewport(390, 844);
    await b.waitFor('[...document.querySelectorAll(".question-panel img")].every(i=>i.complete&&i.naturalWidth)');
    await b.evaluate('window.originalQuestion=document.querySelector(".question-panel");document.querySelector(".solution-panel").scrollIntoView();window.scrollBy(0,250);window.answerPosition=scrollY');
    await b.waitFor('!document.querySelector(".reader-context").hidden');
    await click('.reader-context button');
    assert.equal(await b.evaluate('document.querySelector(".question-peek .question-panel")===originalQuestion'), true);
    assert.equal(await b.evaluate('document.querySelectorAll(".question-panel").length'), 1);
    await click('.question-peek .pic');
    assert.equal(await b.evaluate('!document.getElementById("zoom").hidden && document.querySelector(".question-peek").contains(document.getElementById("zoom"))'), true);
    await b.cdp('Input.dispatchKeyEvent', { type:'keyDown', key:'Escape', code:'Escape' });
    assert.equal(await b.evaluate('document.querySelector(".question-peek").open && document.getElementById("zoom").hidden'), true);
    await b.cdp('Input.dispatchKeyEvent', { type:'keyDown', key:'Escape', code:'Escape' });
    await b.waitFor('!document.querySelector(".question-peek").open');
    assert.equal(await b.evaluate('document.querySelector(".cols > .question-panel")===originalQuestion'), true);
    assert.ok(await b.evaluate('Math.abs(scrollY-answerPosition)<2'));
    assert.equal(await b.evaluate('document.activeElement.matches(".reader-context button")'), true);
  });
  await t.test('step jump and question navigation restore the selected answer and place', async () => {
    await b.open('/browse?scope=razavi&id=R005&lang=zh');
    await ready();
    await click('[data-solution-tab=detailed]');
    await b.evaluate('const s=document.querySelector(".step-jump");s.value="2";s.dispatchEvent(new Event("change"))');
    await b.waitFor('document.querySelector(".solution-tools").dataset.currentStep==="3"');
    await b.evaluate('window.savedPosition=scrollY');
    await click('#next');
    await b.waitFor('activeReader?.ready&&activeReader.card.dataset.qid==="R006"');
    await click('#prev');
    await b.waitFor('activeReader?.ready&&activeReader.card.dataset.qid==="R005"');
    assert.equal(await b.evaluate('document.querySelector("[aria-selected=true]").dataset.solutionTab'), 'detailed');
    assert.ok(await b.evaluate('Math.abs(scrollY-savedPosition)<2'));
    await b.cdp('Page.reload');
    await b.waitFor('activeReader?.ready');
    assert.equal(await b.evaluate('document.querySelector("[aria-selected=true]").dataset.solutionTab'), 'detailed');
    assert.ok(await b.evaluate('scrollY>500'));
  });
  await t.test('wide formulas accept keyboard scrolling without changing the question', async () => {
    await b.open('/browse?scope=razavi&id=R001&lang=en');
    await ready();
    await b.evaluate('document.querySelector(".solution-panel").scrollIntoView()');
    await b.waitFor('document.querySelector("[data-reader-overflow]")');
    await b.evaluate('document.querySelector("[data-reader-overflow]").focus()');
    for (let i=0;i<5;i++) await b.cdp('Input.dispatchKeyEvent', {type:'keyDown',key:'ArrowRight',code:'ArrowRight'});
    await b.waitFor('document.querySelector("[data-reader-overflow]").scrollLeft>0');
    assert.equal(await b.evaluate('state.cards[state.index].id'), 'R001');
  });
  await t.test('sticky answer navigation masks scrolling content in both themes', async () => {
    for (const theme of ['light', 'dark']) for (const width of [390, 1440]) {
      await b.viewport(width, 900);
      await b.open('/browse?id=R001&lang=zh');
      await b.evaluate(`localStorage.setItem('ab.theme', '${theme}');applyTheme()`);
      await click('[data-solution-tab=detailed]');
      await b.evaluate(`(() => {
        const panel = document.querySelector('.solution-panel');
        if (getComputedStyle(panel).overflowY === 'auto') panel.scrollTop = 350;
        else document.querySelector('[data-step-number="2"]').scrollIntoView();
      })()`);
      await b.evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
      const chrome = await b.evaluate(`(() => {
        const tabs = document.querySelector('.solution-tabs');
        const tools = document.querySelector('.solution-tools');
        return {
          colors: [tabs, tools].map(el => getComputedStyle(el).backgroundColor),
          tabsBottom: tabs.getBoundingClientRect().bottom,
          toolsTop: tools.getBoundingClientRect().top,
          overflow: document.documentElement.scrollWidth > innerWidth
        };
      })()`);
      for (const color of chrome.colors) {
        assert.match(color, /^rgb\(/, `${width}/${theme}: sticky surface must be opaque`);
      }
      assert.ok(chrome.toolsTop >= chrome.tabsBottom - 1, `${width}/${theme}: sticky controls overlap`);
      assert.equal(chrome.overflow, false);
    }
    await b.evaluate('localStorage.removeItem("ab.theme");applyTheme()');
  });
  await t.test('pane preference survives navigation and dark mobile surfaces remain bounded', async () => {
    await b.viewport(1440,960);
    await b.evaluate('sessionStorage.removeItem("ab.reader.positions")');
    await b.evaluate('resizePanes(document.querySelector(".pane-resizer"),48)');
    await click('#next');
    await b.waitFor('activeReader?.ready&&activeReader.card.dataset.qid==="R002"');
    assert.equal(await b.evaluate('document.querySelector(".pane-resizer").getAttribute("aria-valuenow")'), '48');
    await b.cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'dark'}]});
    await b.viewport(320,740);
    await b.evaluate('document.querySelector(".solution-panel").scrollIntoView()');
    await b.waitFor('!document.querySelector(".reader-context").hidden');
    assert.equal(await b.evaluate('document.documentElement.scrollWidth>innerWidth'), false);
    await click('.reader-context button');
    const peekSurface = await b.evaluate(`(() => {
      const peek = document.querySelector('.question-peek');
      const probe = document.createElement('span');
      probe.style.backgroundColor = 'var(--surface-raised)';
      peek.append(probe);
      const expected = getComputedStyle(probe).backgroundColor;
      probe.remove();
      return { actual: getComputedStyle(peek).backgroundColor, expected };
    })()`);
    assert.equal(peekSurface.actual, peekSurface.expected);
    assert.notEqual(peekSurface.actual, 'rgba(0, 0, 0, 0)');
    await click('.question-peek button');
    assert.deepEqual(b.errors, []);
  });
  await t.test('explicit focus keeps the answer state and provides a desktop directory', async () => {
    await b.viewport(1440, 960);
    await b.open('/browse?id=R377&lang=zh');
    await ready();
    await click('[data-solution-tab=detailed]');
    await b.evaluate('document.querySelector(".solution-panel").scrollTop=240');
    const before = await b.evaluate('document.querySelector(".solution-panel").scrollTop');
    await click('#reader-focus');
    await b.evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');
    assert.equal(await b.evaluate('document.body.classList.contains("distraction-free")'), true);
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".top")).display'), 'none');
    assert.equal(await b.evaluate('document.querySelector(".solution-panel").scrollTop'), before);
    await click('#navigation-trigger');
    assert.equal(await b.evaluate('document.getElementById("navigation-dialog").open'), true);
    await click('#navigation-done');
    await b.evaluate('document.getElementById("goto").focus()');
    await b.cdp('Input.dispatchKeyEvent', {type:'keyDown',key:'f',code:'KeyF'});
    assert.equal(await b.evaluate('state.distractionFree'), true, 'typing must not toggle focus');
    await b.evaluate('document.activeElement.blur()');
    await b.cdp('Input.dispatchKeyEvent', {type:'keyDown',key:'f',code:'KeyF'});
    assert.equal(await b.evaluate('state.distractionFree'), false);
    assert.equal(await b.evaluate('document.querySelector("[aria-selected=true]").dataset.solutionTab'), 'detailed');
    await b.viewport(320, 740);
    await click('#reader-focus');
    assert.equal(await b.evaluate('document.documentElement.scrollWidth>innerWidth'), false);
    assert.ok(await b.evaluate('document.getElementById("reader-focus").getBoundingClientRect().bottom>0'));
    await click('#reader-focus');
  });
  await t.test('image arrival settles and honors reduced motion', async () => {
    await b.viewport(1440, 900);
    await b.cdp('Emulation.setEmulatedMedia', {features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
    await b.open('/browse?id=R015&lang=zh');
    await b.waitFor('document.querySelector(".question-panel img")?.naturalWidth>0');
    await click('.question-panel .pic');
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector("#zoom img")).animationName'), 'zoom-arrive');
    await b.evaluate('Promise.all(document.querySelector("#zoom img").getAnimations().map(a=>a.finished))');
    assert.equal(await b.evaluate('Math.round(new DOMMatrix(getComputedStyle(document.querySelector("#zoom img")).transform).a*1000)'), 1000);
    await b.cdp('Input.dispatchKeyEvent', {type:'keyDown',key:'Escape',code:'Escape'});
    await b.cdp('Emulation.setEmulatedMedia', {features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    await click('.question-panel .pic');
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector("#zoom img")).animationName'), 'none');
    await b.cdp('Input.dispatchKeyEvent', {type:'keyDown',key:'Escape',code:'Escape'});
    await b.cdp('Emulation.setEmulatedMedia', {features:[]});
    assert.deepEqual(b.errors, []);
  });
});
