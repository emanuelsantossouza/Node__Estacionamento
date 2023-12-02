const app = require("../app");

const carro = require("express").Router();

carro.get("/carro", async function (req, res) {
    const { carroId } = req.query;
    if (carroId) {
        res.status(200).send({ carroName: "Some Book", carroId: carroId });
    } else {
        res.send("No book ID");
    }
});

module.exports = app;