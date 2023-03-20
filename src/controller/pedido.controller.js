const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) =>{
    try{
        res.send(await pedidoService.findPedidoByIdService(req.params.id));
    }catch{
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const findAllPedidoController = async (req, res) =>{
    try{
        res.send(await pedidoService.findAllPedidoService());
    }catch{
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const createPedidoController = async (req, res) =>{
    try{
        corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date(),
        }
        res.send(await pedidoService.createPedidoService(corpo));
    }catch{
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const updatePedidoController = async (req, res) =>{
    try{
        res.send(await pedidoService.updatePedidoService(req.params.id, req.params.body));
    }catch{
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
}

const deletePedidoController = async (req, res) =>{
    try{
        res.send(await pedidoService.deletePedidoService(req.params.id));
    }catch{
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