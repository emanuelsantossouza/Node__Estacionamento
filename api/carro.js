const app = require("../app");
const route = require("../routes/carro");

console.log("Entrou no end point api/carro.js");

app.use("/api", route);

module.exports = app;