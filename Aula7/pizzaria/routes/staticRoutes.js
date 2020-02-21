//Incluindo o Express
const express = require('express');

//Criando o router
const router = express.Router();

//Incluindo o StaticController
const StaticController = require('../controllers/StaticController')

//Criando a rota get para raiz /
router.get('/', StaticController.home);

//Criano a rota get para /sobre
router.get('/sobre', StaticController.sobre)

//Exportando a rota
module.exports = router;