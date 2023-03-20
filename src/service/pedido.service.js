const Pedido = require("../model/Pedido");

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidoService = () => {
    return Pedido.find();
}

const createPedidoService = (body) => {
    return Pedido.create(body);
}

const updatePedidoService = (id, body) => {
    return Pedido.findByIdAndUpdate(id, body, {returnDocument: "after"});
}

const deletePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
}


module.exports = {
    findPedidoByIdService,
    findAllPedidoService,
    createPedidoService,
    updatePedidoService,
    deletePedidoService
};