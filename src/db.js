const mysql = require('mysql2');

let port = '52159'


const connection = mysql.createConnection({
    host: `monorail.proxy.rlwy.net`,
    user: 'root',
    database: 'railway',
    password: '35DehgGGC1db4gBC15CCegD34bgAfe6f',
    port: port,
    uri: 'mysql://root:35DehgGGC1db4gBC15CCegD34bgAfe6f@monorail.proxy.rlwy.net:52159/railway'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conectado ao banco de dados! com sucesso!\nAo banco ${process.env.DB_NAME}`)
});

module.exports = connection;