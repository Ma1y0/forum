import { Router } from "express";
import { db } from "../..";
import { generateJwt } from "./jwt";

const router = Router();

router.post("/register", async (req, res) => {
  console.log(req.body);
  const user = await db.registerUser(req.body);

  return {
    user: user,
  };
});

router.post("/login", async (req, res) => {
  const user = await db.registerUser(req.body);

  const token = generateJwt(user.id!);

  res.cookie("jwt", token, {
    httpOnly: true,
  });

  return {
    user: user,
  };
});

export { router as userRouter };
