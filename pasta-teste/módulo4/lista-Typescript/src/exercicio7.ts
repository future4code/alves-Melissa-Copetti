// - Exercício 7

//     Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

//     ```tsx
//     const ajustaPreco = (preco :number): string => {
//     	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
//     	return "R$ "+valorAjustado
//     }
//     ```

//     O seguinte `array` traz o estoque atual da empresa:

//     ```tsx
//     [
//     	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
//     	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
//     	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
//     	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
//     	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
//     	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
//     	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
//     ]
//     ```

//     Aproveitando a função já feita, faça uma nova função que receba o `array`de estoque como parâmetro, use a função `ajustaPreco` para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto.

//     - **Entradas/Saídas**

type produto = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const arrayProdutos: produto[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ProdutosAjustados = (array: produto[]): produto[] => {
  array.forEach(
    (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
  );
  const valorAjustado: produto[] = array.sort(
    (a, b) => a.quantidade - b.quantidade
  );
  return valorAjustado;
};

console.table(ProdutosAjustados(arrayProdutos));
