// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma(3,4))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
 altura = +prompt("Qual a altura?")
 largura = +prompt("Qual a largura?")
  const area = altura*largura
console.log(area)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
anoAtual= +prompt("Qual ano estamos?")
anoNascimento= +prompt("Em que ano nasceu?")
 const calculo = anoAtual - anoNascimento
  console.log(calculo)
}



// EXERCÍCIO 03
function calculaIMC(peso,altura) {
 let calculo = peso/(altura*altura)
return calculo
}
console.log(calculaIMC(85,1.8))
console.log(calculaIMC(70,1.65))
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
let NOME = prompt("qual seu nome?")
let IDADE = prompt("Qual a sua idade?")
let EMAIL = prompt("escreva seu e-mail:")
let frase = (`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)
console.log(frase)
return frase
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
let cor1= prompt("sua primeira cor favorita é?")
let cor2= prompt("sua segunda cor favorita é?")
let cor3= prompt("sua terceira cor favorita é?")
let cores = [cor1,cor2,cor3]
console.log(cores)
return cores
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
let maiuscula = string.toUpperCase()
return maiuscula
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const quantiaIngressos = custo / valorIngresso
console.log(quantiaIngressos)
return quantiaIngressos
}
calculaIngressosEspetaculo(3000,100)


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanho = string1.length === string2.length
return tamanho
}
console.log(checaStringsMesmoTamanho("pão","leite"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let elemento1 = array[0]
return elemento1
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimo = array[array.length-1]
  return ultimo
}
console.log(retornaUltimoElemento([1,3,9,25]))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let primeiro = array[0]
let ultimo =array[array.length-1]
array[0] = ultimo
array[array.length-1] = primeiro
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
let igualSemCase = string1.toLowerCase() === string2.toLowerCase()
return igualSemCase

}


// EXERCÍCIO 13
function checaRenovacaoRG() {



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}