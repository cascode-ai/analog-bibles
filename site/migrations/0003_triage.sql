-- Diagnostic-only Gemini pass. It never changes candidate files or approval state.
CREATE TABLE IF NOT EXISTS wb_diagnostics (
  id TEXT PRIMARY KEY, qid TEXT NOT NULL, actor TEXT NOT NULL, created_at TEXT NOT NULL,
  packet_id TEXT NOT NULL, base_version INTEGER NOT NULL, source_hashes TEXT NOT NULL,
  payload TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS wb_diagnostics_qid_created ON wb_diagnostics(qid, created_at DESC);
