//functionality of a route

const carros = require("express").Router();

carros.get("/books", async function (req, res) {
    res.send([
        { carroName: "Book Ben", carroId: "xcvrgf" },
        { carroName: "Book Boom", carroId: "iyuitr" },
        { carroName: "Book ABCD", carroId: "nfgvcd" },
    ]);
});

module.exports = carros;