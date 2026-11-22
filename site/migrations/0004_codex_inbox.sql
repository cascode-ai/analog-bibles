-- Results received from a local Codex window are staged, never automatically applied.
CREATE TABLE IF NOT EXISTS wb_codex_inbox (
  id TEXT PRIMARY KEY, actor TEXT NOT NULL, created_at TEXT NOT NULL,
  label TEXT NOT NULL, raw TEXT NOT NULL, metadata TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING', dedupe_key TEXT NOT NULL UNIQUE
);
CREATE INDEX IF NOT EXISTS wb_codex_inbox_created ON wb_codex_inbox(created_at DESC);
CREATE TABLE IF NOT EXISTS wb_codex_applied (
  inbox_id TEXT PRIMARY KEY, import_id TEXT NOT NULL, created_at TEXT NOT NULL
);
