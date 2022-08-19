// - Exercício 8

//     Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

//     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
//     - **Entradas/Saídas**

//         ```tsx
//         input: string, string
//         output: boolean
//         ```

//     - **Dica 1**

//         Você precisará da data atual para fazer as operações, uma opção é utilizar `new Date()` para obter a data atual

//     - **Dica 2**

//         Para fazer as operações necessárias, você pode converter as datas para `timestamp` usando o método `getTime()` na data

const renovaCarteira = (
  dataNascimento: string,
  dataDocumento: string
): boolean | string => {
  const dataAtualTimestamp: number = new Date().getTime();
  const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
  const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
  const anoNascTimestamp: number = new Date(
    `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
  ).getTime();
  const dataDocumentoTimestamp: number = new Date(
    `${anoDoc}-${mesDoc}-${diaDoc}`
  ).getTime();
  const idade: number = dataAtualTimestamp - anoNascTimestamp;
  const ultimaRenovacao: number = dataAtualTimestamp - dataDocumentoTimestamp;
  const umAnoEmTimestamp: number = 31556926000;

  if (idade <= 20 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
  } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
  } else if (idade >= 50 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
  } else {
    return "algo deu errado";
  }
};
console.log(renovaCarteira("25/04/1995", "12/12/2005"));
