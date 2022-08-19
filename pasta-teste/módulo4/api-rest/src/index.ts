import express, {Request,Response} from "express";
import cors from "cors";
import { Users, users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


// Exercício 1
//a.Get
//b./allusers
app.get("/allusers",(req:Request, res:Response)=>{
    res.send(users)
})

app.get("allusers/type",(req:Request, res:Response)=>{
    let codeError:number = 404
    try {
        const {type} = req.query 
        const user: Users[] = users.filter(usuario=> usuario.type === type)
        if(!user){
            codeError=404
            throw new Error("Nenhum usuário encontrado"); 
        }
        res.status(200).send(user)
    } catch (error:any) {
        res.status(codeError=500).send({message:error.message})
    }
})

