// 1. Leia o código abaixo
    
// 
//    function minhaFuncao(variavel) {
//             	return variavel * 5
//     }
    
//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10))
//     
    
//     a) O que vai ser impresso no console? ------> 10 50
    
//     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? -------> nada
    
// 2. Leia o código abaixo
    
    // let textoDoUsuario = prompt("Insira um texto"); 
    
    // const outraFuncao = function(texto) {
    // 	return texto.toLowerCase().includes("cenoura")
    // }
    
    // const resposta = outraFuncao(textoDoUsuario)
    // console.log(resposta) 
//     ```
    
//     a. Explique o que essa função faz e qual é sua utilidade
// ----> a função faz o texto todo ficar em minúsculas e pergunta se na resposta existe a string "cenoura", sendo a resposta true ou false.
    
//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura` ----> true
//          ii.  `CENOURA é bom pra vista` ----> true
// //          iii. `Cenouras crescem na terra`----> false




// - **Exercícios de escrita de código**
//     1. Escreva as funções explicadas abaixo:
        
//         a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        
//         ```
//         "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//         ```
        
//         Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

let nome = prompt("Qual o seu nome?")
    let idade = +prompt("Qual a sua idade")
    let cidade = prompt("Qual a sua cidade?")
    let profissão = prompt ("você é estudante?")
let dadosPessoais = () => {
    console.log("Eu sou",nome,"tenho",idade,"anos,","moro em",cidade,"e",profissão)
}
 dadosPessoais()   



//         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
        
let frase1 = (nome,idade,endereço,profissão) => {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`;
}
console.log(frase1("Laura","23","Sorocaba","dentista"));


//         
        
//     2. Escreva as funções explicadas abaixo:
        
//         a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somar(num1,num2) {
    let resultado = num1+num2;
    return resultado;

}
console.log(somar(3,5))
        
//         b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function maiorOuIgual(num1,num2){
    let resposta = num1>=num2;
    return resposta
}
console.log(maiorOuIgual(9,30))

//         c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function sePar(num1){
    resposta = num1%2==0;
return resposta;
}
console.log(sePar(250));

//         d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function mensagem (palavra){
let tamanho = palavra.length;
let maiuscula = palavra.toUpperCase();
console.log(tamanho,maiuscula)
}
mensagem("Óleo de peixe em cápsula")

//     3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

function soma (num1,num2){
let resultado = num1+num2;
return resultado;
}
function subtração (num1,num2){
let resultado1 = num1-num2;
 return resultado1;
}
function divisão (num1,num2){
let resultado2 = num1/num2
return resultado2;
}
function multiplicação (num1,num2){
let resultado3 = num1*num2
return resultado3
    
 }
num1 = prompt("Insira um número")
num2 = prompt("Insira outro número")
console.log(num1,num2)
console.log(soma(num1,num2))
console.log(subtração(num1,num2))
console.log(multiplicação(num1,num2))
console.log(divisão(num1,num2))


