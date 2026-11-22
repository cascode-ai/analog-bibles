-- Additive; local migration runner backs up existing SQLite databases first.
CREATE TABLE IF NOT EXISTS wb_packets (
  id TEXT PRIMARY KEY, actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS wb_imports (
  id TEXT PRIMARY KEY, actor TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL
);
