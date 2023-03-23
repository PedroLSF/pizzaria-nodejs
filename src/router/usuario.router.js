const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaUsuario} = require("../middleware/validacao.midd");

// Rotas GET
router.get('/findById/:id', authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware,usuarioController.findAllUsersController);


// Rotas POST
router.post('/create', authMiddleware, validaUsuario, usuarioController.createUserController);
router.post('/addAdress/:id', authMiddleware, usuarioController.addAdressUserController);
router.post('/addPedido/:id', authMiddleware, usuarioController.addPedidoUserController);

// Rotas PUT
router.put('/update/:id', authMiddleware, validaUsuario, usuarioController.updateUserController);

// Rotas DELETE
router.delete('/remove/:id', authMiddleware, usuarioController.removeUserController);
router.delete('/removeAdress', authMiddleware, usuarioController.removeAdressUserController);
router.delete('/removePedido/:id', authMiddleware, usuarioController.removePedidoUserController);

module.exports = router;