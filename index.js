const express = require("express");
const connectToDatabase = require("./src/database/database"); // Conexão com o Banco
const usuario = require('./src/router/usuario.router'); // Arquivo de Rota do Usuário 

const app = express();

const port = 8080;

app.use(express.json());

connectToDatabase(); // Conectando com o Banco

app.use("/usuario", usuario); // Chamando as rotas do usuario

app.get("/", (req,res) => {
    res.send({
        message: "Bem Vindo a nossa pizzaria"
    });
});

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})