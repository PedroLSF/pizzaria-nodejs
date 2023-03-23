const router = require("express").Router();

const authMiddleware = require("../middleware/auth.midd");
const {validaCarrinho, validaId, validaCarrinhoCompra} = require("../middleware/validacao.midd");
const paginacao = require("../middleware/paginacao.midd");

const carrinhoController = require("../controller/carrinho.controller");

router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhoController);

router.post("/create", authMiddleware, validaCarrinhoCompra, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoController);

module.exports = router;