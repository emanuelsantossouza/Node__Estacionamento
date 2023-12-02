const app = require("../app");
const route = require("../routes/carros");

app.use("/api", route);

module.exports = app;
