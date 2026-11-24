# analog-bibles

End-of-chapter problems from three classic analog IC textbooks, with reference answers and step-by-step worked solutions in English and Chinese. The problems come from the [did-ai-get-hired-today](https://github.com/Arcadia-1/did-ai-get-hired-today) benchmark.

Browse online: **https://analog-bibles.tokenzhang.com/** (read-only). Maintainer review: https://analog-bibles.tokenzhang.com/review (password required).

Each problem has its own folder:

- `instruction.md` / `instruction.zh.md`: the problem statement (English / Chinese)
- `golden_solution.md` / `golden_solution.zh.md`: the reference answer, with grading notes
- `detailed_solution.md` / `detailed_solution.zh.md`: the worked solution
- `figure-*.png`: the problem's figures; `solution-*.svg` and `diagram-*.svg`: plots and step circuit diagrams used in the worked solution

Difficulty is listed in each book's README and in `difficulty.json`. Hard = the original benchmark's final evaluation set (`tasks/`, the problems models scored lowest on) plus 12 problems whose answers are too long (`hard-questions/`).

Solutions are written, checked and reviewed according to the [solution style guide](SOLUTION_STYLE.md) (in Chinese): reference answers are easy to check against, worked solutions keep every key derivation, and problems that ask for a sketch get an actual plot.

| Book | Easy | Medium | Hard | Simulation | Total |
|---|---|---|---|---|---|
| [Razavi — Design of Analog CMOS Integrated Circuits](razavi/) | 338 | 300 | 85 | 0 | 723 |
| [Gray — Analysis and Design of Analog Integrated Circuits](gray/) | 216 | 190 | 26 | 85 | 517 |
| [Allen & Holberg — CMOS Analog Circuit Design](allen/) | 266 | 228 | 63 | 27 | 584 |
| **Total** | 820 | 718 | 174 | 112 | 1824 |

## Website

`site/` is the reader and review site (Cloudflare Worker + D1): the problem and its figures on the left, the answer on the right. Reviewers can approve a problem, report an error (6 reasons) or leave a comment.

- `npm run build`: copies the three books' problems into `dist/` and generates `dist/index.json`. For fast loading it also emits content-hashed files (scripts, styles, a light index and search text in `assets/`, one `b/<id>.<hash>.json` per problem), which `dist/_headers` tells browsers to cache long-term.
- `npm run deploy`: builds and deploys. Pushing to main also deploys automatically through GitHub Actions (needs the repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`).
- Review mode and every `/api/*` route need the maintainer password (Worker secret `REVIEW_KEY`; change it with `npx wrangler secret put REVIEW_KEY`).
- `GET /api/export?key=<password>`: exports all review records as JSON, for handling reported errors in one place.
