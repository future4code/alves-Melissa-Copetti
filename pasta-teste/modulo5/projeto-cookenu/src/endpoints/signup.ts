import { Authenticator } from './../services/Authenticator';
import { HashManager } from "./../services/HashManager";
import { Request, Response } from "express";
import { UserDataBase } from "../data/UserData";
import { GenerateID } from "../services/GenerateId";
import { User } from "../entities/User";

export async function singUp(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode =  422
     throw new Error("Dados insuficientes, insira nome, email e senha");
     
    }

    if(email.indexOf("@")=== -1) {
        res.statusCode = 400
        throw new Error("Email inválido");
        
    }

    if(password.length < 6 ) {
        res.statusCode = 400
        throw new Error("A senha deve possuir, no mínimo, seis caracteres");
        
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (user) {
      res.status(409).send("Email já cadastrado");
    }
    const generatorID = new GenerateID();
    const id = generatorID.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);
    const newUser = new User(id, name, email, hashPassword);
    await userDataBase.createUser(newUser);
    const authenticator = new Authenticator()
    const token = authenticator.generate({id})

res.status(200).send("Usuário criado com sucesso!")
  } catch (error: any) {
    if (res.statusCode === 200) {
        res.status(500).send({ message: error.message })
    } else {
        res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
    }
}
  
}
