//Exercício 1
//a)o constructor serve pra inicializar uma classe, ou seja, 'botar a classe pra funcionar'.

//b)
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public setCpf(): string {
    return this.cpf;
  }
  public setName(): string {
    return this.name;
  }
  public setAge(): number {
    return this.age;
  }
}

const pessoa: UserAccount = new UserAccount(
  "012.234.324-87",
  "Maria da Silva",
  34
);

console.log(pessoa.getName());

//c)usando os métodos getters e setters.

//Exercício 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

//Exercício 3

class Bank {
    private accounts:UserAccount[]

    constructor(accounts:UserAccount[]){
        this.accounts = accounts;
    }
    public getAccount(): UserAccount[]{
        return this.accounts
    }
    public setAccount():UserAccount[]{
        return this.accounts
    }
}