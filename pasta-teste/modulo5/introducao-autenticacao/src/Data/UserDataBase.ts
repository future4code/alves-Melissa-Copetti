import { User } from "../Moder/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
  private static tableName = "todolist_User";

  public insertUser = async (user: User): Promise<void> => {
    try {
      await BaseDatabase.connection()
        .insert({
          id: user.getId(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into(UserDataBase.tableName);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  public getUserByEmail = async (email: string): Promise<User | undefined> => {
    try {
      const result = await BaseDatabase.connection()
        .select("*")
        .from(UserDataBase.tableName)
        .where({ email });

      return result[0]
        ? new User(result[0].id, result[0].email, result[0].password)
        : undefined;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  public getUserById = async (id: string): Promise<User | undefined> => {
    try {
      const result = await BaseDatabase.connection()
        .select("*")
        .from(UserDataBase.tableName)
        .where({ id });

      return result[0]
        ? new User(result[0].id, result[0].email, result[0].password)
        : undefined;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
