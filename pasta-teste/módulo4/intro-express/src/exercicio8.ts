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

const posts: Post[] = [
    {
      id: "232343-34343-3453-456468",
      title: "Astronomia empirica",
      body: "Venha conhecer o céu mais de perto!",
      userId: "4Plkp-3Rvops-62fbaf-4b687c0",
    },
    {
      id: "252545-353637-2324-656488",
      title: "Fábrica de espelhos",
      body: "Se olhe mais bonito como eu me olho!",
      userId: "Euq3QqDo-lFg62-fbaf8-d0c70f",
    },
  
    {
      id: "892945-386737-2974-696489",
      title: "Agência de amizades",
      body: "Venha conhecer gente nova e ter amizades verdadeiras!",
      userId: "glnRj7-vobzN-62fbaf-d607ec5",
    },
  
    {
      id: "834545-388402-21234-456320",
      title: "Técnicas Comerciais",
      body: "Curso de aprendizado das melhores técnicas de vendas do mercado.",
      userId: "2FeAT6-XHSSo6-2fbb05-d9968d",
    },
    {
      id: "895635-3450482-21294-456830",
      title: "Flores e cia",
      body: "Todas as flores que você precisar!",
      userId: "EeGxp-zq9xeM-62fbb0-c8b0be4",
    },
    {
      id: "823435-3460482-243450-4342110",
      title: "Depósito de pequenos ítens",
      body: "Guardo suas chaves para que não perca por aí",
      userId: "EeGxp-zq9xeM-62fbb0-c8b0be4",
    },
  ];
  

app.get("/posts", (req:Request, res: Response)=>{
    if (!posts.length){
        res.status(401).send("não tem posts")
    }
    res.status(201).send(posts)
})

app.get("/post/:userId", (req:Request, res:Response)=>{
    let user = req.params.userId
    const post = posts.filter((post)=>{
        return post.userId == user
    })
    if(!user) {
        return res.status(400).send("Entre com userId válido")
    }else if (post.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
    }
    res.status(201).send(post)
})

