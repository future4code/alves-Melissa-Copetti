export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export class Pizza {
  constructor(
    private name: string,
    private price: number,
    private ingredients: string[]
  ) {}

  public getName = () => {
    return this.name;
  };

  public getPrice = () => {
    return this.price;
  };

  public getIngredients = () => {
    return this.ingredients;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setPrice = (newPrice: number) => {
    this.price = newPrice;
  };
}

