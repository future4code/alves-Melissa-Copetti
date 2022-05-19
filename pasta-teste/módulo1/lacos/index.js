// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

//     let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//O contador começará no zero, vai se repetir até 5 vezes, aí vai dar false e vai parar. A variável valor diz que é pra somar mais uma vez o número do contador, então fica 10. 

// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) O que vai ser impresso no console?

// A condicional diz que é tru se numero for maior que 18, então o contador vai rodar todos os números maiores de 18 de dentro da array, portanto, vai imprimir 
// 19
// 21
// 23
// 25
// 27
// 30

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?



//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// seria impresso:
// *
// **
// ***
// ****
// seria impresso 4 vezes a quantidade total, aí a quantidade total foi substituída por asteriscos, e a variável linha mandou somar mais um a cada repetição, então ele somou.

// - **Exercícios de escrita de código**
//     1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//         a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//         b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// let seTemPet = +prompt("Quantos animais de estimação você tem?")
// let nomeDosPets = ""
// let animalDeEstimacao = seTemPet
// let indice = 0

// function animal (animalDeEstimacao) {
//    if(animalDeEstimacao===0) {
//        console.log("Que pena! Você pode adotar um pet!")
//    }else
//    while (animalDeEstimacao >= indice) {
//  nomeDosPets = prompt("Digite o nome do sei bichinho")
//  console.log(nomeDosPets)
//  indice++
//    }
// }
// animal[seTemPet]


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//     a) Escreva um programa que **imprime** cada um dos valores do array original.
    
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let arrayOriginal = [1,2,3,4,5]
// indice = ""
// for(let indice = 0; indice<arrayOriginal.length; indice++){
// console.log(arrayOriginal[indice])}

// let arrayOriginal = [1,2,3,4,5]
// indice = ""
// for(let indice = 0; indice<arrayOriginal.length; indice++){
// console.log(arrayOriginal[indice]/10)}

// let arrayOriginal = [1,2,3,4,5]
// indice = ""
// let novaArray = arrayOriginal%2
// for(let indice = 0; indice<novaArray.length; indice++){
// console.log(novaArray[indice])}

