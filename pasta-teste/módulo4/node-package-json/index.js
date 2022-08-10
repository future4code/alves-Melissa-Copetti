
// Exercício 1:
//a) cria console.log("string", process.argv['valor do argumento']) ou criar um comando dentro do script do tipo "comando": "node index.js argumento" e rodar npm start comando.

//b)
// const nome = (process.argv[2])
// const idade = +( process.argv[3])
//c)
// const idadeFutura = (idade+7)

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`)

const valor1 = +(process.argv[3]);
const valor2 = +(process.argv[4]);
const calculo = process.argv[2];

const conta = (calculo, num1, num2) => {
    let resultado = 0;
    switch(calculo) {
        case "add":
            resultado = num1 + num2;
        return resultado
        break;
        case "sub":
            resultado = num1 - num2;
            return resultado;
            break;
        case "mult":
            resultado = num1 * num2;
            return resultado;
            break;
        case "div":
            resultado = num1/num2;
            return resultado;
            break;
    }
}
console.log(conta(calculo,valor1,valor2))

// Exercício 3


