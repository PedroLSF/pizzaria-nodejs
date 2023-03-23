const ObjectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({message: "Campo nome precisa ser preenchido"})
    }
    if(!req.body.email){
        return res.status(400).send({message: "Campo email precisa ser preenchido"})
    }
    if(!req.body.numero){
        return res.status(400).send({message: "Campo numero precisa ser preenchido"})
    }
    if(!req.body.senha){
        return res.status(400).send({message: "Campo senha precisa ser preenchido"})
    }
    if(!req.body.admin){
        return res.status(400).send({message: "Campo admin precisa ser preenchido"});
    }

    return next();
}

const validaEndereco = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if(!value.rua){
            erros.push(`'${key+1} - rua'`);
        }
        if(!value.numero){
            erros.push(`'${key+1} - numero'`);
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

const validaPedido = (req, res, next) => {
    let erros = []; // Variavel com os Erros
    if(!req.body.pizzas){
        erros.push("Pizza");
    }
    if(!req.body.imagem){
        erros.push("Imagem");
    }
    if(!req.body.bebida){
        erros.push("Bebida");
    }
    if(!req.body.valor){
        erros.push("Valor");
    }

    // Testa se existe o Erro e caso tenha, escolhe se é 1 ou mais erros
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

const validaCompra = (req, res, next) => {
    let erros = []; // Variavel com os Erros
    if(!req.body.precoTotal){
        erros.push("Preco Total");
    }
    if(req.body.concluido == undefined){
        erros.push("Concluido");
    }

    // Testa se existe o Erro e caso tenha, escolhe se é 1 ou mais erros
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = []; // Variavel com os Erros
    if(!req.body.precoTotal){
        erros.push("Preco Total");
    }

    // Testa se existe o Erro e caso tenha, escolhe se é 1 ou mais erros
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

const validaId = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({message: `O ID não corresponde ao formato correto`});
    }
}

const valida_IdBody = (req, res, next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({message: `O ID não corresponde ao formato correto`});
    }
}

const validaLogin = (req, res, next) => {
    let erros = []; // Variavel com os Erros
    if(!req.body.email){
        erros.push("Email");
    }
    if(!req.body.senha){
        erros.push("Senha");
    }

    // Testa se existe o Erro e caso tenha, escolhe se é 1 ou mais erros
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

const validaCarrinhoCompra = (req, res, next) => {
    let erros = [];

    req.body.pedidos.map((value, key) => {
        if(!value._id){
            erros.push(`'${key+1} - _id'`);
        }
        if(!ObjectId.isValid(value._id)){
            erros.push(`'${key+1} - _id - tipo inválido'`);
        }
        if(!value.quantidade){
            erros.push(`'${key+1} - quantidade'`);
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

module.exports = {
    validaUsuario,
    validaEndereco,
    validaPedido,
    validaCompra,
    validaCarrinho,
    validaId,
    valida_IdBody,
    validaLogin,
    validaCarrinhoCompra
}