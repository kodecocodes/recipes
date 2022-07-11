import express from "express";

// Router from express
const recipesRouter = express.Router();

// http://localhost:8000/api/recipes/
recipesRouter
  .route("/")
  // GET:
  .get(async (req, res) => {
    // Send to the client the response
    return res.send("Recipes");
  });

// Export Router
export default recipesRouter;
