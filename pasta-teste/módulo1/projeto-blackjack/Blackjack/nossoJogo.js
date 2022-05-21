/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
} else {
	console.log("O jogo acabou!")
}
let A = 11
let J = 10
let Q = 10
let K = 10
const cartas = [
 {numero:A, naipe: "♥️"}, {numero:2, naipe: "♥️"}, {numero:3, naipe: "♥️"}, {numero:4, naipe: "♥️"}, {numero:5, naipe: "♥️"}, {numero:7, naipe: "♥️"}, {numero:7, naipe: "♥️"}, {numero:8, naipe: "♥️"}, {numero:9, naipe: "♥️"}, {numero:10, naipe: "♥️"}, {numero:J, naipe: "♥️"}, {numero:Q, naipe: "♥️"}, {numero:K, naipe: "♥️"}, {numero:A, naipe: "♣️"}, {numero:2, naipe: "♣️"}, {numero:3, naipe: "♣️"}, {numero:4, naipe: "♣️"}, {numero:5, naipe: "♣️"}, {numero:7, naipe: "♣️"}, {numero:7, naipe: "♣️"}, {numero:8, naipe: "♣️"}, {numero:9, naipe: "♣️"}, {numero:10, naipe: "♣️"}, {numero:J, naipe: "♣️"}, {numero:Q, naipe: "♣️"}, {numero:K, naipe: "♣️"},{numero:A, naipe: "♦️"}, {numero:2, naipe: "♦️"}, {numero:3, naipe: "♦️"}, {numero:4, naipe: "♦️"}, {numero:5, naipe: "♦️"}, {numero:7, naipe: "♦️"}, {numero:7, naipe: "♦️"}, {numero:8, naipe: "♦️"}, {numero:9, naipe: "♦️"}, {numero:10, naipe: "♦️"}, {numero:J, naipe: "♦️"}, {numero:Q, naipe: "♦️"}, {numero:K, naipe: "♦️"}, {numero:A, naipe: "♠️"}, {numero:2, naipe: "♠️"}, {numero:3, naipe: "♠️"}, {numero:4, naipe: "♠️"}, {numero:5, naipe: "♠️"}, {numero:7, naipe: "♠️"}, {numero:7, naipe: "♠️"}, {numero:8, naipe: "♠️"}, {numero:9, naipe: "♠️"}, {numero:10, naipe: "♠️"}, {numero:J, naipe: "♠️"}, {numero:Q, naipe: "♠️"}, {numero:K, naipe: "♠️"}]



 const carta = comprarCarta((cartas)=>{
let cartaComprada = cartas.numero.floor(cartas.random());
let naipeDaCarta = cartas.naipe.floor(cartas.random());
let compraJogo = (cartaComprada,naipeDaCarta)
let jogoFeito = (compraJogo + compraJogo)
return jogoFeito
 })
 console.log(carta)