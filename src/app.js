const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    application: "GitHub Actions Trunk Demo",
    message: "Hello from Trunk Based CI/CD",
    environment: process.env.APP_ENV || "local",
    version: process.env.APP_VERSION || "local"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    environment: process.env.APP_ENV || "local",
    version: process.env.APP_VERSION || "local"
  });
});

module.exports = app;