const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) =>{
    try{
        res.send(await pedidoService.findPedidoByIdService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const findAllPedidoController = async (req, res) =>{
    try{
        res.send(await pedidoService.findAllPedidoService(req.query.limit, req.query.offset));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const createPedidoController = async (req, res) =>{
    try{
        corpo = {
            ...req.body,
            userId: req.userId,
        }
        res.status(201).send(await pedidoService.createPedidoService(corpo));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const updatePedidoController = async (req, res) =>{
    try{
        res.send(await pedidoService.updatePedidoService(req.params.id, req.body));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const deletePedidoController = async (req, res) =>{
    try{
        res.send(await pedidoService.deletePedidoService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

module.exports = {
    findPedidoByIdController,
    findAllPedidoController,
    createPedidoController,
    updatePedidoController,
    deletePedidoController
};