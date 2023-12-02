const express = require("express");
const app = express();

const route = require("../routes/carro");

app.use("/api", route);

module.exports = app;