// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
// let array
// console.log('a. ', array) // ----> a. undefinided 

// array = null
// console.log('b. ', array) // ------> b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // ------> c. 11

// let i = 0
// console.log('d. ', array[i]) // ------->d. 3

// array[i+1] = 19
// console.log('e. ', array) // ------> e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) // ----->f. 8

// ```jsx
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// ```

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`? // -------> SUBI NUM ONIBUS EM MIRROCOS 27

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
// let nomeDoUsuario = prompt("Digite seu nome")
// let emailDoUsuario = prompt("Digite sei e-mail")
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
// const comidas = ['torrada','Massa','panqueca','rucula','maionese']
// console.log(comidas)
// console.log("Essas são as minhas comidas preferidas:"+'\n'+ comidas[0]+'\n'+comidas[1]+'\n'+comidas[2]+ '\n'+comidas[3]+'\n'+comidas[4])

// comidas[2] = prompt("Qual sua comida preferida?")
// console.log(comidas)



//3. Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array no console
// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array no console

const listaDeTarefas = []
let tar1 = prompt("Insira a primeira tarefa")
let tar2 = prompt("Insira a segunda tarefa")
let tar3 = prompt("insira a terceira tarefa")

listaDeTarefas.push(tar1)
listaDeTarefas.push(tar2)
listaDeTarefas.push(tar3)

console.log(listaDeTarefas)

let tar4 = prompt("Qual tarefa você deseja remover?")

listaDeTarefas.splice(tar4)
console.log(listaDeTarefas)