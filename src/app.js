const express = require('express');
const app = express();

const cors = require('cors'); // Permite acesso para autorizar o uso da API
const bodyParser = require('body-parser'); // Permite transformar o corpo de um requisição em varios outros formatos

server.use(cors()); // Autoriza o uso da API com o cors
server.use(bodyParser.urlencoded({ extended: false })); // Criando o nosso middleware body
module.exports = app;