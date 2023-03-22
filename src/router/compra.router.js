const router = require("express").Router();

const compraController = require("../controller/compra.controller");
const authMiddleware = require("../middleware/auth.midd");

router.get("/find/:id", authMiddleware, compraController.findCompraByIdController);
router.get("/findAll", authMiddleware, compraController.findAllCompraController);

router.post("/create", authMiddleware, compraController.createCompraController);

router.delete("/delete/:id", authMiddleware, compraController.deleteCompraController);

router.patch("/updateStatus/:id", authMiddleware, compraController.updateStatusCompraController);

module.exports = router;