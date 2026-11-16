// Writes dist/: the review page, index.json, and q/<id>/ for every question.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dist = path.join(root, "dist");
const books = ["razavi", "gray", "allen"];
const difficulty = JSON.parse(fs.readFileSync(path.join(root, "difficulty.json"), "utf8"));
// Each question's exercise number in its book and its chapter.
const exercises = JSON.parse(fs.readFileSync(path.join(root, "exercises.json"), "utf8"));

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(path.join(root, "site/public"), dist, { recursive: true });

const diagrams = (dir, files) => {
  const out = {};
  for (const file of files) {
    const match = file.match(/^(diagram-\d+)\.svg$/);
    if (!match) continue;
    const cir = path.join(dir, `${match[1]}.cir`);
    const first = fs.existsSync(cir) ? fs.readFileSync(cir, "utf8").split("\n")[0] : "";
    out[match[1]] = first.startsWith("*") ? first.replace(/^\*\s*/, "").trim() : "";
  }
  return Object.keys(out).length ? out : undefined;
};

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
        ex: exercises[id].ex,
        ch: exercises[id].ch,
        // The question text, for the search box.
        t: fs.readFileSync(path.join(dir, "instruction.md"), "utf8"),
        figs: files.filter((f) => f.startsWith("figure-")),
        refs: files.filter((f) => f.startsWith("reference-")),
        // A worked, step-by-step solution, where one has been written.
        sol: files.includes("detailed_solution.md") ? 1 : 0,
        // A Chinese translation of the question, answer and worked solution.
        zh: files.includes("instruction.zh.md") ? 1 : 0,
        // Drawn diagrams of the worked solution: name -> caption (the first
        // comment line of its netlist), only for those with an SVG.
        diags: diagrams(dir, files),
      });
    }
  }
}
// Textbook order: book, chapter, then the problems in the order the book has
// them (numbered ids), each chapter's simulation problems after its others.
const bookOrder = Object.fromEntries(books.map((b, i) => [b, i]));
const seq = (q) => (/^[RGA]\d+$/.test(q.id) ? [0, Number(q.id.slice(1))] : [1, q.id]);
index.sort((a, b) => {
  if (a.book !== b.book) return bookOrder[a.book] - bookOrder[b.book];
  if (a.ch !== b.ch) return a.ch - b.ch;
  const [ka, va] = seq(a);
  const [kb, vb] = seq(b);
  if (ka !== kb) return ka - kb;
  return va < vb ? -1 : va > vb ? 1 : 0;
});
fs.writeFileSync(path.join(dist, "index.json"), JSON.stringify(index));
console.log(`dist/: ${index.length} questions`);
