export type Conta = {
    id:number,
    name:string,
    cpf:string,
    dateOfBirth:Date,
    balance:number,
    estatement:Array<Transaction>
}

export type Transaction = {
    value:number,
    date:Date,
    description:string
}