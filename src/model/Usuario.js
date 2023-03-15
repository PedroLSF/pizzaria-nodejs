const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({

    nome: {type: String, required: true},
    numero: {type: String, unique: true, required: true},
    endereco: [
        {
            rua: {type: String, required: true},
            numero: {type: String, required: true},
            complemento: {type: String, required: false},
            createAt: {type: Date, required: true}
        }
    ],
    imagem: {type: String},
    pedido: [
        {

            pizzas: {type: mongoose.Schema.Types.ObjectId, required: true, uniue: true, ref: "pedidos"},
            bebida: {type: String},
        }
    ],
    createAt: {type: Date, required: true},
    admin: {type: Boolean, require: true, defaul: false}
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;