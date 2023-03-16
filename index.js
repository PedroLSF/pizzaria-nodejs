const express = require("express");
const connectToDatabase = require("./src/database/database");
const usuario = require('./src/router/usuario.router');

const app = express();

const port = 8080;

app.use(express.json());

connectToDatabase();

app.use("/usuario", usuario);

app.get("/", (req,res) => {
    res.send({
        message: "Bem Vindo a nossa pizzaria"
    });
});

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})