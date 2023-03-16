const findUserByIdController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const findAllUsersController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const createUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const updateUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const deleteUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const addAdressUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const removeAdressUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const addPedidoUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const removePedidoUserController = async (req, res) => {
    try{




    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    deleteUserController,
    addAdressUserController,
    removeAdressUserController,
    addPedidoUserController,
    removePedidoUserController
}