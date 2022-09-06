import { Request, Response } from "express";
import { getFullAddress } from "../services/getFullAddress";

export const getAddres = async (req: Request, res: Response) => {
  try {
    const { cep } = req.params;
    const address = await getFullAddress(cep);

    if (!address) {
      res.statusCode = 404;
      throw new Error("Endereço não encontrado");
    }
    const addressInfos = {
      logradouro: address.logradouro,
      bairro: address.bairro,
      cidade: address.localidade,
      estado: address.uf,
    };

    res.status(200).send(addressInfos);
  } catch (error: any) {
    if (res.statusCode) {
      res.send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
};
