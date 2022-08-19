import express, { Request, Response } from "express";
import cors from "cors";
import { listaProdutos, Produto } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

//Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.send("Estou aberto!");
});

//Exercício 3 e 7

app.post("/create", (req: Request, res: Response) => {
  try {
    const { id, name, price } = req.body;

    const novoProduto: Produto = {
      id,
      name,
      price,
    };
    listaProdutos.push(novoProduto);
    res.send(listaProdutos);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Exercício 4 e 10
app.get("/allprod", (req: Request, res: Response) => {
  try {
    const search: string = req.query.search as string;

    if (search) {
      const filterProdutos = listaProdutos.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );
      res.status(200).send(filterProdutos);
    } else {
      res.status(200).send(listaProdutos);
    }
    res.send(listaProdutos);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

//Exercício 5, 8 e 11
app.put("edit/:id", (req: Request, res: Response) => {
  try {
    const prodId = req.params.id;
    const { price, name } = req.body;
    if (!price && !name) {
      res.statusCode = 422;
      throw new Error("Você precisa colocar o preço ou o nome do produto");
    } else if (typeof price !== "number" || typeof name !== "string") {
      res.statusCode = 422;
      throw new Error(
        "O produto precisa ser uma palavra e o preço precisa ser um número"
      );
    } else if (price <= 0) {
      res.statusCode = 422;
      throw new Error("não é possível valor negativo.");
    }

    const mudarPreco = listaProdutos.findIndex(
      (prod) => prod.id == Number(prodId)
    );
    if (mudarPreco < 0) {
      res.statusCode = 404;
      throw new Error("Não foi encontrado produto");
    }
    if (!name) {
      listaProdutos[mudarPreco].price = price;
      res.status(200).send(listaProdutos);
    } else if (!price) {
      listaProdutos[mudarPreco].name = name;
      res.status(200).send(listaProdutos);
    } else {
      listaProdutos[mudarPreco].name = name;
      listaProdutos[mudarPreco].price = price;
      res.status(200).send(listaProdutos);
    }
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.send(error.message);
    }
  }
});

//Exercício 6 e 9
app.delete("/apagarproduto/:name", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const produtoIndex = listaProdutos.findIndex((prod) => {
      return prod.id == Number(id);
  
    });
    if (produtoIndex < 0) {
        res.statusCode = 404
        throw new Error("Produto não encontrado");
    }
   listaProdutos.splice(produtoIndex, 1)
   res.status(200).send(produtoIndex)
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});