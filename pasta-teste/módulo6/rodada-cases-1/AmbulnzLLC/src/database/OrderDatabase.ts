import { IOrderItensDB, IOrdersDB } from "./../models/Order";
import { BaseDatabase } from "./BaseDatabase";
import { PizzaDataBase } from "./PizzaDataBase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER_ITEMS = "Amb_Order_Items";
  public static TABLE_ORDERS = "Amb_Orders";

  public createOrder = async (orderId: string): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS).insert({
      id: orderId,
    });
  };
  public insertItemOnOrder = async (oderItem: IOrderItensDB): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEMS).insert(
      oderItem
    );
  };
  public getOrders = async (): Promise<IOrdersDB[]> => {
    const result: IOrdersDB[] = await BaseDatabase.connection(
      OrderDatabase.TABLE_ORDERS
    ).select();
    return result;
  };
  public getOrderItem = async (orderId: string): Promise<IOrderItensDB[]> => {
    const result: IOrderItensDB[] = await BaseDatabase.connection(
      OrderDatabase.TABLE_ORDER_ITEMS
    )
      .select()
      .where({ order_id: orderId });
    return result;
  };
  public getPrice = async (pizzaName: string): Promise<number | undefined> => {
    const result: any[] = await BaseDatabase
        .connection(PizzaDataBase.TABLE_PIZZAS)
        .select("price")
        .where({ name: pizzaName })

    return result[0].price as number
}
}
