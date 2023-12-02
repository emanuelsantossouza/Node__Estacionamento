//functionality of a route

const carro = require("express").Router();

carro.get("/carro", async function (req, res) {
    const { carroId } = req.query;
    if (carroId) {
        res.status(200).send({ carroName: "Some Book", carroId: carroId });
    } else {
        res.send("No book ID");
    }
});

carro.post("/carro", async function (req, res) {
    const { carroId, carroName } = req.body;
    //do something
    res.send("Something done");
});

module.exports = carro;