import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get('/test/hello', (req: Request, res: Response) => {
        res.send(`Olá, mundo!`)})

// exercício 1

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//exercício 2

type Afazer = {
    userId:number,
    id:number,
    title: string,
    competed: boolean
 }

 //exercício 3

let afazeres: Afazer[] = [{
    userId:1,
    id:1,
    title: "lavar louça",
    competed: true
 },
 {
    userId:2,
    id:5,
    title: "ração para gatos",
    competed: false
 },
 {
    userId:3,
    id:12,
    title: "arrumar cama",
    competed: false
 },
 {
    userId:6,
    id:25,
    title: "limpar banheiro",
    competed: true
 },
 {
    userId:7,
    id:9,
    title: "cozinhar",
    competed: true
 },
 {
    userId:9,
    id:12,
    title: "limpar liteira",
    competed: false
 },
 {
    userId:3,
    id:6,
    title: "varrer chão",
    competed:false
 },
 {
    userId:4,
    id:21,
    title: "lavar cozinha",
    competed: true
 },
 {
    userId:1,
    id:13,
    title: "tirar lixo",
    competed: false
 },
 {
    userId:5,
    id:28,
    title: "dobrar roupas",
    competed: false
 },
 {
    userId:8,
    id:11,
    title: "lavar tapetes",
    competed: true
 },
 {
    userId:7,
    id:18,
    title: "lavar roupa",
    competed: false
 },
 {
    userId:8,
    id:19,
    title: "lavar calçados",
    competed: false
 },
 {
    userId:2,
    id:14,
    title: "limpar armários",
    competed: false
 },
 {
    userId:3,
    id:27,
    title: "trocar roupa de cama",
    competed:true
 },
 {
    userId:6,
    id:17,
    title: "lavar calçada",
    competed: true
 },

]

// exercício 4
app.get("/done",(req:Request, res:Response)=>{
const concluidas = afazeres.filter((tarefa)=>{
    return tarefa.competed === true
})
res.send(concluidas)
})

// exercício 5



app.post("/create",(req:Request, res:Response)=>{
const {title, competed} = req.body
const userId = Number(req.headers.authorization)

afazeres.push({
    userId:userId,
    id: Date.now(),
    title: title,
    competed: competed
})
res.send({afazeres})
})


//exercício 6

app.put("/changedone/:id",(req:Request, res:Response)=>{
const idAfazer = Number(req.params.id)
 afazeres.filter((tarefa)=>{
if (tarefa.id === idAfazer) {
    return tarefa.competed === !tarefa.competed
}
})
res.send(afazeres)
})