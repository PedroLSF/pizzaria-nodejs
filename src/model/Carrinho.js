const mongoose = require("mongoose");   

const CarrinhoSchema = new mongoose.Schema({
    pedidos: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pedidos"},
            quantidade: {type: Number, required: true},
        },
    ],
    createdAt: {type: Date, required: true, default: Date.now()},
    precoTotal: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "usuarios"}
});

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;