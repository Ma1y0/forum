import { User, db } from "../../db";

export function userLogin({ body }: { body: { email: string; name: string } }) {
  const user = db
    .query("SELECT * FROM users WHERE email = $email")
    .get({ $email: body.email });

  return JSON.stringify(user);
}
