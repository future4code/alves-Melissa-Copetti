import { IShowDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  public static TABLE_SHOWS = "Lama_Shows";

  public toShowDBModel = (show: Show): IShowDB => {
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      starts_at: show.getStartsAt(),
      tikets: show.getTikets(),
    };

    return showDB;
  };

  public findByBand = async (band: string): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase.connection(
      ShowDatabase.TABLE_SHOWS
    )
      .select()
      .where({ band });

    return result[0];
  };

  public createShow = async (show: Show): Promise<void> => {
    const showDB = this.toShowDBModel(show);

    await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).insert(showDB);
  };
}
