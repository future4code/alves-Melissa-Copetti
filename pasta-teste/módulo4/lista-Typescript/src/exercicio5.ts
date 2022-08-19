// - Exercício 5

//     Considerando o `array` de usuários abaixo, crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

//     ```tsx
//  [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},
// 	{name: "Carina", email: "carina@email.com", role: "admin"}
// ]
//     ```

//     - **Entradas/Saídas**

//         ```tsx
//         input: type[]
//         output: string[]
//         ```

//     - **Saída esperada**

//         ```tsx
//         [	"ademir@email.com", "carina@email.com" ]
//         ```

//     - **Dica 1**

//         Crie um `type` para os usuários

//     - **Dica 2**

//         Use os métodos `filter` e `map`
enum ROLE {
  USER = "user",
  ADMIN = "admin",
}

type Usuarios = {
  name: string;
  email: string;
  role: ROLE;
};

const ArrayUsers: Usuarios[] = [
  { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
  { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
  { name: "Aline", email: "aline@email.com", role: ROLE.USER },
  { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
  { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
  { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN },
];
const usuariosSelecionados = (ArrayUsers: Usuarios[]) => {
  const exibeAdminEmail = ArrayUsers.filter(
    (item) => item.role === ROLE.ADMIN
  ).map((item) => item.email);
  return exibeAdminEmail;
};

console.log(usuariosSelecionados(ArrayUsers));
