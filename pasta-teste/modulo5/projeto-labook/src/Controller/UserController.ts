import { ISignupInputDTO, ILoginInputDTO } from "./../Models/User";
import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.Signup(input);
      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };
public login = async (req:Request, res:Response) => {
  try {
    const input:ILoginInputDTO = {
      email: req.body.email,
      password:req.body.password
    }
    const response = await this.userBusiness.login(input)
  } catch (error:any) {
    res.status(400).send({ message: error.message });
  }
}

}
