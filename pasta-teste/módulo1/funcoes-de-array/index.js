// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1.  Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) O que vai ser impresso no console?
// será impresso:
// object 1 
//nome: Amanda Rangel
// apelido: Mandi
// object 2
// nome: Laís Petra
// apelido: Laura 
// object 3 
// nome: Letícia Chijo
// apelido: Chijo
// array 1 [1]{ nome: "Amanda Rangel", apelido: "Mandi" }
// array 2 [2]{ nome: "Laís Petra", apelido: "Laura" }
// array 3 [3]{ nome: "Letícia Chijo", apelido: "Chijo" }

// primeiro vai imprimir os objetos, depos as posiçoes e depois as arrays inteiras

//2.Leia o código abaixo

//  const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB) 

//a) O que vai ser impresso no console?

// (3)[Amanda Rangel, Laís Petra, Letícia Chijo]

// vai imprimir uma array só com os objetos solicitados.

//3. Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

// (2) [Mandi, Laura]

//- **Exercícios de escrita de código**
//   1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

let pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//a) Crie um novo array que contenha apenas o nome dos doguinhos

 pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//  cachorrinhos = pets.filter((dog, indice, array) => {
//     return dog.nome
// }).map((dog)=>{
//     return dog.nome
// })
// console.log(cachorrinhos)



 pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]


const cachorrinhos = pets.filter((dog, indice, array) => {
    return dog.nome
}).map((dog) => {
    return dog.nome
})
console.log(cachorrinhos)

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

const cachorroSalsicha = pets.filter((dog, indice, array) => {
    return dog.raca === "Salsicha"
}).map((dog) => {
    return dog.nome
})
console.log(cachorroSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const cachorroPudle = pets.filter((dog, indice, array) => {
    return dog.raca === "Poodle"
}).map((dog) => {
    return dog.nome
})

console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorroPudle[0]}!`)

console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorroPudle[1]}!`)

// 2.Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//  a) Crie um novo array que contenha apenas o nome de cada item

const produto1 = produtos.filter((coisa, index, array) => {
    return coisa.nome
}).map((coisa) => {
    return coisa.nome
})
console.log(produto1)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const produtos1 = produtos.map((coisa, index, array) => {
//     let nome: coisa.nome
//     let preco: coisa.preco * 0,95
//     return nome, precoFinal
// })
// console.log(produtos1)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

let nomeDosProdutos = produtos.filter((produto, index, array)=>{
    return produto.categoria.toLocaleLowerCase() === "bebidas"
}) .map((produto)=>{
    return produto.nome
})
console.log(nomeDosProdutos)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

nomeDosProdutos = produtos.filter((produto, index, array)=>{
    return produto.nome.includes(searchstring="Ypê")
})

console.log(nomeDosProdutos)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// let novaFrase = produtos.filter((produto)=>{
//    return produto.nome.includes(searchstring="Ypê")
     
// }).filter((produto)=>{
//     return produto.preco
// })
// console.log(`Compre ${novaFrase.nome} por ${novaFrase.preco}`)