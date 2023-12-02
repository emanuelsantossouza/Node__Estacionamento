const app = require('./app');
const server = require('../server');

app.get('/carro', (req, res) => { 
    res.send('Hello World!');
    console.log('Hello World!');
})
    


module.exports = app;
module.exports = server;
