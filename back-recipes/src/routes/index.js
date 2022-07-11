import express from "express";
import { LogInfo } from "../utils/logger.js";
import ingredientsRouter from "./IngredientsRouter.js";
import typesRouter from "./TypesRouter.js";
import recipesRouter from "./RecipesRouter.js";

// Server instance
const server = express();

// Router instance
const rootRouter = express.Router();

// Activate for requests to http://localhost:8000/api

// GET: http://localhost:8000/api
rootRouter.get("/", (req, res) => {
  LogInfo("GET: http://localhost:8000/api");
  res.send("Welcome to the Recipes API Restful Node.js Express");
});

// Redirections to Router & Controllers
server.use("/", rootRouter); // http://localhost:8000/api
server.use("/ingredients", ingredientsRouter); // http://localhost:8000/api/ingredients
server.use("/types", typesRouter); // http://localhost:8000/api/types
server.use("/recipes", recipesRouter); // http://localhost:8000/api/recipes

export default server;
