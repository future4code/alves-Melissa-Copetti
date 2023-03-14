import {
  IIngredientsDB,
  IPizzaDB,
  IPizzasIngredientsDB,
} from "./../../models/Pizza";
export const pizzasSeed: IPizzaDB[] = [
  {
    name: "Margherita",
    price: 5,
  },
  {
    name: "Bufala",
    price: 6,
  },
  {
    name: "Romana",
    price: 5,
  },
  {
    name: "Diavola",
    price: 7.5,
  },
  {
    name: "Pizza Bianca",
    price: 5,
  },
];

export const ingredientsSeed: IIngredientsDB[] = [
  { name: "tomato" },
  { name: "oregano" },
  { name: "mozzarella" },
  { name: "oil" },
  { name: "mozzarella di Bufala" },
  { name: "anchovies" },
  { name: "spicy salami" },
];

export const pizzasIngredientsSeed: IPizzasIngredientsDB[] = [
  {
    pizza_name: "Margherita",
    ingredient_name: "tomato",
  },
  {
    pizza_name: "Margherita",
    ingredient_name: "mozzarella",
  },
  {
    pizza_name: "Bufala",
    ingredient_name: "tomato",
  },
  {
    pizza_name: "Romana",
    ingredient_name: "tomato",
  },
  {
    pizza_name: "Romana",
    ingredient_name: "mozzarella",
  },
  {
    pizza_name: "Romana",
    ingredient_name: "oil",
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "mozzarella",
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "spicy salami",
  },
  {
    pizza_name: "Pizza Bianca",
    ingredient_name: "mozzarella",
  },
  {
    pizza_name: "Pizza Bianca",
    ingredient_name: "oregano",
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "tomato",
  },
];
