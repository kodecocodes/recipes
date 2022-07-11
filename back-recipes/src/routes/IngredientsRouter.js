import express from "express";
import { IngredientsController } from "../controller/IngredientsController.js";

// Router from express
const ingredientsRouter = express.Router();

// http://localhost:8000/api/ingredients/
ingredientsRouter
  .route("/")
  // GET:
  .get(async (req, res) => {
    // Send to the client the response
    const controller = new IngredientsController();
    // Obtain Response
    const response = await controller.getIngredients();
    // Send to the client the response
    return res.send(response);
  });

// Export Router
export default ingredientsRouter;
