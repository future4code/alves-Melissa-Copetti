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

if (confirm("Quer iniciar uma nova rodada?")) {

   const carta = comprarCarta();
   let resultado1 = (console.log(`Usuario - ${carta.texto}  ${carta.texto} - pontuação ${carta.valor + carta.valor}`))
   let resultado2 = (console.log(`Computador - ${carta.texto}  ${carta.texto} - pontuação ${carta.valor + carta.valor}`))

   if (resultado1 === resultado2) {
      console.log("Empate!");
   } else if (resultado1 > resultado2) {
      console.log("o usuário ganhou!");
   } else if (resultado1 < resultado2) {
      console.log("o computador ganhou!");
   }

} else {
   console.log("O jogo acabou!")

}