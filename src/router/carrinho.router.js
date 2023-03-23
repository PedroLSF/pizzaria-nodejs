const router = require("express").Router();

const authMiddleware = require("../middleware/auth.midd");
const {validaCarrinho, validaId} = require("../middleware/validacao.midd");

const carrinhoController = require("../controller/carrinho.controller");

router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);

router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoController);

module.exports = router;