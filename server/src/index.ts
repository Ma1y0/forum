import express from "express";
import { questionRouter } from "./routes/question/router";
import { DB } from "./db/db";

export const db = new DB();

const app = express();

app.use(express.json());

app.use("/question", questionRouter);

app.post("/a", (req, res) => res.json({ message: "LLL" }));

app.listen(8080, () => console.log("Listening on port :8080"));
