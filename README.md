# pizzaria-nodejs

O Código da Pizzaria Ultimato

Código Desenvolvido em Javascript
![NodeJS](https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg "NodeJS")

## Instalação

1. Clone o Repositorio
2. Abra o terminal do VS Code
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Estamos utilizando Endpoints para realizar diversas atividades dentro da nossa API, segue uma lista:

### Usuario

#### /findById


| Codigo | resposta                                                      |
| :------- | --------------------------------------------------------------- |
| 200    | retorna um usuário válido                                   |
| 400    | retorna uma mensagem informando o erro                        |
| 401    | retorna o erro de autenticacao                                |
| 404    | retorna uma mensagem informando que não encontrou o usuário |

Trecho do codigo do controller findByID:

````
javascript
const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({message: "Usuario nao encontrado, tente novamente"});
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == "ObjectId"){
            return res.status(400).send({ message: `ID informado, esta incorreto, tente novamente!`}); 
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};
````

### Produto

Todos os endpoints de produto listado abaixo