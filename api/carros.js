const express = require("express");
const app = express();

const route = require("../routes/carros");

app.use("/api", route);

module.exports = app;
