const jwt = require("jsonwebtoken");
const {findUserByIdService, updateUserService} = require("../service/usuario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message: "O Token não foi informado"});
    }

    const parts = authHeader.split(" "); // [Bearer, token]

    if(parts.length !== 2){
        return res.status(401).send({ message: "Token Inválido"});
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "Token Mal Formado"});
    }

    jwt.verify(token, "a73keme02mpab3m185vakel18", async (err, decoded) => {
        if(err){
            return res.status(500).send({ message: "Token Inválido"});
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({ message: "Token Inválido"});
        }

        req.userid = decoded.id;

        return next();

    });
}