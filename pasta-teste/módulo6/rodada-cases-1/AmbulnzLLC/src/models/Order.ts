export interface IOrdersDB {
  id: string;
}

export interface IOrderItensDB {
  id: string;
  pizza_name: string;
  quantity: number;
  order_id: string;
}

export interface IOrderItem {
  id: string;
  pizza_name: string;
  price: number;
  quantity: number;
  order_id: string;
}

export interface IOrderResume {
  id: string;
  pizzas: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}
export class Order {
  private total: number = 0;
  constructor(private id: string, private orderItens: IOrderItem[]) {
    this.total = this.calculateTotal();
  }

  private calculateTotal = () => {
    const total = this.orderItens.reduce(
      (acc, pizza) => acc + pizza.price * pizza.quantity,
      0
    );
    return total;
  };
  public getId = () => {
    return this.id;
  };

  public getOrderItens = () => {
    return this.orderItens;
  };

  public setOrderItens = (newOrderItens: IOrderItem[]) => {
    this.orderItens = newOrderItens;
  };

  public addOrderItem = (newOrderItem: IOrderItem[]) => {
    this.orderItens = newOrderItem;
  };

  public removeOrderItem = (idToRemove: string) => {
    return this.orderItens.filter((orderItem) => orderItem.id !== idToRemove);
  };
  public getTotal = () => {
    return this.total
}
}
export interface ICreateOrderInputDTO {
  pizzas: {
    name: string;
    quantity: number;
  }[];
}

export interface ICreateOrderOutputDTO {
  message: string;
  order: IOrderResume;
}

export interface IGetOrdersOutputDTO {
  orders: IOrderResume[];
}
