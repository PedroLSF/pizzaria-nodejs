const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");


router.get('/findById/:id');
router.get('/findAll');

router.post('/create');
router.post('/addAdress/:id');
router.post('/addPedido/:id');

router.put('/update/:id');

router.delete('/remove/:id');
router.delete('/removeAdress');
router.delete('/removePedido');

module.exports = router;