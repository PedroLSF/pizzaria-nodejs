const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaUsuario, validaEndereco, validaId, valida_IdBody} = require("../middleware/validacao.midd");
const paginacao = require("../middleware/paginacao.midd");

// Rotas GET
router.get('/findById/:id', authMiddleware, validaId, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);


// Rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAdress/:id', authMiddleware, validaId, validaEndereco, usuarioController.addAdressUserController);
router.post('/addPedido/:id', authMiddleware, validaId, valida_IdBody, usuarioController.addPedidoUserController);

// Rotas PUT
router.put('/update/:id', authMiddleware, validaId, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/remove/:id', authMiddleware, validaId, usuarioController.removeUserController);
router.delete('/removeAdress', authMiddleware, usuarioController.removeAdressUserController);
router.delete('/removePedido/:id', authMiddleware, validaId, usuarioController.removePedidoUserController);

module.exports = router;