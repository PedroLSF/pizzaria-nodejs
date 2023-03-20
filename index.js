const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); // Conexão com o Banco
const usuario = require('./src/router/usuario.router'); // Arquivo de Rota do Usuário 
const auth = require('./src/router/auth.router'); // Arquivo de Rota de Auth 
const pedido = require('./src/router/pedido.router'); // Arquivo de Rota de Pedido


const app = express();

const port = 8080;

app.use(express.json());

connectToDatabase(); // Conectando com o Banco

app.use("/usuario", usuario); // Chamando as rotas do Usuario
app.use("/auth", auth); // Chamando as rotas de Auth
app.use("/pedido", pedido); // Chamando as rotas de Pedido


app.get("/", (req,res) => {
    res.send({
        message: "Bem Vindo a nossa pizzaria"
    });
});

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})