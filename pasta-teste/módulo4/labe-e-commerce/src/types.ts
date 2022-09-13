
export type User = {
    name:string,
    email:string,
    password:string
}

export type UserData = {
   id:string,
    name:string,
    email:string,
    password:string
}

export type Product = {
    name:string,
    price:number,
    img_url: string
}

export type PurchasesData = {
    id:string,
    userId:string,
    productId:string,
    quantity:number,
    totalPrice:number
}

export type ProductData ={
    id:string,
    name:string,
    price:number,
    img_url:string
}

export type Purchases = {
    userId:string,
    productId:string,
    quantity:number
}

export type userInfo = {
    idPerson:string,
    namePerson:string
}

export type AllPurchases ={
    idPurchase:string,
    ProductName:string,
    Quantity:number,
    TotalPrice:number
}

export type PurchasesByUser = {
    idPerson:string,
    namePerson:string,
    compras:AllPurchases[]
}