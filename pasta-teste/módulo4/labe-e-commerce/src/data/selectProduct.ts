
import { ProductData } from "../types";
import { connection } from "./connection";

export default async function selectProduct(productId:string):Promise<ProductData | undefined> {

    const [result] = await connection("labecommerce_products").select("*").where({id:productId});
    if(result){
    const productType:ProductData = {
        id:result.id,
        name:result.name,
        price:result.price,
        img_url:result.img_url
    }
return productType 
}else{
    return undefined
}
    
}