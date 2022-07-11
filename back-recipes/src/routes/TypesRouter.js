import express from "express";

// Router from express
const typesRouter = express.Router();

// http://localhost:8000/api/types/
typesRouter
  .route("/")
  // GET:
  .get(async (req, res) => {
    // Send to the client the response
    return res.send("Types");
  });

// Export Router
export default typesRouter;
