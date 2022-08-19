// - Exercício 3

//     Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte `ENUM` de gêneros:

//     ```tsx
//     enum GENERO {
//     	ACAO="ação",
//     	DRAMA="drama",
//     	COMEDIA="comédia",
//     	ROMANCE="romance",
//     	TERROR="terror"
//     }
//     ```

//     Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

//     Considerando todas estas informações, crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`

//     - **Entradas/Saídas**

//         ```tsx
//         input: string, number, ENUM, number(opcional)
//         output: type
//         ```

//     - **Exemplos**

//         ```tsx
//         Entradas: "Duna", 2021, GENERO.ACAO, 74
//         Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação", pontuacao: 74}

//         Entradas: "Duna", 2021, GENERO.ACAO
//         Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação"}
//         ```

//     - **Dica 1**

//         Para deixar um parâmetro opcional em uma função você deve deixa-lo por ultimo

//     - **Dica 2**

//         Para deixar um atributo opcional usamos o `?` Ex. `nota? : number`

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Movie = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number;
};

function filmeCaracter(filme: Movie) {
  return `filme escolhido: nome:${filme.nome}, lançamento: ${filme.anoLancamento}, gênero: ${filme.genero}, pontuacao:${filme.pontuacao}`;
}

console.log(
  filmeCaracter({
    nome: "Duna",
    anoLancamento: 2007,
    genero: GENERO.ACAO,
    pontuacao: 50,
  })
);

console.log(
  filmeCaracter({ nome: "Titanic", anoLancamento: 1999, genero: GENERO.DRAMA })
);
