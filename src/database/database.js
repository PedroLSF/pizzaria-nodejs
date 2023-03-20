const mongoose = require("mongoose");

function connectToDatabase(){
    mongoose.connect(process.env.URLDATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB Conectado");
    }).catch((err) => {
        return console.log(`Erro: ${err}`);
    })
}

module.exports = connectToDatabase;