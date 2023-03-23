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
        if(erros.length == 1 > 1){
            return res.status(400).send({message: `Campos ${erros} precisam ser preenchidos`});
        }else{
            return res.status(400).send({message: `Campo ${erros} precisa ser preenchido`});
        }
    }
}

module.exports = {
    validaUsuario,
    validaPedido
}