import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { User, IUserDB } from "./../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public TABLE_USERS = "Arq_Users";

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      email: user.getEmail(),
      name: user.getName(),
      password: user.getPassword(),
      role: user.getRole(),
    };
    return userDB;
  };
  public createUser = async (user: User) => {
    const userDB = this.toUserDBModel(user);

    await BaseDatabase.connection(this.TABLE_USERS).insert(userDB);
    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };
    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);

    const response = {
      token,
    };
    return response;
  };
}
