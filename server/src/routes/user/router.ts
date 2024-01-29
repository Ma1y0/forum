import { Router } from "express";
import { db } from "../..";

const router = Router();

router.post("/rgiter", async (req, res) => {
  const user = await db.registerUser(req.body);

  return {
    user: user,
  };
});

router.post("/login", async (req, res) => {
  const user = await db.registerUser(req.body);

  return {
    user: user,
  };
});

export { router as userRouter };
