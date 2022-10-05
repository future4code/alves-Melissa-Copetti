import { IUserDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PizzaDataBase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"
    public static TABLE_INGREDIENTS = "Amb_Ingredients"
    public static TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients"

    public toPizzaDBModel = (pizza: Pizza) => {
      return {
          name: pizza.getName(),
        price:pizza.getPrice()
        }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await BaseDatabase
            .connection(PizzaDataBase.TABLE_PIZZAS)
            .select()
            .where({ email })

        return result[0]
    }

    public createUser = async (user: User) => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }
}