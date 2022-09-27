import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
const input:any ={
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
}

const userBusiness = new UserBusiness()
const response = await userBusiness.signup(input)

    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
