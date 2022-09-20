import { UserDatabase } from './../database/UserDatabase';
import { HashManager } from "./../services/HashManager";
import { User } from "../models/User";
import { IdGenerator } from "./../services/IdGenerator";
export class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;
    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }
    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }
    if (!password || typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido");
    }
    if (name.length < 3) {
      throw new Error("Name deve ter mais de 3 caracteres");
    }
    if (password.length < 6) {
      throw new Error("Senha deve ter pelo menos 6 caracteres");
    }
    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }
    if (email) {
      throw new Error("email já existe");
    }
    const idGenerator = new IdGenerator();
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);
    const id = idGenerator.generate();
    const user = new User(id, name, email, hashPassword);
    
const userDataBase = new UserDatabase()
    await userDataBase.createUser(user)
  };
}
