import Database from "bun:sqlite";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  bio?: string;
}

export interface Question {
  id?: string;
  title: string;
  description: string;
  authorId: string;
}

export interface Answear {
  id?: string;
}

export class DB {
  private db: Database;

  private async dbInit() {
    this.db.run(`
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    bio TEXT
  );
`);

    this.db.run(`
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL
  );
`);
  }

  constructor() {
    this.db = new Database("db.sqlite", { create: true });
    this.dbInit().catch(console.error);
  }

  private async getUserByEmail(email: string): Promise<User> {
    return this.db
      .query("SELECT * FROM users WHERE email = $email")
      .get({ $email: email }) as User;
  }

  async getUserById(id: string): Promise<User> {
    return this.db
      .query("SELECT * FROM users WHERE id = $id")
      .get({ $id: id }) as User;
  }

  // Auth methods
  async registerUser(user: User) {
    // Generates uuid
    user.id = crypto.randomUUID();
    user.password = await Bun.password.hash(user.password);

    return this.db
      .query(
        "INSERT INTO users (id, name, email, password, bio) VALUES ($id, $name, $email, $password, $bio)",
      )
      .get({
        $id: user.id,
        $name: user.name,
        $email: user.email,
        $password: user.password,
        $bio: user.bio ?? null,
      }) as User;
  }

  // Returns `User` if auth is successfull else `null`
  async logInUser({ email, password }: { email: string; password: string }) {
    const user = await this.getUserByEmail(email);

    if (await Bun.password.verify(password, user.password)) {
      return user;
    } else {
      return null;
    }
  }

  /***  Questions  ***/
  async newQuestion(question: Question) {
    question.id = crypto.randomUUID();

    return this.db
      .query(
        "INSERT INTO questions (id, title, description) VALUES ($id, $title, $description)",
      )
      .get({
        $id: question.id!,
        $title: question.title,
        $description: question.description,
      }) as Question;
  }

  async getQestions(limit: number) {
    return this.db
      .query("SELECT * FROM questions LIMIT $limit")
      .all({ $limit: limit }) as Question[];
  }

  async getQuestionById(id: string) {
    return this.db
      .query("SELECT * FROM questions WHERE id = $id")
      .get({ $id: id }) as Question;
  }
}
