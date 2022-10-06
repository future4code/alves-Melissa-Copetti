import { PizzaController } from "./../controller/PizzaController";
import { Router } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { PizzaDataBase } from "../database/PizzaDataBase";
import { IdGenerator } from "../services/IdGenerator";

export const pizzaRouter = Router();

const pizzaController = new PizzaController(
  new PizzaBusiness(new PizzaDataBase(), new IdGenerator())
);

pizzaRouter.get("/", pizzaController.getPizzas);
pizzaRouter.get("/v2", pizzaController.getPizzasV2);
