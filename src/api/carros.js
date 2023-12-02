const app = require('./app');
const rota = require('./routes/carros');

app.use('/carros', rota);

module.exports = app;
