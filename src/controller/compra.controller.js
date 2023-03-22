const compraService = require("../service/compra.service");

const findCompraByIdController = async (req, res) => {
    try{
        res.status(200).send(await compraService.findCompraByIdService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const findAllCompraController = async (req, res) => {
    try{
        res.status(200).send(await compraService.findAllCompraService());
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const createCompraController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userid,
        }
        res.status(201).send(await compraService.createCompraService(corpo));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const deleteCompraController = async (req, res) => {
    try{
        res.status(200).send(await compraService.deleteCompraService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const updateStatusCompraController = async (req, res) => {
    try{
        res.status(200).send(await compraService.updateStatusCompraService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

module.exports = {
    findCompraByIdController,
    findAllCompraController,
    createCompraController,
    deleteCompraController,
    updateStatusCompraController
}