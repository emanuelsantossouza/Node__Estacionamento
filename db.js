const mysql = require('mysql2');
env = require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    database: process.env.DATABASE_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
    uri: process.env.URL_DB
});

connection.query('SELECT *FROM carros', (error, resultados) => {
    if (error) throw error;
    console.log(resultados);

    console.log('Realizpou a consulta no banco de dados');
})

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conectado ao banco de dados! com sucesso!\nAo banco ${process.env.DB_NAME}`)
});

module.exports = connection;