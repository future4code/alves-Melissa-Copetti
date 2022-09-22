import { Authenticator } from "./../services/Authenticator";
import { HashManager } from "./../services/HashManager";
import { Request, Response } from "express";
import { UserDataBase } from "../data/UserData";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Insira corretamente os dados solicitados");
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (!user) {
      res.statusCode = 409;
      throw new Error("Usuário não cadastrado");
    }

    const hashManager = new HashManager();
    const passwordIsCorrect = await hashManager.compare(
      password,
      user.getPassword()
    );

    if (!passwordIsCorrect) {
      res.status(401).send("senha incorreta ou conta inexistente");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generate({
      id: user.getId(),
    });

    res.status(200).send("Usuário logado com sucesso!");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res
        .status(res.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  }
}
