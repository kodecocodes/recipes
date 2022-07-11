import express from "express";

// Router from express
const ingredientsRouter = express.Router();

// http://localhost:8000/api/ingredients/
ingredientsRouter
  .route("/")
  // GET:
  .get(async (req, res) => {
    // Send to the client the response
    return res.send("Ingredients");
  });

// Export Router
export default ingredientsRouter;
