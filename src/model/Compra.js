const mongoose = require("mongoose");   

const CompraSchema = new mongoose.Schema({
    pedidos: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pedidos"},
            quantidade: {type: Number, required: true},
        },
    ],
    createdAt: {type: Date, required: true, default: Date.now()},
    precoTotal: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "usuarios"},
    concluido: {type: Boolean, required: true}
});

const Compra = mongoose.model("compras", CompraSchema);

module.exports = Compra;