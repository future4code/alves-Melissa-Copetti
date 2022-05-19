// 1- *exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1. Leia o código abaixo:
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Ele pergunta ao usuário um número, depois testa se o número é par. Se for, ele retorna no console "passou no teste", se não for, retorna "não passou no teste"

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Para os números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// Para os números ímpares.



// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//             /break
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// Para imprimir o preço de uma fruta que o usuário tem interesse

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta  é R$ 5 ----> porque ele não quebrou no resultado da Pêra, apresentando o resultado seguinte

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
//Pedindo ao usuário para digitar o primeiro número.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// se for 10, "Esse número passou no teste"
// se for -10, não retornará nada, pois é false.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// sim, porque a variável "mensagem" ficou disponível só dentro da função. Todo o conteúdo impresso estará dentro do bloco if, que é o que está entre chaves. Para não dar erro, a função deveria ser chamada antes, então o console.log imprimiria o conteúdo solicitado.

// - **exercícios de escrita de código**
//     1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

const idadeUsuario = +prompt("Qual é a sua idade?")
function podeDirigir(idadeUsuario){
if(idadeUsuario>=18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}
}
podeDirigir(idadeUsuario)

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

alert("Por favor, digite M (matutino) ou V (Vespertino) ou N (Noturno)")
 const turnoDoAluno1 = prompt("Em que turno você estuda?").toLocaleUpperCase

if (turnoDoAluno1==='M'){
    console.log('Bom dia!')
}else if(turnoDoAluno1==='V'){
    console.log('Boa tarde!')
} else if (turnoDoAluno1==='N'){
    console.log('Boa Noite')
}

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// alert("Por favor, digite M (matutino) ou V (Vespertino) ou N (Noturno)")
// const turnoDoAluno2 = prompt("Em que turno você estuda?").toUpperCase()

switch (turnoDoAluno2) {
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
}

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let vaiVerFilme = prompt("Qual o gênero de filme que você vai assistir?")
let valorIngresso = +prompt("Qual é o valor do ingresso?")

if(vaiVerFilme === "fantasia",valorIngresso<15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

// - Desafios
    // 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.

    vaiVerFilme = prompt("Qual o gênero de filme que você vai assistir?")
    valorIngresso = +prompt("Qual é o valor do ingresso?")
    
    if(vaiVerFilme === "fantasia",valorIngresso<15){
        const lanchinho = prompt("Qual lanchinho você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanchinho}`)
    }else{
        console.log("Escolha outro filme :(") 
    }

