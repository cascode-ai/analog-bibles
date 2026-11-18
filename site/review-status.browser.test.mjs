import assert from "node:assert/strict";
import { test } from "node:test";
import { startBrowser } from "./test-browser.mjs";

test("review label in Browse, Review and focused reading, both languages and narrow layouts", { timeout: 120000 }, async (t) => {
  const b = await startBrowser();
  t.after(() => b.close());
  for (const [url, width, label] of [
    ["/browse?scope=razavi&id=R050&view=focus&lang=zh", 1440, "未审核"],
    ["/review?scope=razavi&id=R050&lang=en", 390, "Unreviewed"],
    ["/browse?scope=razavi&id=R050&lang=zh&view=list", 320, "未审核"],
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
