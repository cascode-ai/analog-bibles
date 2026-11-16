// Writes dist/: the review page, index.json, and q/<id>/ for every question.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dist = path.join(root, "dist");
const books = ["razavi", "gray", "allen"];
const difficulty = JSON.parse(fs.readFileSync(path.join(root, "difficulty.json"), "utf8"));

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(path.join(root, "site/public"), dist, { recursive: true });

const index = [];
for (const book of books) {
  for (const [level, ids] of Object.entries(difficulty[book])) {
    for (const id of ids) {
      const dir = path.join(root, book, id);
      const files = fs.readdirSync(dir).sort();
      fs.cpSync(dir, path.join(dist, "q", id), { recursive: true });
      index.push({
        id,
        book,
        level,
        // The question text, for the search box.
        t: fs.readFileSync(path.join(dir, "instruction.md"), "utf8"),
        figs: files.filter((f) => f.startsWith("figure-")),
        refs: files.filter((f) => f.startsWith("reference-")),
      });
    }
  }
}
fs.writeFileSync(path.join(dist, "index.json"), JSON.stringify(index));
console.log(`dist/: ${index.length} questions`);
