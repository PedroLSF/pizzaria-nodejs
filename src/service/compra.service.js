const Compra = require("../model/Compra");

const findCompraByIdService = (id) => {
    return Compra.findById(id);
};

const findAllCompraService = () => {
    return Compra.find();
};

const createCompraService = (body) => {
    return Compra.create(body);
};

const deleteCompraService = (id) => {
    return Compra.findByIdAndRemove(id);
};

const updateStatusCompraService = (id) => {
    return Compra.findOneAndUpdate({_id: id}, {$set: {concluido: true}});
};

module.exports = {
    findCompraByIdService,
    findAllCompraService,
    createCompraService,
    deleteCompraService,
    updateStatusCompraService
}