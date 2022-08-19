// - Exercício 1

//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

//     ```tsx
//     "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"
//     ```

//     - **Entradas/Saídas**

//         ```tsx
//         input: string, string
//         output: string
//         ```

//     - **Dica**

//         Para dividir a string da data utilize o método `split`

const funcaoString = (nome: string, data: string): string => {
  let DivideData = data.split("/");

  const dia: string = DivideData[0];
  const mes: string = DivideData[1];
  const ano: string = DivideData[2];

  return `Olá, me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`;
};

console.log(funcaoString("João da silva", "24/04/1993"));
