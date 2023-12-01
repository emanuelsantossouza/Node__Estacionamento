require('dotenv').config({ path: './src/variaveis.env' });

const express = require('express');
const cors = require('cors'); // Permite acesso para autorizar o uso da API
const bodyParser = require('body-parser'); // Permite transformar o corpo de um requisição em varios outros formatos

const routes = require('./route');

const server = express(); // Inicializa o servidor com o express
server.use(cors()); // Autoriza o uso da API com o cors
server.use(bodyParser.urlencoded({ extended: false })); // Criando o nosso middleware body

server.use('/api', routes); // Inicializa as rotas do servidor

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})
