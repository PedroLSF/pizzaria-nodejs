const router = require("express").Router();
const authMiddleware = require("../middleware/auth.midd");

const carrinhoController = require("../controller/carrinho.controller");

router.get("/find/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);

router.post("/create", authMiddleware, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, carrinhoController.deleteCarrinhoController);

module.exports = router;