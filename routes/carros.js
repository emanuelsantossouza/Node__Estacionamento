//functionality of a route

const carros = require("express").Router();
const CarroController = require("../controllers/carroController");
const CarroService = require("../services/CarroService");

carros.get("/carros", async function (req, res) {
    console.log("Entrou na funcção carros router");

    try {
        let buscaCarros = await CarroController.buscarTodos();
        let CarroService = await CarroService.buscarTodos();

        
        return res.json(buscaCarros);

    } catch (error) {
        console.log(error);
        res.json({ error: error });

        return res.status(500).json({ error: 'Erro ao buscar carros' });
    };
});

module.exports = carros;