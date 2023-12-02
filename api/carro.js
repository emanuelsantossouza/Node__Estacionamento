const app = require("../app");
const route = require("../routes/carro");

app.use("/api", route);

module.exports = app;