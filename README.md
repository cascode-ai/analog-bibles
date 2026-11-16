# analog-bibles

三本模拟集成电路经典教材的习题（题目 + 参考答案），来自 did-ai-get-hired-today。

在线浏览、报错、评论：**https://analog-bibles.tokenzhang.com/review?scope=random**

每道题一个文件夹：`instruction.md` 为题目，`golden_solution.md` 为参考答案，`figure-*.png` 为配图。难度见各书 README 中的列表，或 `difficulty.json`。困难 = 原仓库的最终评测集（`tasks/`，模型得分最低的题）加上答案过长的 12 题（`hard-questions/`）。

| 书 | 简单 | 中等 | 困难 | 仿真 | 合计 |
|---|---|---|---|---|---|
| [Razavi — Design of Analog CMOS Integrated Circuits](razavi/) | 338 | 300 | 85 | 0 | 723 |
| [Gray — Analysis and Design of Analog Integrated Circuits](gray/) | 216 | 190 | 26 | 85 | 517 |
| [Allen & Holberg — CMOS Analog Circuit Design](allen/) | 266 | 228 | 63 | 27 | 584 |
| **合计** | 820 | 718 | 174 | 112 | 1824 |

## 网站

`site/` 是审阅页面（Cloudflare Worker + D1）：左边题目和题图，右边参考答案；可以通过、报错（6 种原因）和评论。

- `npm run build`：把三本书的题目复制到 `dist/`，生成 `dist/index.json`
- `npm run deploy`：构建并部署；push 到 main 时 GitHub Actions 也会自动部署（需要仓库 secrets `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`）
- `GET /api/export`：导出全部审阅记录（JSON），用来集中处理报错
