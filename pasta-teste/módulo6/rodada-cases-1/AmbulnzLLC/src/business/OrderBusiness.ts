import {
  IGetOrdersOutputDTO,
  Order,
} from "./../models/Order";
import { ParamsError } from "./../errors/ParamsError";
import { OrderDatabase } from "../database/OrderDatabase";

import { IdGenerator } from "../services/IdGenerator";
import {
  ICreateOrderInputDTO,
  ICreateOrderOutputDTO,
  IOrderItensDB
} from "../models/Order";
import { NotFoundError } from "../errors/NotFoundError";

export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private idGenerator: IdGenerator
  ) {}

  public createOrder = async (
    input: ICreateOrderInputDTO
  ): Promise<ICreateOrderOutputDTO> => {
    const pizzasInput = input.pizzas;

    if (pizzasInput.length === 0) {
      throw new ParamsError("Alguma pizza deve ser escolhida");
    }
    const pizzas = pizzasInput.map((pizza) => {
      if (pizza.quantity <= 0) {
        throw new ParamsError("Quantidade inválida, escolha ao menos 1");
      }
      return { ...pizza, price: 0 };
    });
    for (let pizza of pizzas) {
      const price = await this.orderDatabase.getPrice(pizza.name);

      if (!price) {
        throw new NotFoundError("Pizza não encontrada");
      }
      pizza.price = price;
    }
    const orderId = this.idGenerator.generate();

    await this.orderDatabase.createOrder(orderId);

    for (let pizza of pizzas) {
      const orderItem: IOrderItensDB = {
        id: this.idGenerator.generate(),
        pizza_name: pizza.name,
        quantity: pizza.quantity,
        order_id: orderId,
      };
      await this.orderDatabase.insertItemOnOrder(orderItem);
    }
    const total = pizzas.reduce(
      (acc, pizza) => (acc + (pizza.price * pizza.quantity)),
      0
    );

    const response: ICreateOrderOutputDTO = {
      message: "Pedido realizado com sucesso!",
      order: {
        id: orderId,
        pizzas,
        total,
      },
    };
    return response;
  };
  public getOrders = async (): Promise<IGetOrdersOutputDTO> => {
    
    const ordersDB = await this.orderDatabase.getOrders();

    const orders: Order[] = [];
    
    for (let orderDB of ordersDB) {
      const order = new Order(orderDB.id, []);
      const orderItensDB: any = await this.orderDatabase.getOrderItem(
        order.getId()
      );
      
      for (let orderItemDB of orderItensDB) {
        const price = await this.orderDatabase.getPrice(orderItemDB.pizza_name);
        orderItemDB.price = price;
      }
      order.setOrderItens(orderItensDB);
      orders.push(order);
    }
    const response: IGetOrdersOutputDTO = {
      orders: orders.map((order) => ({
        id: order.getId(),
        pizzas: order
          .getOrderItens()
          .map((item) => ({
            name: item.pizza_name,
            quantity: item.quantity,
            price: item.price,
          })),
        total: order.getTotal(),
      })),
    };
    return response;
  };
}
