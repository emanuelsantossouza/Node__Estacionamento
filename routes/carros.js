//functionality of a route

const carros = require("express").Router();
const CarroController = require("../controllers/carroController");

carros.get("/carros", async function (req, res) {

    console.log("Entrou na funcção carros router");
    let buscaCarros = await CarroController.buscarTodos().catch((error) => {
        console.log("Erro ao buscar carros");
        console.log(error);

    });
    console.log(buscaCarros);

    res.json(buscaCarros);

    res.send([
        { carroName: "Book Ben", carroId: "xcvrgf" },
        { carroName: "Book Boom", carroId: "iyuitr" },
        { carroName: "Book ABCD", carroId: "nfgvcd" },
    ]);
});

module.exports = carros;