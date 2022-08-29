import { Request, Response } from "express";
import changeUser from "../Data/changeUser";

export default async function editUser(req: Request, res: Response) {
  try {
    if (
      req.body.name === "" ||
      req.body.nickname === "" ||
      req.body.email === ""
    ) {
      res.status(400).send({ message: "dados incompletos" });
      return
    }
    if (!req.body.name && !req.body.nickname && !req.body.email) {
      res.status(400).send({ message: "você precisa colocar ao menos um dado a ser alterado." });
      return
    }
    await changeUser(
        req.params.id,
        req.body.name,
      req.body.nickname,
      req.body.email
    )
    res.status(200).send({ message: "dados de usuário alterados" });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
