const router = require("express").Router();

const compraController = require("../controller/compra.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaCompra} = require("../middleware/validacao.midd");

router.get("/find/:id", authMiddleware, compraController.findCompraByIdController);
router.get("/findAll", authMiddleware, compraController.findAllCompraController);

router.post("/create", authMiddleware, validaCompra, compraController.createCompraController);

router.delete("/delete/:id", authMiddleware, compraController.deleteCompraController);

router.patch("/updateStatus/:id", authMiddleware, compraController.updateStatusCompraController);

module.exports = router;