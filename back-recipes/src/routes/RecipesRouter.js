import express from "express";
import { RecipesController } from "../controller/RecipesController.js";

// Router from express
const recipesRouter = express.Router();

// http://localhost:8000/api/recipes/
recipesRouter
  .route("/")
  // GET:
  .get(async (req, res) => {
    //Obtain Query params
    let page = req.query.page || 1;
    let limit = req.query.limit || 3;
    let id = req.query.id;
    let ingredients = req.query.ingredients.split(",");
    let time = req.query.time;
    // Send to the client the response
    const controller = new RecipesController();
    // Obtain Response
    const response = await controller.getRecipes(
      page,
      limit,
      id,
      ingredients,
      time
    );
    // Send to the client the response
    return res.send(response);
  });

// Export Router
export default recipesRouter;
