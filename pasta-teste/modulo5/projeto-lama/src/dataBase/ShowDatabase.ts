import { IShowDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  public static TABLE_SHOWS = "Lama_Shows";

  public toUserDBModel = (show: Show): IShowDB => {
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      starts_at: show.getStartsAt(),
      tikets: show.getTikets(),
    };

    return showDB;
  };

//   public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
//     const result: IUserDB[] = await BaseDatabase.connection(
//       UserDatabase.TABLE_USERS
//     )
//       .select()
//       .where({ email });

//     return result[0];
//   };

//   public createUser = async (user: User): Promise<void> => {
//     const userDB = this.toUserDBModel(user);

//     await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
//   };
}
