const express = require('express');
const app = express();

const cors = require('cors'); // Permite acesso para autorizar o uso da API
const bodyParser = require('body-parser'); // Permite transformar o corpo de um requisição em varios outros formatos
const router = require('../routes');

app.use(cors()); // Autoriza o uso da API com o cors
app.use(bodyParser.urlencoded({ extended: false })); // Criando o nosso middleware body

app.use(router); // Usando o nosso middleware router
module.exports = app;