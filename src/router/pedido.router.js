const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaPedido} = require("../middleware/validacao.midd");

router.get("/find/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);

router.put("/update/:id", authMiddleware, validaPedido, pedidoController.updatePedidoController);

router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController);

module.exports = router;