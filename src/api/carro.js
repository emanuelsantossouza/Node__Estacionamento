const app = require('./app');
const server = require('../server');

app.get('/carros', (req, res) => { 
    res.send('Hello World!');
})
    


module.exports = app;
module.exports = server;
