const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaUsuario, validaId} = require("../middleware/validacao.midd");

// Rotas GET
router.get('/findById/:id', authMiddleware, validaId, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware,usuarioController.findAllUsersController);


// Rotas POST
router.post('/create', authMiddleware, validaUsuario, usuarioController.createUserController);
router.post('/addAdress/:id', authMiddleware, validaId, usuarioController.addAdressUserController);
router.post('/addPedido/:id', authMiddleware, validaId, usuarioController.addPedidoUserController);

// Rotas PUT
router.put('/update/:id', authMiddleware, validaId, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/remove/:id', authMiddleware, validaId, usuarioController.removeUserController);
router.delete('/removeAdress', authMiddleware, usuarioController.removeAdressUserController);
router.delete('/removePedido/:id', authMiddleware, validaId, usuarioController.removePedidoUserController);

module.exports = router;