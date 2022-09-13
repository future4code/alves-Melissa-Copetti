import { connection } from "./connection";
import { PurchasesData } from "./../types";

export default async function insertPurchase(
 purchase: PurchasesData): Promise<string> {
  const { id, userId, productId, quantity, totalPrice } = purchase;

  await connection("labecommerce_purchases").insert({
    id,
    user_id: userId,
    product_id: productId,
    quantity,
    total_price: totalPrice,
  });
  return "Compra registrada!";
}
