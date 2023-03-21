const Usuario = require('../model/Usuario');
const Pedido = require('../model/Pedido');

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
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push:{
                endereco: endereco,
            },
        },
        {
            rawResult: true,
        }
    );
}

const removeAdressService = (id, adressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                endereco: {
                    _id: adressId,
                },
            },
        },
        {
            rawResult: true,
        }
    );
}

const addPedidoUserService = (id, pedido) => {
    
}

const removePedidoUserService = (pedido) => {
    
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addAdressService,
    removeAdressService,
    addPedidoUserService,
    removePedidoUserService
};