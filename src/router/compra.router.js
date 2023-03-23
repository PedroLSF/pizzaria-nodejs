const router = require("express").Router();

const compraController = require("../controller/compra.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaCompra, validaId} = require("../middleware/validacao.midd");

router.get("/find/:id", authMiddleware, validaId, compraController.findCompraByIdController);
router.get("/findAll", authMiddleware, compraController.findAllCompraController);

router.post("/create", authMiddleware, validaCompra, compraController.createCompraController);

router.delete("/delete/:id", authMiddleware, validaId, compraController.deleteCompraController);

router.patch("/updateStatus/:id", authMiddleware, validaId, compraController.updateStatusCompraController);

module.exports = router;