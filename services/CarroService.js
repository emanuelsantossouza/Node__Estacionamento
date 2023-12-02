const db = require('../db')

console.log("Entrou no arquivo carroService.js");

module.exports = {
    buscarTodos: () => {
        console.log("Entrou na funcção buscarTodos do service carros");

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });

            console.log("Fez a busca no banco de dados");
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO carros(modelo, placa) VALUES(?,?)',
                [modelo, placa],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertId);
                });
        });
    },

    alterar: (codigo, modelo, placa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE carros SET modelo=?, placa=? WHERE codigo=?', [modelo, placa, codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.affectedRows);
            })
        })
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.affectedRows);
            })
        })
    },

}