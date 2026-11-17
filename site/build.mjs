// Writes dist/: the review page, index.json, and q/<id>/ for every question.
// For a fast page it also writes content-hashed files that browsers may cache
// for good (see _headers below): the page's script and stylesheet, a light
// index without the question texts, the texts for the search box apart, and
// one b/<id>.<hash>.json per question with all its Markdown files.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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

const hash = (data) => crypto.createHash("sha256").update(data).digest("hex").slice(0, 10);
fs.mkdirSync(path.join(dist, "b"), { recursive: true });

const index = [];
for (const book of books) {
  for (const [level, ids] of Object.entries(difficulty[book])) {
    for (const id of ids) {
      const dir = path.join(root, book, id);
      const files = fs.readdirSync(dir).sort();
      fs.cpSync(dir, path.join(dist, "q", id), { recursive: true });
      // Every file of the question goes into its hash, so a changed figure or
      // diagram gets a new address too (the page asks for /q/ files with ?v=).
      const h = crypto.createHash("sha256");
      for (const f of files) h.update(f).update("\0").update(fs.readFileSync(path.join(dir, f))).update("\0");
      const v = h.digest("hex").slice(0, 10);
      const md = {};
      for (const f of files) if (f.endsWith(".md")) md[f] = fs.readFileSync(path.join(dir, f), "utf8");
      fs.writeFileSync(path.join(dist, "b", `${id}.${v}.json`), JSON.stringify(md));
      index.push({
        v,
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
        // Only when all three are translated: a half-translated question
        // (a translation still in progress) stays in English.
        zh: ["instruction.zh.md", "golden_solution.zh.md", "detailed_solution.zh.md"].every((f) => files.includes(f)) ? 1 : 0,
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
// The full index stays at /index.json for anyone who reads it directly.
fs.writeFileSync(path.join(dist, "index.json"), JSON.stringify(index));

// The page loads a light index (no question texts: they are most of the
// bytes) and fetches the texts only when someone searches.
const light = JSON.stringify(index.map(({ t, ...rest }) => rest));
const search = JSON.stringify(Object.fromEntries(index.map((q) => [q.id, q.t.toLowerCase()])));
const files = {
  index: `/assets/index.${hash(light)}.json`,
  search: `/assets/search.${hash(search)}.json`,
};
fs.mkdirSync(path.join(dist, "assets"), { recursive: true });
fs.writeFileSync(path.join(dist, files.index.slice(1)), light);
fs.writeFileSync(path.join(dist, files.search.slice(1)), search);

// The script and stylesheet under content-hashed names, and the page pointing
// at them. The page starts fetching the index before its scripts have run.
let html = fs.readFileSync(path.join(dist, "index.html"), "utf8");
for (const name of ["app.js", "style.css"]) {
  const data = fs.readFileSync(path.join(dist, name));
  const [base, ext] = name.split(".");
  const hashed = `/assets/${base}.${hash(data)}.${ext}`;
  fs.writeFileSync(path.join(dist, hashed.slice(1)), data);
  html = html.replace(`"/${name}"`, `"${hashed}"`);
}
const boot = `<script>window.AB=${JSON.stringify(files)};` +
  `AB.indexP=fetch(AB.index).then((r)=>{if(!r.ok)throw new Error(r.status);return r.json()});AB.indexP.catch(()=>{});</script>`;
html = html.replace("<meta charset=\"utf-8\">", `<meta charset="utf-8">\n${boot}\n<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>`);
fs.writeFileSync(path.join(dist, "index.html"), html);

// Hashed files never change under their name; the page itself is always
// checked. /q/ files are asked for with ?v=<hash>, but may be linked bare.
fs.writeFileSync(path.join(dist, "_headers"), `/assets/*
  Cache-Control: public, max-age=31536000, immutable
/b/*
  Cache-Control: public, max-age=31536000, immutable
/q/*
  Cache-Control: public, max-age=3600, stale-while-revalidate=604800
`);
console.log(`dist/: ${index.length} questions; light index ${(light.length / 1024).toFixed(0)} KB (full ${(JSON.stringify(index).length / 1024).toFixed(0)} KB)`);
