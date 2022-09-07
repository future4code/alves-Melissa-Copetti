import { Customer } from "./consumers";
import { Users } from "./users";

const newUser = new Users ("1","pessoa@gmail.com","João", "12345")

console.log(newUser)

//Exercício 1
//a)foi impresso.
//b)foi impressa uma vez

const newCostumer = new Customer("2","consumidor@gmail.com", "Maria","654321","1232 3245 23432 123")

console.log(newCostumer)

//Exercício 2
//a)foi impresso uma vez;
//b)foi impresso duas vezes. Porque users foi chamado na classe Customer.

