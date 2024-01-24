import Database from "bun:sqlite";

const db = new Database("db.sqlite", { create: true });
const user_tabel = db.query(`CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      bio TEXT
    );`);

user_tabel.run();

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  bio?: string;
}

export { db };
