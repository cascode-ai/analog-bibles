import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { startBrowser } from './test-browser.mjs';

test('R001–R005 actual bilingual answers and plots', { timeout: 300000 }, async t => {
  const b = await startBrowser();
  t.after(() => b.close());
  const screenshots = process.env.AB_SCREENSHOTS_DIR;
  if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
  const click = selector => b.evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  for (const mode of ['browse', 'focus', 'review']) {
    for (const width of [1440, 390, 320]) {
      for (const id of Array.from({length:5}, (_, i) => `R${String(i+1).padStart(3,'0')}`)) {
        await t.test(`${id} ${mode} ${width}px, English → Chinese`, async () => {
          await b.viewport(width, 960);
          const route = mode === 'review' ? 'review' : 'browse';
          await b.open(`/${route}?scope=razavi&id=${id}&lang=en&view=${mode === 'browse' ? 'list' : 'focus'}`);
          // List view renders more than one card. Scope to the selected question.
          const card = `[data-qid="${id}"]`;
          for (const language of ['en', 'zh']) {
            if (language === 'zh') {
              await click('#lang-switch');
              await b.waitFor(`document.querySelector('${card} .q-steps')?.lang === 'zh'`);
            }
            const prefix = `${card} `;
            await click(prefix + '[data-solution-tab="answer"]');
            const image = id === 'R002' ? null : prefix + '.q-answer img';
            if (image) {
              await b.waitFor(`document.querySelector('${image}')?.naturalWidth > 0`);
              assert.ok(await b.evaluate(`document.querySelector('${image}').src.endsWith('solution-curves${language === 'zh' ? '.zh' : ''}.svg')`));
            }
            await click(prefix + '[data-solution-tab="detailed"]');
            const detailImage = prefix + '.q-steps img';
            // The existing circuit diagram is lazy-loaded; on narrow screens
            // it can sit well below the viewport after the full derivation.
            await b.evaluate(`document.querySelector('${detailImage}').scrollIntoView({block:'center'})`);
            await b.waitFor(`document.querySelector('${detailImage}')?.naturalWidth > 0`);
            assert.equal(await b.evaluate(`document.querySelector('${card}').querySelectorAll('.katex-error').length`), 0);
            assert.equal(await b.evaluate(`document.querySelector('${card} .q-steps').textContent.includes('**')`), false);
            assert.ok(await b.evaluate(`document.querySelector('${card} .q-steps').querySelectorAll('.katex-display').length >= 2`));
            const fold = prefix + '.q-steps details:last-of-type';
            await click(fold + ' > summary');
            assert.equal(await b.evaluate(`document.querySelector('${fold}').open`), false);
            await click(fold + ' > summary');
            await b.evaluate(`document.querySelector('${detailImage}').scrollIntoView({block:'center'})`);
            await b.waitFor(`document.querySelector('${detailImage}').getBoundingClientRect().width > 0`);
            assert.ok(await b.evaluate(`(() => {const r=document.querySelector('${detailImage}').getBoundingClientRect(); const p=document.querySelector('${card} .solution-panel').getBoundingClientRect(); return r.width<=p.width+1;})()`));
            assert.ok(await b.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'));
            // Exercise the actual SVG through the existing pointer zoom handler.
            if (width === 1440 && mode === 'focus') {
              const point = await b.evaluate(`(() => {const r=document.querySelector('${detailImage}').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};})()`);
              await b.cdp('Input.dispatchMouseEvent', { type:'mouseWheel', ...point, deltaX:0, deltaY:-120 });
              await b.waitFor(`Number(document.querySelector('${detailImage}').closest('.image-viewport').dataset.scale)>1`);
              await click(prefix + '.q-steps [data-image-fit]');
              assert.equal(await b.evaluate(`Number(document.querySelector('${detailImage}').closest('.image-viewport').dataset.scale)`), 1);
              if (screenshots) await b.screenshot(path.join(screenshots, `${id}-${language}-reading.png`));
            }
            await click(prefix + '[data-solution-tab="answer"]');
            if (image) assert.ok(await b.evaluate(`document.querySelector('${image}').getBoundingClientRect().width > 0`));
            await click(prefix + '[data-solution-tab="grading"]');
            assert.ok(await b.evaluate(`document.querySelector('${card} .grading .md').textContent.includes('+2:')`));
            assert.equal(await b.evaluate(`document.querySelector('${card} .grading .md').querySelectorAll('.katex-error').length`), 0);
            assert.equal(await b.evaluate(`document.querySelector('${card} .q-answer').textContent.includes('+2:')`), false);
            assert.ok(await b.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'));
          }
        });
      }
    }
  }
  if (screenshots) {
    const origin = await b.evaluate('location.origin');
    await b.viewport(820, 640);
    for (const id of ['R001', 'R003', 'R004', 'R005']) for (const suffix of ['', '.zh']) {
      await b.cdp('Page.navigate', {url:`${origin}/q/${id}/solution-curves${suffix}.svg`});
      await b.waitFor('document.documentElement.nodeName === "svg"');
      await b.viewport(920, Number(await b.evaluate('document.documentElement.getAttribute("height")')) + 20);
      await b.screenshot(path.join(screenshots, `${id}${suffix}-plot.png`));
    }
  }
  assert.deepEqual(b.errors, []);
});
