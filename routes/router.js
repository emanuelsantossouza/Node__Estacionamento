const express = require('express');
const router = express.Router();

const CarrosController = require('../controllers/CarroController');

router.get('/carros', CarrosController.buscarTodos);
router.get('/carro/:id', CarrosController.buscarUm);
router.post('/carro', CarrosController.inserir);
router.put('/carro/:id', CarrosController.alterar);
router.delete('/carro/:id', CarrosController.excluir);

module.exports = router;