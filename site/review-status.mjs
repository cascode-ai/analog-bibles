import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export const STATUSES = ["UNREVIEWED", "IN_REVIEW", "NEEDS_REVISION", "APPROVED"];
export const REVIEW_SCOPE = "question-directory-v1";
const object = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const sha256 = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");

// Hash raw bytes, including translations, grading notes, figures and netlists.
// Relative paths and the exact file set are part of the approval contract.
export function hashQuestion(dir, prefix = "") {
  const hashes = {};
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const name = prefix + entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) Object.assign(hashes, hashQuestion(full, name + "/"));
    else if (entry.isFile()) hashes[name] = sha256(fs.readFileSync(full));
    else throw new Error(`Unsupported question entry: ${name}`);
  }
  return hashes;
}

export function evaluateReview(record, hashes) {
  const errors = [];
  const result = (status = "UNREVIEWED") => ({ status: errors.length ? "UNREVIEWED" : status, errors });
  if (record === undefined) return result();
  if (!object(record) || !STATUSES.includes(record.status)) {
    errors.push("Invalid review record/status");
    return result();
  }
  // AI reports and the presence of metadata never grant human approval.
  if (record.status === "APPROVED") {
    const human = record.humanApproval;
    if (!object(human) || human.decision !== "APPROVED" || human.kind !== "human" ||
        typeof human.reviewer !== "string" || !human.reviewer.trim() ||
        typeof human.approvedAt !== "string" ||
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(human.approvedAt) ||
        !Number.isFinite(Date.parse(human.approvedAt))) errors.push("Missing explicit human approval/identity/UTC timestamp");
    if (record.scope !== REVIEW_SCOPE) errors.push("Missing or unsupported approval scope");
    for (const name of ["instruction.md", "golden_solution.md", "detailed_solution.md"]) {
      if (!Object.hasOwn(hashes, name)) errors.push(`Missing required content: ${name}`);
    }
  }
  if (record.status === "APPROVED" || record.hashes !== undefined) {
    if (!object(record.hashes) || !Object.keys(record.hashes).length) errors.push("Missing SHA-256 hashes");
    else {
      const expected = Object.keys(hashes).sort();
      const saved = Object.keys(record.hashes).sort();
      if (JSON.stringify(expected) !== JSON.stringify(saved)) errors.push("Reviewed file set changed or incomplete");
      for (const name of saved) {
        if (typeof record.hashes[name] !== "string" || !/^[a-f0-9]{64}$/.test(record.hashes[name])) errors.push(`Invalid SHA-256: ${name}`);
        else if (record.hashes[name] !== hashes[name]) errors.push(`Content changed: ${name}`);
      }
    }
  }
  return result(record.status);
}

export function scanReviews(root) {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, "review-status.json"), "utf8"));
  if (!object(manifest) || manifest.schemaVersion !== 1 || !object(manifest.records)) throw new Error("Invalid review-status.json schema");
  const difficulty = JSON.parse(fs.readFileSync(path.join(root, "difficulty.json"), "utf8"));
  const exercises = JSON.parse(fs.readFileSync(path.join(root, "exercises.json"), "utf8"));
  const questions = new Map();
  const errors = [];
  const counts = () => Object.fromEntries(STATUSES.map((status) => [status, 0]));
  const total = counts(), groups = {}, byBook = {};
  for (const book of ["razavi", "gray", "allen"]) {
    const indexed = new Set(Object.values(difficulty[book]).flat());
    const actual = fs.readdirSync(path.join(root, book), { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(root, book, entry.name, "instruction.md")))
      .map((entry) => entry.name);
    for (const id of new Set([...indexed, ...actual])) {
      if (!indexed.has(id)) errors.push(`${id}: Question missing from difficulty index`);
      const dir = path.join(root, book, id);
      const hashes = fs.existsSync(dir) ? hashQuestion(dir) : {};
      const review = evaluateReview(manifest.records[id], hashes);
      if (!fs.existsSync(dir)) review.errors.push("Question directory missing");
      if (review.errors.length) review.status = "UNREVIEWED";
      questions.set(id, review);
      errors.push(...review.errors.map((message) => `${id}: ${message}`));
      const chapter = exercises[id]?.ch ?? "unknown";
      const group = groups[`${book}/chapter-${chapter}`] ??= counts();
      group[review.status]++;
      const bookCounts = byBook[book] ??= counts();
      bookCounts[review.status]++;
      total[review.status]++;
    }
  }
  for (const id of Object.keys(manifest.records)) {
    if (!questions.has(id)) errors.push(`${id}: Review record refers to a nonexistent question`);
  }
  return { questions, errors, total, byBook, groups };
}
