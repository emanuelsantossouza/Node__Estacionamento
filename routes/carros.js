//functionality of a route

const carros = require("express").Router();
const { CarroController } = require("../controllers/CarroController");

carros.get("/carros", async function (req, res) {

    const chamaCarros = await CarroController.buscarTodos();
    res.send(chamaCarros);

    res.send([
        { carroName: "Book Ben", carroId: "xcvrgf" },
        { carroName: "Book Boom", carroId: "iyuitr" },
        { carroName: "Book ABCD", carroId: "nfgvcd" },
    ]);
});

module.exports = carros;