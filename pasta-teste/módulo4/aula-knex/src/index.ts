
import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";



app.post("/actor", async (req: Request, res: Response) => {
    try {
        // await connection.raw(`
        //     INSERT INTO Actor(id, 
        //         name, 
        //         salary,
        //         birth_date, 
        //         gender)
        //     VALUES (
        //         "${Date.now().toString()}",
        //         "${req.body.name}",
        //         ${req.body.salary},
        //         "${req.body.birthDate}",
        //         "${req.body.gender}"
        //     )
        // `)
        await connection('Actor').insert({
            name:req.body.name,
            salary: req.body.salary,
            birth_date:req.body.birth_date,
            gender:req.body.gender
        })
        res.send("O usuario foi inserido");
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .send("Um erro inesperado aconteceu")
    }
})



app.get("/actor", async(req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
            SELECT * FROM Actor
        `)

        res.send(result)
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .send("Um erro inesperado aconteceu");
    }
})

app.put("/actor/:id", async(req: Request, res: Response) => {
    try {
        await connection("Actor")
        .update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender
        })
        .where({
            id: req.params.id
        })

        res.send("Ator atualizado");

    } catch (error) {
        res
        .status(500)
        .send("Um erro inesperado aconteceu")
    }
})
