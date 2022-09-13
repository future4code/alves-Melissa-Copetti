import { ProductData } from './../types';
import { connection } from "./connection";

export default async function insertProduct(insertProduct:ProductData):Promise<string>{
    const {id, name, price, img_url} = insertProduct
    await connection("labecommerce_products").insert({
        id,
        name,
        price,
        img_url
    })
    return `Produto ${name} inserido com sucesso!`
}