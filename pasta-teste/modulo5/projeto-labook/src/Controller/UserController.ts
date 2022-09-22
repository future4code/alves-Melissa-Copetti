import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
  };
}
