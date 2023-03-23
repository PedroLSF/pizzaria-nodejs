const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");

const authMiddleware = require("../middleware/auth.midd");
const {validaPedido, validaId} = require("../middleware/validacao.midd");
const paginacao = require("../middleware/paginacao.midd");

router.get("/find/:id", authMiddleware, validaId, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);

router.put("/update/:id", authMiddleware, validaId, validaPedido, pedidoController.updatePedidoController);

router.delete("/delete/:id", authMiddleware, validaId, pedidoController.deletePedidoController);

module.exports = router;