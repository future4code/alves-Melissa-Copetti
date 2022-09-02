import { app } from "./app";

app.post("/users", createUsers);

app.get("/users",getAllUsers);

app.post("/products",createProduct);

app.get("/products", )

// - **express:**
//     - **método**: **`post`**
//     - **path: `/users`**
//     - `**id`** deve ser gerado pela própria aplicação em código
//     - **parâmetros recebidos** via **`body`:**
//         - `**name**`, `**email**` e `**password**`

// - **método: `get`**
// - **path: `/users`**
// - **sem parâmetros**
// - deve trazer uma lista com **todos os** **usuários** cadastrados no banco

// - **express**:
//     - **método: `post`**
//     - **path**: `**/products**`
//     - `**id`** deve ser gerado pela própria aplicação em código
//     - **parâmetros recebidos** via **`body`**:
//         - `**name**`, **`price`** e **`image_url`**
//             - **`image_url`** é a ***url*** da imagem do produto
//             - exemplo de uma **`image_url`**:
//                 - [https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ](https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ)