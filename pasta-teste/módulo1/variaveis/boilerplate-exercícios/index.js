/* questão 1
10
10 5
*/

/*questão 2
10 20
se 'c' não é variável, não será impressa, vai dar erro
*/

/* questão 3
let cargaHoraria = prompt("Quantas horas você trabalha por dia?")

let valorDiaTrabalhado = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${valorDiaTrabalhado/cargaHoraria} por hora`)

*/
const nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))

console.log(typeof nome)
console.log(typeof idade)

typeof nome
typeof idade
console.log("Olá", nome, "você tem", idade, "anos")

const estaUsandoRoupa = prompt("você está usando roupa?")
const usandoRoupaAzul = prompt("Você está usando roupa azul?")
const sapatoPreto = prompt("Você usa sapato preto?")

console.log(estaUsandoRoupa, usandoRoupaAzul, sapatoPreto)

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

const primeiroNumero = Number(prompt("coloque o número"))
const segundoNumero = Number(prompt("coloque o outro número"))
const soma = primeiroNumero + segundoNumero
const multiplica = primeiroNumero * segundoNumero
console.log("1. O primeiro número somado ao segundo número resulta em:", soma)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", multiplica)