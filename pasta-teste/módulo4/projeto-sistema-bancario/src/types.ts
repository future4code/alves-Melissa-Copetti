export type Conta = {
    name:string,
    cpf:number,
    dateOfBirth:Date,
    balance:number,
    estatement:Array<Transaction>
}

export type Transaction = {
    value:number,
    date:Date,
    description:string
}