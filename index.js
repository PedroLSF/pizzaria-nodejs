const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); // Conexão com o Banco
const usuario = require('./src/router/usuario.router'); // Arquivo de Rota do Usuário 
const auth = require('./src/router/auth.router'); // Arquivo de Rota de Auth 
const pedido = require('./src/router/pedido.router'); // Arquivo de Rota de Pedido
const carrinho = require('./src/router/carrinho.router'); // Arquivo de Rota de Carrinho
const compra = require('./src/router/compra.router'); // Arquivo de Rota de Compra
const docs = require('./src/router/docs.router'); // Arquivo de Rota de Docs


const app = express();

const port = 8080;

app.use(express.json());

connectToDatabase(); // Conectando com o Banco

app.use("/usuario", usuario); // Chamando as rotas do Usuario
app.use("/auth", auth); // Chamando as rotas de Auth
app.use("/pedido", pedido); // Chamando as rotas de Pedido
app.use("/carrinho", carrinho); // Chamando as rotas de Carrinho
app.use("/compra", compra); // Chamando as rotas de Compra
app.use("/docs", docs); // Chamando as rotas de Docs


app.get("/", (req,res) => {
    res.send({
        message: "Bem Vindo a nossa pizzaria"
    });
});

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})