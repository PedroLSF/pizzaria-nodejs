const Usuario = require('../model/Usuario');

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = () => {
    return Usuario.find();
}

const createUserService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, {returnDocument: "after"});
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

const addAdressService = (id, endereco) => {
    
}

const removeAdressService = (id) => {
    
}

const addPedidoService = (id, pedido) => {
    
}

const removePedidoService = (pedido) => {
    
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addAdressService,
    removeAdressService,
    addPedidoService,
    removePedidoService
};