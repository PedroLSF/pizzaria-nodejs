const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.midd");

router.get("/find/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware, pedidoController.createPedidoController);

router.put("/update/:id", authMiddleware, pedidoController.updatePedidoController);

router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController);

module.exports = router;