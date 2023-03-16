const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get('/findById/:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

router.post('/create', usuarioController.createUserController);
router.post('/addAdress/:id', usuarioController.addAdressUserController);
router.post('/addPedido/:id', usuarioController.addPedidoUserController);

router.put('/update/:id', usuarioController.updateUserController);

router.delete('/remove/:id', usuarioController.deleteUserController);
router.delete('/removeAdress', usuarioController.removeAdressUserController);
router.delete('/removePedido', usuarioController.removePedidoUserController);

module.exports = router;