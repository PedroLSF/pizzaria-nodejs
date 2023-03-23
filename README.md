# pizzaria-nodejs

O Código da Pizzaria Ultimato:

![Pizzaria](https://media.istockphoto.com/id/1145383503/pt/vetorial/logo-of-a-sketched-pizza-vector-illustration-on-black-background.jpg?s=170667a&w=0&k=20&c=ZuD2dva7Ry2sglqnxr3JtIUeXANr2f_wuJVSk8MqV74= "NodeJS")

Código Desenvolvido Em JavaScript:
![NodeJS](https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg "NodeJS")

## Instalação

1. Clone o Repositorio
2. Abra o terminal do VS Code
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Estamos utilizando Endpoints para realizar diversas atividades dentro da nossa API, segue uma lista:

* [Métodos de Usuário](/src/controller/usuario.controller.js)
* [Métodos de Pedido](/src/controller/pedido.controller.js)
* [Métodos de Compra](/src/controller/compra.controller.js)
* [Métodos de Carrinho](/src/controller/carrinho.controller.js)

A nossa API te devovle algumas respostas, elas podem ser:

| Codigo | resposta                                                      |
| :------- | --------------------------------------------------------------- |
| 200    | retorna um usuário válido                                   |
| 400    | retorna uma mensagem informando o erro                        |
| 401    | retorna o erro de autenticacao                                |
| 404    | retorna uma mensagem informando que não encontrou o usuário |

**Material de Estudo, desenvolvido por: [Pedro Lucas](https://github.com/PedroLSF)**
