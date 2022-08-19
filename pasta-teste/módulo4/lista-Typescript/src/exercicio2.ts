// - Exercício 2

//     Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

//     - **Entradas/Saídas**
// input: várias possibilidades
// output: nenhuma

const FuncQualquer = (parametro: any) => {
  let tipoPar = typeof parametro;

  return tipoPar;
};

console.log(FuncQualquer(23));
