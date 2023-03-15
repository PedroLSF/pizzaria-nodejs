const express = require("express");
const connectToDatabase = require("./src/database/database");

const app = express();

const port = 8080;

app.use(express.json());

connectToDatabase();

app.get("/", (req,res) => {
    res.send({
        message: "Bem Vindo a nossa pizzaria"
    });
});

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})