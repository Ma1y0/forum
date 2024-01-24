import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { userLogin } from "./routes/user/login";

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .group("/user", (app) => app.post("/login", userLogin))
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
