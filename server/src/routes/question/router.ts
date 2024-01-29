import { Router } from "express";
import { db } from "../..";

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const q = await db.getQuestionById(id);

  res.json({
    question: q,
  });
});

router.get("/get/:limit", async (req, res) => {
  const { limit } = req.params;

  const q = await db.getQestions(parseInt(limit));

  res.json({
    questions: q,
  });
});

router.post("/new", async (req, res) => {
  const q = await db.newQuestion(req.body);

  res.json({
    question: q,
  });
});

export { router as questionRouter };
