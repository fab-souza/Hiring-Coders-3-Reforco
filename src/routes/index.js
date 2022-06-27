const express = require('express')
const produtoController = require('../controllers/produtoController');
const routes = express.Router()

routes.get("/produto/lista", produtoController.listarProduto);



module.exports = routes;