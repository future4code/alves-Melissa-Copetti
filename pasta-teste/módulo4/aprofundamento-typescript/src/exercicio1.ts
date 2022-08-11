// - **Exercício 1**
    
//     O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
//     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// let minhaString: string = 3
// se stribuir um número ela apontará erro.
    
//     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
let meuNumero: number | string = "palavra"
// se usa "ou" para adicionar novo tipo.
    
//     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
//     `nome`, que é uma string;
    
//     `idade`, que é um número;
    
//     `corFavorita`, que é uma string.

type pessoa ={
    nome: string,
    idade:number,
    corFavorita: string
}
    
//     Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
// const Usuario:pessoa ={
//     nome:"Pedro",
//     idade:10,
//     corFavorita:"VERDE"
//     }
        
//     const Usuaria:pessoa ={
//         nome:"Ana",
//         idade:20,
//         corFavorita:"AZUL"
//         }
    
//     const Usuarie:pessoa ={
//         nome:"Darcy",
//         idade:13,
//          corFavorita:"AMARELO"
//          }

//     d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum corFavorita {
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    VERMELHO = "vermelho",
    ROXO = "roxo",
    ROSA = "rosa",
    CIANO = "ciano"
}

type PessoaCor = pessoa & {
    corFavorita:corFavorita
}

const Usuario:PessoaCor= {
    nome:"Pedro",
    idade:10,
    corFavorita:corFavorita.AZUL
    }
        
    const Usuaria:PessoaCor ={
        nome:"Ana",
        idade:20,
        corFavorita:corFavorita.VERDE
        }
    
    const Usuarie:PessoaCor ={
        nome:"Darcy",
        idade:13,
         corFavorita:corFavorita.VERMELHO
         }