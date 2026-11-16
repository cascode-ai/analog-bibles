CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  qid TEXT NOT NULL,
  verdict TEXT NOT NULL CHECK (verdict IN ('pass', 'issue', 'comment')),
  flags TEXT NOT NULL DEFAULT '[]',
  note TEXT NOT NULL DEFAULT '',
  author TEXT NOT NULL DEFAULT '',
  client TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS reviews_qid ON reviews (qid);
CREATE INDEX IF NOT EXISTS reviews_client ON reviews (client);
