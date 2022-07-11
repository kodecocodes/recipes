import express from "express";

// TODO Routes

// Create express APP
const server = express();

// Redirections
// http://localhost:8000 ---> http://localhost:8000/api/
server.get("/", (req, res) => {
  res.redirect("/api");
});

export default server;
