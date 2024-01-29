import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { questionRouter } from "./routes/question/router";
import { DB } from "./db/db";
import { userRouter } from "./routes/user/router";

export const db = new DB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/question", questionRouter);
app.use("/user", userRouter);

app.post("/a", (req, res) => res.json({ message: "LLL" }));

app.listen(8080, () => console.log("Listening on port :8080"));
