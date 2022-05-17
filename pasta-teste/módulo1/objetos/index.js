// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1.  Leia o código abaixo
        
//         
        // const filme = {
        // 	nome: "Auto da Compadecida", 
        // 	ano: 2000, 
        // 	elenco: [
        // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        // 		"Virginia Cavendish"
        // 		], 
        // 	transmissoesHoje: [
        // 		{canal: "Telecine", horario: "21h"}, 
        // 		{canal: "Canal Brasil", horario: "19h"}, 
        // 		{canal: "Globo", horario: "14h"}
        // 		]
        // }
        
        // console.log(filme.elenco[0])
        // console.log(filme.elenco[filme.elenco.length - 1])
        // console.log(filme.transmissoesHoje[2])
//         ```
        
//         a) O que vai ser impresso no console?
    //    "} Será impresso:
    //     Matheus Nachtergaele
    //     Virginia Cavendish
    // canal: "Canal Brasil" 
    // horario: "19h
//     

// 2. Leia o código abaixo
        
        // const cachorro = {
        // 	nome: "Juca", 
        // 	idade: 3, 
        // 	raca: "SRD"
        // }
        
        // const gato = {...cachorro, nome: "Juba"}
        
        // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        // console.log(cachorro)
        // console.log(gato)
        // console.log(tartaruga)
//         ```
        
//         a) O que vai ser impresso no console?
// nome: Juca
// idade:3
// raca: "SRD"

// nome: Juba
// idade:3
// raca: "SRD"

//nome: Jubo
// idade:3
// raca: "SRD" 
        
//         b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Reproduz todas as chaves do objeto citado depois dos três pontinhos, substitui as propriedades descritas e mantém as que não tiveram proposta de alteração.

// 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
// ```

// a) O que vai ser impresso no console?
// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// porque "false" é a propriedade em formato booleano de "backender"
// undefined porque não existe a chave "altura" no objeto

// - **Exercícios de escrita de código**
    // 1. Resolva os passos a seguir: 
        
        // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

        // Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"


const individuo = {
    nome: "Ana",
    apelidos: ["Anita", "Aninha", "Anazinha"],
}

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoa1 = {
    nome:"Paulo",
    idade:23,
    profissao:"pedreiro"

}

function essaFuncao(pessoa1){
console.log ([pessoa1.nome,pessoa1.nome.length (),pessoa1.idade,pessoa1.profissao,pessoa1.profissao.length()])
}
console.log(essaFuncao())

const pessoa2 = {
    ...pessoa1, 
}
    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`
//     - Exemplo
        
//         ```jsx
//         const pessoa = {
//         	nome: "Bruno", 
//           idade: 23, 
//         	profissao: "Instrutor"
//         }
        
//         minhaFuncao(pessoa)
        
//         // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//         ```
        
    
// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
//     - 💡  Dica
        
//         <aside>
//         💡 Aqui você deve usar o método **push()**
        
//         </aside>
        
    
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    
//     - 💡  Dica
        
//         Deve aparecer algo assim no console do seu navegador:
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png)
        
//         Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png)