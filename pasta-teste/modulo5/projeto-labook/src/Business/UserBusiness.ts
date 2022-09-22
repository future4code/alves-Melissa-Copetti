import { ILoginInputDTO } from "./../Models/User";
import { UserDatabase } from "./../DataBase/UserDataBase";
import { ParamsError } from "../Error/ParamsError";
import { ISignupInputDTO, User, USER_ROLES } from "../Models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { ConflictError } from "../Error/ConflictError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  public Signup = async (input: ISignupInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new ParamsError();
    }
    if (typeof name !== "string" || name.length < 3) {
      throw new ParamsError();
    }
    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError();
    }
    if (
      typeof email !== "string" ||
      !name.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError();
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (userDB) {
      throw new ConflictError();
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);
    const response = {
      message: "Cadastro realizado com sucesso",
      token,
    };
    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new ParamsError();
    }

    if (
      typeof email !== "string" ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError();
    }
    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError();
    }

    const userDB = await this.userDatabase.findByEmail(email);
    if (!userDB) {
      throw new ConflictError();
    }
  };
}
