const app = require("../app");
const route = require("../routes/carros.js");

console.log("Entrou no end point api/carros.js");

app.use("/api", route);

module.exports = app;
