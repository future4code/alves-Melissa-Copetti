import { Request, Response } from "express";
import insertProduct from "../data/insertPruduct";
import { ProductData } from "../types";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, img_url } = req.body;

    if (!name || !price || !img_url) {
      throw new Error("Dados incompletos, preencha todos os campos");
    }



    const id = Date.now().toString();
    const productInsert: ProductData = {
      id,
      name,
      price,
      img_url,
    };

    const item = await insertProduct(productInsert);
    res.status(200).send({ message: item });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message || error.sqlMessage);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};
