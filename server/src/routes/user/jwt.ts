import jwt from "jsonwebtoken";

export function generateJwt(id: string) {
  return jwt.sign(id, process.env.JWT_SECRET!, { expiresIn: "1d" });
}
