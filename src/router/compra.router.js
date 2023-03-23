const router = require("express").Router();

const compraController = require("../controller/compra.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaCompra, validaId, validaCarrinhoCompra} = require("../middleware/validacao.midd");
const paginacao = require("../middleware/paginacao.midd");

router.get("/find/:id", authMiddleware, validaId, compraController.findCompraByIdController);
router.get("/findAll", authMiddleware, paginacao, compraController.findAllCompraController);

router.post("/create", authMiddleware, validaCarrinhoCompra, validaCompra, compraController.createCompraController);

router.delete("/delete/:id", authMiddleware, validaId, compraController.deleteCompraController);

router.patch("/updateStatus/:id", authMiddleware, validaId, compraController.updateStatusCompraController);

module.exports = router;