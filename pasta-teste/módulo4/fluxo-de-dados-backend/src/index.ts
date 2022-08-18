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

//Exercício 3

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

//Exercício 4
app.get("/allprod", (req: Request, res: Response) => {
  try {
    res.send(listaProdutos);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Exercício 5
app.put("edit/:id", (req: Request, res: Response) => {
  try {
    const prodId = req.params.id;
    const { price, name } = req.body;
    if (!prodId) {
      res.statusCode = 404;
      throw new Error("Não foi recebido id do produto");
    } else if (!price || !name) {
      res.statusCode = 404;
      throw new Error("Não foi recebido valor de preço ou nome do produto");
    } else if (price <= 0) {
      res.statusCode = 404;
      throw new Error("não é possível valor negativo.");
    } else {
      const mudarPreco = listaProdutos.filter((prod) => {
        prod.price = price ? price : prod.price;
        prod.name = name ? name : prod.name;
      });
      res.send(mudarPreco);
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Exercício 6
app.delete("/apagarProduto/:name", (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const deleteProduto: Produto[] = listaProdutos.filter((prod) => {
      return prod.name !== name;
    });
    res.send(deleteProduto);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

