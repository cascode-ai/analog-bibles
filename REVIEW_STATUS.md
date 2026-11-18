# 答案审核状态

`review-status.json` 是独立的内部审核清单，不修改题目 Markdown，不读取独立审核工作区，不包含 Gemini 报告、聊天记录或 PDF 批次。初始清单为空，所有题目均未审核。

## 数据结构

顶层为 `schemaVersion: 1` 与以题目 ID 为键的 `records`。每条记录的 `status` 可为：

- `UNREVIEWED`：未审核，也是缺省状态。
- `IN_REVIEW`：审核中。
- `NEEDS_REVISION`：待修订。
- `APPROVED`：经人工明确批准，且范围、身份、时间及所有哈希校验有效。

示意记录（占位哈希无效，不能直接作为批准记录使用）：

```json
{
  "schemaVersion": 1,
  "records": {
    "R001": {
      "status": "APPROVED",
      "scope": "question-directory-v1",
      "humanApproval": {
        "kind": "human",
        "decision": "APPROVED",
        "reviewer": "实际人工批准人的身份",
        "approvedAt": "2026-11-19T00:00:00Z"
      },
      "hashes": {
        "instruction.md": "此处须填写64位小写SHA-256",
        "golden_solution.md": "此处须填写64位小写SHA-256",
        "detailed_solution.md": "此处须填写64位小写SHA-256"
      }
    }
  }
}
```

`question-directory-v1` 表示人工批准整个题目目录：原题、参考答案（含评分说明）、详细步骤、所有译文、配图和其他支持文件。`hashes` 必须列出目录内**全部**文件，以相对目录的 `/` 路径为键，值为原始文件字节的完整 SHA-256。缺少三个核心 Markdown 中的任一个，均不能批准。任一文件增删或字节变化会使整题批准失效；跨平台换行变化也会失效。此版本不支持局部或单语言批准，避免一个语言的批准错误地隐藏另一个语言的标签。

可选的 `aiReview`（例如 `{"provider":"Gemini","result":"PASS"}`）或 `provenance` 仅为内部信息，不参与批准判断；不要存放完整报告。旧界面来源说明为“AI 撰写，已对照参考答案，仍可能有误”，不代表人工批准。

## 人工批准流程

1. 人工检查上述完整范围，明确批准当前版本，记录真实身份和 UTC 时间。自动化程序不生成批准决定。
2. 使用共享只读哈希函数取得当前目录快照，例如在仓库根目录执行：

   ```sh
   node --input-type=module -e "import {hashQuestion} from './site/review-status.mjs'; console.log(JSON.stringify(hashQuestion('razavi/R001'), null, 2))"
   ```

3. 将快照和批准记录写入清单，执行 `npm run review:check` 及 `npm test`，按正常代码审阅流程验收。不得将未审内容的哈希直接刷新以消除失效状态。

本地清单是人工声明，无法验证填写者是否真正进行了人工审核；身份和批准真实性依赖仓库权限与代码审阅。现有网站审阅表单、评论或评分不会写入此清单，也不会自动批准答案。无需 AI API、数据库迁移或后台服务。

## 构建与校验

`npm run review:check` 遍历三本教材的题目，按教材、章节及总计输出四类**有效状态**数量。无效记录（包括不存在的题目）输出具体错误并以退出码 1 结束。失效批准计入 `UNREVIEWED`。

`npm run build` 共用同一校验逻辑，将有效状态放入构建索引的 `reviewStatus`，不公开内部批准身份和哈希。无效单条记录会报告警告并按未审核处理，保证内容变化后仍可发布带标签的页面；清单缺失、非法 JSON 或顶层版本错误会阻止构建，以免静默忽略配置错误。完整与轻量索引均参与原有内容哈希缓存，状态变化会更新索引地址。

题目卡片顶部编号旁，除有效 `APPROVED` 外均显示小型中性色“未审核”（英文为 `Unreviewed`）。有效批准完全省略标签。缺失 `reviewStatus` 的旧索引同样默认显示未审核。标签表示整道题的审核状态，在原题、参考答案、详细步骤和评分说明之间切换时保持可见；没有详细步骤的题目也显示。各部分均属于同一审核范围。不显示原来的来源说明，不改答案正文和双栏布局。
