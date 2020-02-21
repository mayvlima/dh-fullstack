//Incluindo o Express
const express = require('express');

//Criando o router
const router = express.Router();

const PizzasController = require('../controllers/PizzasController')

//criando a rota get para pizzas
router.get('/', PizzasController.listar)

//criando rota get para busca
router.get('/:busca', PizzasController.buscar)

module.exports = router;