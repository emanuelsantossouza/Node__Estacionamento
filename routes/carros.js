//functionality of a route

const carros = require("express").Router();
const CarroService = require("../services/CarroService");

carros.get("/carros", async function (req, res) {
    console.log("Entrou na funcção carros router");

    let json = { error: '', result: {} };
    try {
        let bucarCarros = await CarroService.buscarTodos();

        // Construa o objeto JSON de resposta
         json = {
            error: '',
             result: bucarCarros.map(carro => ({
                codigo: carro.codigo,
                descricao: carro.modelo
            }))
        };
        console.log(`${json}`)

        return res.json(json);

    } catch (error) {
        console.log(error);
        res.json({ error: error });

        return res.status(500).json({ error: 'Erro ao buscar carros' });
    };
});

module.exports = carros;