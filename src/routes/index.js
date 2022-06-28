const express = require('express')
const produtoController = require('../controllers/produtoController');
const requestLog = require('../middlewares/requestLog');
const bloqueio = require("../middlewares/bloqueio");
const UsuariosController = require('../controllers/usuariosController');
const routes = express.Router()

routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);

routes.post("/usuarios", usuarioCreateValidation, UsuariosController.registro);
routes.post('/login', authController.login)

module.exports = routes;