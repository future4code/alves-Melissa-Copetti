import { AllPurchases, PurchasesByUser, userInfo } from "./../types";
import { connection } from "./connection";

export default async function selectPurchasesByUser(userId: string):Promise<PurchasesByUser|undefined> {
  const result = await connection.raw(
    `SELECT 
        labecomerce_users.id as IdPessoa, 
        labecomerce_users.name as NomePessoa, 
        labecommerce_purchases.id as IdCompra, 
        labecommerce_products.name as Produto,
        labecommerce_purchases.quantity as Quantidade, 
        labecommerce_purchases.total_price as PrecoTotal
        FROM labecommerce_purchases
        INNER JOIN labecomerce_users 
        ON
        labecommerce_purchases.user_id = 
        labecomerce_users.id
        INNER JOIN labecommerce_products
        ON
        labecommerce_purchases.product_id =
        labecommerce_products.id
        WHERE labecomerce_users.id = "${userId}";
        `
  );

  let AllPurchases: AllPurchases[] = [];
  let infoPerson: any = {};
  result[0].map((person: any) => {
    infoPerson = {
      idPerson: person.IdPessoa,
      namePerson: person.NomePessoa,
    };
    AllPurchases.push({
      idPurchase: person.IdCompra,
      ProductName: person.NomeProduto,
      Quantity: person.Quantidade,
      TotalPrice: person.PrecoTotal,
    });
  });
  const allPurchasesByUser: PurchasesByUser = {
    idPerson: infoPerson.idPerson,
    namePerson: infoPerson.namePerson,
    compras: AllPurchases,
  };
  return allPurchasesByUser;
}
