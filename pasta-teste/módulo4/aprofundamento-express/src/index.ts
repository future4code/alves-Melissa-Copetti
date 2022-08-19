import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());



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
app.get("/done/:isCompleted",(req:Request, res:Response)=>{
let concluidas:boolean | string  = req.params.isCompleted

 if(concluidas === "true" ){
   return concluidas = true
 } else if (concluidas === "false" ){
   return concluidas = false
 }else {
   res.status(400).send("Parâmetro deve ser true ou false")
 }
 const filtraAfazeres = afazeres.filter((afazer)=>{
    return afazer.competed === concluidas
   })
   res.status(200).send(filtraAfazeres)
})


// exercício 5



app.post("/create",(req:Request, res:Response)=>{
const {title, userId} = req.body
if(!userId || !title) {
   res.status(400).send("é preciso passar os parâmetros de userId e title")
}

const newAfazer: Afazer = {
   userId,
    id: Date.now(),
    title,
    competed: false
}

afazeres.push(newAfazer)

res.status(201).send(afazeres)
})


//exercício 6

app.put("/changedone/:id/completed",(req:Request, res:Response)=>{
const idAfazer = Number(req.params.id)
 
let lista = afazeres.map((tarefa)=>{
if (tarefa.id === idAfazer) {
    tarefa.competed === !tarefa.competed
}
return tarefa
})
res.status(201).send(lista)
})

//exercício7

app.delete("/excluir/:id",(req:Request, res:Response)=>{
const tarefaId =Number (req.headers.id)  
for (let i = 0; i < afazeres.length; i++) {
   if (afazeres[i].id === tarefaId){
      afazeres.splice(i,1)
   }
}
res.status(200).send(afazeres)
})

//Exercicio 8 e 10

app.get("/user/:id/todos", (req:Request, res:Response)=>{
   const userId = Number(req.params.id)

   const filterList = afazeres.filter((afazer)=>{
      return afazer.userId === userId
   })
   const outraTarefa = afazeres.filter((tarefa)=>{
      return tarefa.userId !== userId
   })
   const result = {
      todos: {
         selectedUser: filterList,
         others: outraTarefa
      }
   }
   res.status(200).send(result)
})

app.listen(3003, () => {
   console.log("Server is running in http://localhost:3003")
});