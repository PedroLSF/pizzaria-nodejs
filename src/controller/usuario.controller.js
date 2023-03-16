const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({message: "Usuario não encontrado"});
        }


    }catch(err){

        if(err.kind){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({message: "ID incorreto, tente novamente"});
        }
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const findAllUsersController = async (req, res) => {
    try{
        return res.status(200).send(await userService.findAllUsersService());
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message: "Campo nome precisa ser preenchido"})
        }
        if(!body.numero){
            return res.status(400).send({message: "Campo numero precisa ser preenchido"})
        }
        if(!body.endereco){
            return res.status(400).send({message: "Campo endereco precisa ser preenchido"})
        }
        if(!body.pedido){
            return res.status(400).send({message: "Campo pedido precisa ser preenchido"})
        }

        return res.status(201).send(await userService.createUserService(body)); 

    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const updateUserController = async (req, res) => {
    try{
        return res.send(await userService.updateUserService(req.params.id, req.body));
    }catch(err){
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({message: "Erro inesperado, tente novamente"});
    }
};

const removeUserController = async (req, res) => {
    try{
        const deletedUser = await userService.removeUserService(req.params.id);
        if(deletedUser.deletedCount > 0){
            return res.status(200).send({message: "Usuário Deletado"});
        }else{
            return res.status(404).send({message: "Usuário não encontrado"});
        }
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
    removeUserController,
    addAdressUserController,
    removeAdressUserController,
    addPedidoUserController,
    removePedidoUserController
}