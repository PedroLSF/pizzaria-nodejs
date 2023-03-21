const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({

    nome: {type: String, required: true},
    numero: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    senha: {type: String, unique: true, required: true},
    endereco: [
        {
            rua: {type: String, required: true},
            numero: {type: String, required: true},
            complemento: {type: String, required: false},
            createAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    pedido: [
        {   
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, uniue: true, ref: "pedidos"},
            pizzas: {type: String, required: true},
            imagem: {type: String, required: true},
            bebida: {type: String, required: true},
            valor: {type: Number, required: true},
            createAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    createAt: {type: Date, required: true, default: Date.now()},
    admin: {type: Boolean, require: true, defaul: false}
});

UsuarioSchema.pre("save", async function(next) {
    if(this.senha){
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate", async function(next) {
    if(this._update.senha){
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
})


const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;