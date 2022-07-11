import express from "express";
import { TypesController } from "../controller/TypesController.js";

// Router from express
const typesRouter = express.Router();

// http://localhost:8000/api/types/
typesRouter
  .route("/")
  // GET:
  .get(async (req, res) => {
    // Send to the client the response
    const controller = new TypesController();
    // Obtain Response
    const response = await controller.getTypes();
    // Send to the client the response
    return res.send(response);
  });

// Export Router
export default typesRouter;
