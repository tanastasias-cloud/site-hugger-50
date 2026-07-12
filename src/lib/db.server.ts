// Server-only SQLite access via better-sqlite3.
// Load inside server handlers: const { insertContactRequest } = await import("@/lib/db.server");
// Top-level import is safe only in other .server.ts modules - route files and *.functions.ts ship to the client bundle.
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), "data", "app.db");

function createDb(): Database.Database {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      interest TEXT,
      avgs_status TEXT,
      message TEXT,
      format TEXT,
      source TEXT,
      created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
    );
  `);
  return db;
}

let _db: Database.Database | undefined;

function getDb(): Database.Database {
  if (!_db) _db = createDb();
  return _db;
}

export type ContactRequestInput = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  avgs_status: string | null;
  message: string | null;
  format: string | null;
  source: string | null;
};

export function insertContactRequest(input: ContactRequestInput): number | bigint {
  const stmt = getDb().prepare(`
    INSERT INTO contact_requests
      (first_name, last_name, email, phone, interest, avgs_status, message, format, source)
    VALUES (@first_name, @last_name, @email, @phone, @interest, @avgs_status, @message, @format, @source)
  `);
  return stmt.run(input).lastInsertRowid;
}
