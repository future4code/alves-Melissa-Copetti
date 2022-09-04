import { ProductData } from "../types";
import { connection } from "./connection";

const typeProduct = (product: any) => {
  const createProduct: ProductData = {
    id: product.id,
    name: product.name,
    price: product.price,
    img_url: product.img_url,
  };
};

export default async function selectProducts(): Promise<
  ProductData[] | undefined
> {
  const result = await connection("labecommerce_products");

  const allProductsType = result.map((product) => {
    return typeProduct(product);
  });
  return result;
}
