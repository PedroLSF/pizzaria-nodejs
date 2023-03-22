const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    pizzas: {type: String, required: true},
    imagem: {type: String, required: true},
    bebida: {type: String, required: true},
    valor: {type: Number, required: true},
    createdAt: {type: Date, required: true, default: Date.now()},
});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;