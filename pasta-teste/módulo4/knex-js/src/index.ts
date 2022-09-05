import { Request, Response } from "express";
import app from "./app";
import { getActorById, searchActor } from "./requests";

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); 



// exercício 1
//a)Quando usamos o raw a resposa vem direta do banco de dados, sem nenhum filtro.
//b)
// app.get("/users/:name", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.name;

//     console.log(await searchActor(id));

//     res.end();
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });

app.get("/users/:name", async(req: Request, res: Response) => {
    try {
        const id = req.params.name;
        const [result] = await searchActor("")
           console.log(result)

        res.send(result)
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .send("Um erro inesperado aconteceu");
    }
})




