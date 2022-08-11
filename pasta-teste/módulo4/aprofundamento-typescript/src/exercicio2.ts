// - **Exercício 2**
    
//     Observe a função a seguir, escrita em JavaScript:
// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros:number[]) {
    

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }
type maiorMenor= {
    maior:number,
    menor:number,
    media:number
}
    const estatisticas:maiorMenor = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.table(obterEstatisticas([1,2,3,4,9,6,8]))

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// numeros:number[]
// a:number
// b:number
// maiorMenor: maior:number, menor:number,media:number
// estatisticas: maiorMenor

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

type Amostra ={
    numeros:number[],
    obterEstatisticas: (numeros:number[]) => {}
}
