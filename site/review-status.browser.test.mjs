import assert from "node:assert/strict";
import { test } from "node:test";
import { startBrowser } from "./test-browser.mjs";

test("review label in Browse, Review and focused reading, both languages and narrow layouts", { timeout: 120000 }, async (t) => {
  const b = await startBrowser();
  t.after(() => b.close());
  for (const [url, width, label] of [
    ["/browse?scope=razavi&id=R377&view=focus&lang=zh", 1440, "未审核"],
    ["/review?scope=razavi&id=R377&lang=en", 390, "Unreviewed"],
    ["/browse?scope=razavi&id=R377&lang=zh&view=list", 320, "未审核"],
  ]) {
    await b.viewport(width, 960);
    await b.open(url);
    assert.equal(await b.evaluate('document.querySelector(".review-status").textContent'), label);
    assert.equal(await b.evaluate('document.querySelector(".review-status").parentElement.matches(".head")'), true);
    assert.equal(await b.evaluate('document.querySelector(".solution-tabs .review-status")'), null);
    for (const key of ["answer", "detailed", "grading"]) {
      await b.evaluate(`document.querySelector('[data-solution-tab="${key}"]').click()`);
      assert.equal(await b.evaluate('document.querySelector(".head .review-status").getClientRects().length > 0'), true);
    }
    assert.equal(await b.evaluate('document.querySelectorAll(".ai-note").length'), 0);
    assert.equal(await b.evaluate('document.documentElement.scrollWidth <= innerWidth'), true);
  }
  // The whole-question header is independent of detailed solution availability.
  for (const status of [undefined, "UNREVIEWED", "IN_REVIEW", "NEEDS_REVISION", "APPROVED"]) {
    for (const sol of [0, 1]) {
      const count = await b.evaluate(`(() => {
        const q = {...state.all[0], sol: ${sol}, reviewStatus: ${JSON.stringify(status) ?? "undefined"}};
        const el = document.createElement('div'); el.innerHTML = cardHead(q) + cardBody(q);
        return el.querySelectorAll('.head .review-status').length;
      })()`);
      assert.equal(count, status === "APPROVED" ? 0 : 1);
    }
  }
  assert.deepEqual(b.errors, []);
});

test("approved questions prefill a GitHub Issue from the selected card and answer", { timeout: 120000 }, async t => {
  const b = await startBrowser();
  t.after(() => b.close());
  await b.viewport(390, 844);
  await b.open("/browse?scope=razavi&id=R002&view=focus&lang=zh");
  const card = 'document.querySelector("[data-qid=R002]")';
  await b.waitFor(`${card}?.querySelector('.feedback-open:enabled')`);
  await b.evaluate(`${card}.querySelector('[data-solution-tab="grading"]').click(); ${card}.querySelector('.feedback-open').click()`);
  assert.equal(await b.evaluate('document.activeElement.id'), "feedback-note");
  assert.equal(await b.evaluate('$("feedback-continue").disabled'), true);
  assert.match(await b.evaluate('$("feedback-context").textContent'), /R002.*zh$/);
  const note = "第二行的 A&B + C？\n#2";
  await b.evaluate(`feedbackNote.value = ${JSON.stringify(note)}; feedbackNote.dispatchEvent(new Event("input")); $("feedback-close").click(); ${card}.querySelector('.feedback-open').click();`);
  assert.equal(await b.evaluate("feedbackNote.value"), note);
  assert.equal(await b.evaluate('$("feedback-form").action'), "https://github.com/cascode-ai/analog-bibles/issues/new");
  assert.equal(await b.evaluate('$("feedback-form").target'), "_blank");
  // Exercise native GET encoding against a local frame, without contacting GitHub.
  const fields = await b.evaluate(`new Promise(resolve => {
    const frame = document.createElement("iframe");
    frame.name = "issue-preview";
    frame.hidden = true;
    document.body.append(frame);
    frame.onload = () => {
      const url = new URL(frame.contentWindow.location.href);
      if (url.searchParams.has("body")) resolve(Object.fromEntries(url.searchParams));
    };
    const form = $("feedback-form");
    form.rel = "";
    form.target = frame.name;
    form.action = "/privacy.html";
    $("feedback-continue").click();
  })`);
  assert.match(fields.title, /R002/);
  const q = await b.evaluate('state.all.find(q => q.id === "R002")');
  assert.ok(fields.body.includes(q.ex));
  assert.ok(fields.body.includes(q.v));
  assert.ok(fields.body.includes("scope=razavi&id=R002&lang=zh"));
  assert.ok(fields.body.replaceAll("\r\n", "\n").endsWith(note));
  await b.viewport(1440, 960);
  await b.open("/browse?id=R377&lang=en");
  assert.equal(await b.evaluate('document.querySelector("[data-qid=R377] .feedback-open")'), null);
  await b.open("/browse?id=R001&lang=en");
  assert.equal(await b.evaluate('document.querySelector(".feedback-open").textContent'), "Report a problem");
  assert.deepEqual(b.errors, []);
});
