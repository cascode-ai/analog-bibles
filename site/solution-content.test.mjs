import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { test } from 'node:test';
import { startBrowser } from './test-browser.mjs';

function solutionSplitter() {
  const source = fs.readFileSync(new URL('./public/app.js', import.meta.url), 'utf8');
  const functionText = source.match(/function splitSolution\(text\) \{[\s\S]*?\n\}/)?.[0];
  assert.ok(functionText, 'the production section splitter exists');
  return vm.runInNewContext(`(${functionText})`);
}

test('solution sections split English and Chinese grading with LF and CRLF', () => {
  const split = solutionSplitter();
  for (const newline of ['\n', '\r\n']) {
    for (const heading of ['Grading notes', '评分说明']) {
      const input = ['# Golden Solution', '', '## Reference answer', '', 'Answer body.', '', `## ${heading}`, '', '+2: grading only.'].join(newline);
      const result = split(input);
      assert.equal(result.body.trim(), 'Answer body.');
      assert.equal(result.grading.trim(), '+2: grading only.');
    }
  }
  const noNotes = split('Answer mentions 评分说明 inline but has no grading section.');
  assert.equal(noNotes.grading, '');
  assert.match(noNotes.body, /评分说明 inline/);
  assert.equal(split('Answer\n\n## 评分说明').body.trim(), 'Answer');
  assert.equal(split('Answer\n\n## 评分说明').grading, '');
});

test('R001–R060 expose separate Chinese grading sections', () => {
  const split = solutionSplitter();
  for (let n = 1; n <= 60; n++) {
    const id = `R${String(n).padStart(3, '0')}`;
    const text = fs.readFileSync(new URL(`../razavi/${id}/golden_solution.zh.md`, import.meta.url), 'utf8');
    const result = split(text);
    assert.doesNotMatch(result.body, /^##\s*评分说明\s*$/m, `${id} grading heading leaked into answer`);
    assert.doesNotMatch(result.body, /(?:\+2\s*[:：]|满分\s*[:：])/u, `${id} grading criteria leaked into answer`);
    assert.match(result.grading, /[\p{Script=Han}]/u, `${id} has no Chinese grading notes`);
  }
});

test('localized answers and grading notes use the same language', { timeout: 180000 }, async t => {
  const b = await startBrowser();
  t.after(() => b.close());
  for (const width of [1440, 390]) for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 22, 26, 54]) {
    const id = `R${String(n).padStart(3, '0')}`;
    await t.test(`${id} Chinese -> English, ${width}px`, async () => {
      await b.viewport(width, 960);
      await b.open(`/browse?scope=razavi&id=${id}&view=focus&lang=zh`);
      const card = `[data-qid="${id}"]`;
      const verify = async language => {
        await b.waitFor(`document.querySelector('${card} .q-answer')?.lang === '${language}'`);
        const answer = await b.evaluate(`document.querySelector('${card} .q-answer').textContent`);
        assert.doesNotMatch(answer, /(?:评分说明|Grading notes|\+2\s*[:：]|满分\s*[:：])/u);
        await b.evaluate(`document.querySelector('${card} [data-solution-tab="grading"]').click()`);
        assert.equal(await b.evaluate(`document.querySelector('${card} .grading .md').lang`), language);
        const source = fs.readFileSync(new URL(`../razavi/${id}/golden_solution${language === 'zh' ? '.zh' : ''}.md`, import.meta.url), 'utf8');
        const heading = language === 'zh' ? '## 评分说明' : '## Grading notes';
        const grading = source.slice(source.indexOf(heading) + heading.length).trim();
        const matchesSource = await b.evaluate(`(() => {
          const expected = document.createElement('div');
          expected.innerHTML = renderMarkdown(${JSON.stringify(grading)});
          const normalize = value => value.replace(/\\s+/g, ' ').trim();
          return normalize(expected.textContent) === normalize(document.querySelector('${card} .grading .md').textContent);
        })()`);
        assert.equal(matchesSource, true, `${id} localized grading text changed`);
        assert.equal(await b.evaluate(`document.querySelector('${card}').querySelectorAll('.katex-error').length`), 0);
        assert.ok(await b.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'));
        await b.evaluate(`document.querySelector('${card} [data-solution-tab="answer"]').click()`);
      };
      await verify('zh');
      if (n === 1) {
        await b.evaluate(`document.querySelector('${card} .orig-toggle').click()`);
        await verify('en');
        await b.evaluate(`document.querySelector('${card} .orig-toggle').click()`);
        await verify('zh');
      }
      await b.evaluate('document.getElementById("lang-switch").click()');
      await verify('en');
    });
  }
  await b.open('/browse?scope=razavi&id=R377&view=focus&lang=zh');
  await b.waitFor(`document.querySelector('.q-answer')?.lang === 'zh'`);
  assert.equal(await b.evaluate(`document.querySelector('[data-solution-tab="grading"]').textContent.trim()`), '评分说明（英文）');
  assert.equal(await b.evaluate(`document.querySelector('.grading .md').lang`), 'en');
  for (const [route, view] of [['browse', 'list'], ['review', 'focus']]) {
    await b.open(`/${route}?scope=razavi&id=R001&view=${view}&lang=zh`);
    const text = await b.evaluate('document.querySelector(\'[data-qid="R001"] .q-answer\').textContent');
    assert.doesNotMatch(text, /(?:评分说明|\+2\s*[:：])/u);
  }
  assert.deepEqual(b.errors, []);
});

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
            assert.match(await b.evaluate(`document.querySelector('${card} .grading .md').textContent`), /(?:\+2\s*[:：]|满分\s*[:：])/u);
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
