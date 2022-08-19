import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req:Request, res:Response) => {          
    res.send("Olá, você está aberto")
})

const users: User[] = [
    {
        id:"4Plkp-3Rvops-62fbaf-4b687c0",
        name:"Atronomo Turco",
        phone:53-99886767,
        email:"astroturco@gmail.com",
        website:"astro.com.br"
    },
    {
        id:"Euq3QqDo-lFg62-fbaf8-d0c70f",
        name:"Vaidoso",
        phone:89-98342534,
        email:"vaidoso@gmail.com",
        website:"vaidoso.com.br"
    },
    {
        id:"rfZogJS-exd262-fbafb-52975f",
        name:"Vaidoso",
        phone:32-92227477,
        email:"vaidoso@gmail.com",
        website:"vaidoso.com.br"
    },
    {
        id:"glnRj7-vobzN-62fbaf-d607ec5",
        name:"Raposa",
        phone:65-99878856,
        email:"raposa@gmail.com",
        website:"rapfox.com.br"
    },
    {
        id:"67mYC-mhoU3w6-2fbaf-f6c0362",
        name:"Serpente",
        phone:55-99654343,
        email:"raposa@gmail.com",
        website:"rapfox.com.br"
    },
    {
        id:"2FeAT6-XHSSo6-2fbb05-d9968d",
        name:"Vendedor",
        phone:54-93452424,
        email:"vender@gmail.com",
        website:"vendas.com.br"
    },
    {
        id:"EeGxp-zq9xeM-62fbb0-c8b0be4",
        name:"Rosa",
        phone:54-99556677,
        email:"rosaflor@gmail.com",
        website:"roseira.com.br"
    },
    {
        id:"638uT0-OcOlo62-fbb10-441f3a",
        name:"Guarda-chaves",
        phone:54-98767688,
        email:"chaveiro@gmail.com",
        website:"guarda_chaves.com.br"
    },
]
app.get("/users", (req:Request, res:Response)=>{
    if(!users.length){
        res.status(401).send("Não tem usuários.")
    }
    res.status(201).send(users)
})