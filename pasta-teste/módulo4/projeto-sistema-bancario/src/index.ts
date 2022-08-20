import express, {Request, Response, Express} from "express";
import cors from "cors";
import { contas } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());


app.post('/user/criate', (req: Request, res: Response)=>{
    try {
    const {name, cpf, dateOfBithSatring} = req.body
    const [day, month,year] = dateOfBithSatring.split("/")
    const dateOfBirth:Date = new Date(`${year}-${month}-${day}`)
    contas.push({
        name,
        cpf,
        dateOfBirth,
        balance:0,
        estatement:[]

    })
        
    } catch (error) {
        
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});