import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { User, UserData } from "../types";

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: User = req.body;

    if (!name || !email || !password) {
      throw new Error("Dados incompletos, preencha todos os campos");
    }
    const id = Date.now().toString();

    const userInsert: UserData = {
      id,
      name,
      email,
      password,
    };
    const answer = await insertUser(userInsert);
    res.status(200).send({ message: answer });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message || error.sqlMessage);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};
