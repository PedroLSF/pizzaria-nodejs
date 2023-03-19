const mongoose = require("mongoose");

function connectToDatabase(){
    mongoose.connect('mongodb://localhost:27017/pizzaria',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB Conectado");
    }).catch((err) => {
        return console.log(`Erro: ${err}`);
    })
}

module.exports = connectToDatabase;