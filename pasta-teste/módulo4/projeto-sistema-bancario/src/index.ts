import express, { Request, Response, Express } from "express";
import cors from "cors";
import { contas } from "./users";
import { Conta, Transaction } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user/criate", (req: Request, res: Response) => {
  try {
    const { name, cpf, dateOfBithString } = req.body;

    const [day, month, year] = dateOfBithString.split("/");

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    const ageMilisseconds: number = Date.now() - dateOfBirth.getTime();

    const ageYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365;
    if (ageYears < 18) {
      res.statusCode = 406;
      throw new Error("Usuário menor de 18 anos, é necessário ser maior");
    }

    const clientIndex = contas.findIndex((cliente) => cliente.cpf === cpf);
    if (clientIndex >= 0) {
      res.statusCode = 409;
      throw new Error("Esse cliente já está cadastrado");
    }

    const newUser: Conta = {
      id: contas.length + 1,
      name,
      cpf,
      dateOfBirth: dateOfBithString,
      balance: 0,
      estatement: [],
    };
    contas.push(newUser);

    res.status(201).send("Conta criada com sucesso");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.get("/user/all", (req: Request, res: Response) => {
  try {
    if (!contas.length) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta encontrada");
    }
    res.status(200).send(contas);
  } catch (error: any) {
    res.send(error.message);
  }
});

app.get("/clients/:cpf", (req: Request, res: Response) => {
  try {
    const { cpf } = req.params;
    const cliente = contas.find((conta) => conta.cpf == cpf);
    if (!cliente) {
      res.statusCode = 404;
      throw new Error("Cliente não encontrado");
    }
    res.status(200).send({ saldo: cliente.balance });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    }
  }
});

app.post("/clientts/:cpf/payment", (req: Request, res: Response) => {
  try {
    const { cpf } = req.params;
    const { value, description } = req.body;
    let { date } = req.body;

    if (!date) {
      date = Date.now();
    }
    const [day, month, year] = date.split("/");
    const dateformatted: Date = new Date(`${year}-${month}-${day}`);

    if (!value || !description) {
      res.statusCode = 400;
      throw new Error("Dados para pagamento incompletos!");
    }

    const clientIndex = contas.findIndex((cliente) => cliente.cpf === cpf);
    if (clientIndex < 0) {
      res.statusCode = 404;
      throw new Error("CPF inválido");
    }
    const client = contas[clientIndex];

    const newTransation: Transaction = {
      value,
      date: dateformatted,
      description,
    };
    if (Math.abs(value) > client.balance) {
      res.statusCode = 406;
      throw new Error("Saldo insuficiente");
    }
    client.estatement.push(newTransation);

    res.status(201).send("Pagamento realizado com sucesso!");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.put("/clients/:cpf/:name/deposit", (req: Request, res: Response) => {
  try {
    const { cpf, name } = req.params;
    const { value, description } = req.body;
    let { date } = req.body;

    const [day, month, year] = date.split("/");
    const dateformatted: Date = new Date(`${year}-${month}-${day}`);

    if (!cpf || !name || !value || !description) {
      res.statusCode = 400;
      throw new Error("Dados incompletos");
    }
    const clientIndex = contas.findIndex(
      (client) =>
        client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase()
    );

    if (clientIndex < 0) {
      res.statusCode = 404;
      throw new Error("CPF inválido");
    }
    contas[clientIndex].estatement.push({
      value,
      date: dateformatted,
      description,
    });

    res.status(200).send("Depósito realizado com sucesso!");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.put("/clients/:cpf/:name/balance", (req: Request, res: Response) => {
  try {
    const { cpf, name } = req.params;
    if (!cpf || !name) {
      res.statusCode = 404;
      throw new Error("Cliente não encontrado");
    }
    const clienteIndex = contas.findIndex(
      (cliente) =>
        cliente.cpf === cpf && cliente.name.toLowerCase() === name.toLowerCase()
    );

    if (clienteIndex < 0) {
      res.statusCode = 400;
      throw new Error("CPF inválido");
    }
    let newBalance = contas[clienteIndex].balance;

    contas[clienteIndex].estatement.forEach(
      (saldo) => (newBalance += saldo.value)
    );

    contas[clienteIndex].balance = newBalance;

    res.status(200).send("Saldo atualizado");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.post("/clientes/:cpf/:name/transfer", (req: Request, res: Response) => {
  try {
    const { cpf, name } = req.params;
    const { nameDesciption, cpfdescription } = req.body;
    const { statement } = req.body;
    const { value, description } = statement;
    let { date } = statement;

    const [day, month, year] = date.split("/");
    const dateformatted = new Date(`${year}-${month}-${day}`);

    if (!cpf || !name || !nameDesciption || !cpfdescription) {
      res.statusCode = 400;
      throw new Error("Dados incompletos ou usuário não encontrado");
    }
    const clientIndex = contas.findIndex(
      (conta) =>
        conta.cpf === cpf && conta.name.toLowerCase() === name.toLowerCase()
    );

    if (clientIndex < 0) {
      res.statusCode = 400;
      throw new Error("CPF inválido");
    }
    const client = contas[clientIndex];

    if (Math.abs(value) > client.balance) {
      res.statusCode = 406;
      throw new Error("Saldo insuficiente");
    }
    const clientDestinationIndex = contas.findIndex(
      (clientes) => clientes.cpf === cpfdescription
    );
    if (clientDestinationIndex < 0) {
      res.statusCode = 404;
      throw new Error("CPF inválido");
    }

    const ClientDestination = contas[clientDestinationIndex];

    const newTransaction: Transaction = {
      value: value,
      date: new Date(),
      description: `transferência de ${client.name} para ${nameDesciption}`,
    };
    const newTransaction2: Transaction = {
      value: value,
      date: new Date(),
      description: `transferência de ${client.name} para ${nameDesciption}`,
    };

    client.estatement.push(newTransaction);
    ClientDestination.estatement.push(newTransaction2);

    res.status(200).send("Transação realizada com sucesso!");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.setMaxListeners(res.statusCode).send(error.message);
    }
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
