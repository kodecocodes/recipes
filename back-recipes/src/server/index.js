import express from "express";

// Root Router
import rootRouter from "../routes/index.js";

// Create express APP
const server = express();

// Define SERVER to use /api and use rootRouter from  index.js in routers
// From this point onover: http://localhost:8000/api/...
server.use("/api", rootRouter);

// Redirections
// http://localhost:8000 ---> http://localhost:8000/api/
server.get("/", (req, res) => {
  res.redirect("/api");
});

export default server;
