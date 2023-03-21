const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.midd");


// Rotas GET
router.get('/findById/:id', authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware,usuarioController.findAllUsersController);


// Rotas POST
router.post('/create', usuarioController.createUserController);
router.post('/addAdress/:id', usuarioController.addAdressUserController);
router.post('/addPedido/:id', usuarioController.addPedidoUserController);

// Rotas PUT
router.put('/update/:id', usuarioController.updateUserController);

// Rotas DELETE
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.removeAdressUserController);
router.delete('/removePedido/:id', usuarioController.removePedidoUserController);

module.exports = router;