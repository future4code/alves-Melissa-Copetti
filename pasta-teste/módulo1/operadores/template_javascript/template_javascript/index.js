
//Questão 1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)   -----> a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)   -----> b. true

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)  ------> c. false

// console.log("d. ", typeof resultado) -----> d. boolean

//Questão 2.

// O erro é que a soma será de duas strings, e vai declarar os números em vez de somar. A solução é transformar em Number.

// Questão 3. 

//  let primeiroNumero = Number(prompt("Digite um numero!"))
//  let segundoNumero = Number(prompt("Digite outro numero!"))

//  const soma = primeiroNumero + segundoNumero

//  console.log(soma)

//Exercícios de escrita de código

// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


const idade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo?"))
let result = idade>idadeAmigo
let difer = idade - idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?",result)
console.log(difer)


// 2. Faça um programa que:
    
//     a) Peça ao usuário que insira um número **par**
    
//     b) Imprima na console **o resto da divisão** desse número por 2.
    
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const numerPar = Number(prompt("Insira um número par"))
let restdiv = numerPar%2
console.log(restdiv)

const numerPar2 = Number(prompt("Insira outro número par"))
restdiv = numerPar2%2
console.log(restdiv)

let  numerPar3 = Number(prompt("Insira mais outro número par"))
restdiv = numerPar3%2
console.log(restdiv)

// o padrão é que o resultado é sempre zero

//nas primeras inserções o retorno foi '0' e quando foi inserido um número ímpar o retorno foi '1'

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas

const idadeAnos = Number(prompt("Qual a sua idade em anos?"))
console.log("A sua idade em anos é:",idadeAnos)

const idadeMeses = idadeAnos*12
console.log("A sua idade em meses é:", idadeMeses)

const idadeDias = idadeAnos*365
console.log("A sua idade em dias é:", idadeDias)

const idadeHoras = idadeDias*24
console.log("A sua idade em horas é:", idadeHoras)

// // 4.Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const numero1 = Number(prompt("Digite um número:"))
const numero2 = Number(prompt("Digite um número:"))

let conta = numero1>numero2
console.log("O primeiro numero é maior que segundo?",conta)

conta = numero1==numero2
console.log("O primeiro numero é igual ao segundo?",conta)

let diferente = numero1%numero2
conta = diferente === 0
console.log("O primeiro numero é divisível pelo segundo?",conta)

diferente = numero2%numero1
conta = diferente === 0
console.log("O segundo numero é divisível pelo primeiro?",conta)
