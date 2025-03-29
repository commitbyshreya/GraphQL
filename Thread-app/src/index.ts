import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloserver from "./graphql";
import dotenv from "dotenv";
// import UserService from "./services/user";
dotenv.config();

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  // app.use(
  //   "/graphql",
  //   expressMiddleware(await createApolloserver()));

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();