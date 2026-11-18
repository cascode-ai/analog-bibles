import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { evaluateReview, hashQuestion, scanReviews, REVIEW_SCOPE } from "./review-status.mjs";

const files = ["instruction.md", "golden_solution.md", "detailed_solution.md", "instruction.zh.md", "figure-1.png"];
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "analog-review-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const book of ["razavi", "gray", "allen"]) fs.mkdirSync(path.join(root, book));
  const dir = path.join(root, "razavi", "R001");
  fs.mkdirSync(dir);
  for (const file of files) fs.writeFileSync(path.join(dir, file), `Original ${file}\n`);
  fs.writeFileSync(path.join(root, "difficulty.json"), JSON.stringify({ razavi: { easy: ["R001"] }, gray: {}, allen: {} }));
  fs.writeFileSync(path.join(root, "exercises.json"), JSON.stringify({ R001: { ch: 1 } }));
  const hashes = hashQuestion(dir);
  const approved = { status: "APPROVED", scope: REVIEW_SCOPE, hashes,
    humanApproval: { kind: "human", decision: "APPROVED", reviewer: "test-human", approvedAt: "2026-11-19T00:00:00Z" } };
  const write = (records) => fs.writeFileSync(path.join(root, "review-status.json"), JSON.stringify({ schemaVersion: 1, records }));
  return { root, dir, hashes, approved, write };
}

test("missing review and Gemini PASS remain unreviewed; explicit human approval is required", (t) => {
  const { hashes, approved } = fixture(t);
  assert.equal(evaluateReview(undefined, hashes).status, "UNREVIEWED");
  assert.equal(evaluateReview({ status: "UNREVIEWED", aiReview: { provider: "Gemini", result: "PASS" } }, hashes).status, "UNREVIEWED");
  assert.equal(evaluateReview({ ...approved, humanApproval: undefined, aiReview: { result: "PASS" } }, hashes).status, "UNREVIEWED");
  assert.equal(evaluateReview(approved, hashes).status, "APPROVED");
});

for (const file of files) test(`changing ${file} invalidates human approval`, (t) => {
  const { dir, approved } = fixture(t);
  fs.appendFileSync(path.join(dir, file), "Changed grading/body/asset\n");
  assert.equal(evaluateReview(approved, hashQuestion(dir)).status, "UNREVIEWED");
});

test("missing/invalid hashes, scope and human approval cannot pass", (t) => {
  const { hashes, approved } = fixture(t);
  for (const change of [
    { hashes: undefined }, { hashes: {} }, { hashes: { ...hashes, "instruction.md": "bad" } },
    { hashes: { "instruction.md": hashes["instruction.md"] } }, { scope: "answer-only" },
    { humanApproval: { ...approved.humanApproval, kind: "Gemini" } },
    { humanApproval: { ...approved.humanApproval, reviewer: " " } },
    { humanApproval: { ...approved.humanApproval, approvedAt: "invalid" } },
  ]) assert.equal(evaluateReview({ ...approved, ...change }, hashes).status, "UNREVIEWED");
});

test("added/removed files and missing core content invalidate approval", (t) => {
  const { hashes, approved } = fixture(t);
  assert.equal(evaluateReview(approved, { ...hashes, "new.md": hashes["instruction.md"] }).status, "UNREVIEWED");
  const missing = { ...hashes };
  delete missing["golden_solution.md"];
  assert.equal(evaluateReview({ ...approved, hashes: missing }, missing).status, "UNREVIEWED");
});

test("scanner rejects nonexistent questions, counts effective statuses by book/chapter", (t) => {
  const { root, write, approved } = fixture(t);
  write({ R999: approved });
  let report = scanReviews(root);
  assert.equal(report.total.APPROVED, 0);
  assert.match(report.errors.join("\n"), /nonexistent question/);
  for (const status of ["UNREVIEWED", "IN_REVIEW", "NEEDS_REVISION", "APPROVED"]) {
    write({ R001: { ...approved, status } });
    report = scanReviews(root);
    assert.equal(report.total[status], 1);
    assert.equal(report.groups["razavi/chapter-1"][status], 1);
    assert.deepEqual(report.errors, []);
  }
  write({ R001: { ...approved, hashes: {} } });
  assert.equal(scanReviews(root).total.UNREVIEWED, 1);
  fs.writeFileSync(path.join(root, "review-status.json"), "{}");
  assert.throws(() => scanReviews(root), /schema/);
});
