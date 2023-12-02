const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: `monorail.proxy.rlwy.net`,
    user: 'root',
    database: 'railway',
    password: 'g3Ce36afGcgHA-fCAfhDgg-3C6ddC2C1',
    port: 21720,
    uri: 'mysql://root:g3Ce36afGcgHA-fCAfhDgg-3C6ddC2C1@mysql.railway.internal:3306/railway'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conectado ao banco de dados! com sucesso!\nAo banco ${process.env.DB_NAME}`)
});

module.exports = connection;