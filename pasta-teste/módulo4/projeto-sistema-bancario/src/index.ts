import express, {Request, Response, Express} from "express";
import cors from "cors";
import { contas } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());


app.post('/user/criate', (req: Request, res: Response)=>{
    try {
    const {name, cpf, dateOfBithString} = req.body
    
    const [day, month,year] = dateOfBithString.split("/")
    
    const dateOfBirth:Date = new Date(`${year}-${month}-${day}`)
    
    const ageMilisseconds:number = Date.now() - dateOfBirth.getTime()
    
    const ageYears:number = ageMilisseconds /1000 / 60 / 60 / 24 / 360
    if (ageYears < 18){
        res.statusCode = 406
        throw new Error("Usuário menor de 18 anos, é necessário ser maior");
        
    }
    contas.push({
        name,
        cpf,
        dateOfBirth,
        balance:0,
        estatement:[]

    })
        res.status(201).send("Conta criada com sucesso")
    } catch (error:any) {
       res.send(error.message)
    }
})

app.get('/user/all',(req: Request, res: Response)=>{
    try {
        if(!contas.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada");
            
        }
        res.status(200).send(contas)
    } catch (error:any) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});