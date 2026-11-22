-- Additive only: the legacy reviews table is intentionally untouched.
CREATE TABLE IF NOT EXISTS wb_revisions (
  qid TEXT NOT NULL, version INTEGER NOT NULL, request_id TEXT NOT NULL UNIQUE,
  actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL,
  PRIMARY KEY(qid, version)
);
CREATE TABLE IF NOT EXISTS wb_batches (
  id TEXT PRIMARY KEY, actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS wb_reports (
  id TEXT PRIMARY KEY, actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS wb_report_decisions (
  id INTEGER PRIMARY KEY AUTOINCREMENT, report_id TEXT NOT NULL,
  item INTEGER NOT NULL, actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS wb_exports (
  id TEXT PRIMARY KEY, actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL
);
