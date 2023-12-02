const app = require('./app');
const route = require('..routes/carros');

module.exports = app;

app.use("/api/", route);