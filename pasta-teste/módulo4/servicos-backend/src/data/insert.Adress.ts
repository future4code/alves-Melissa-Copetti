import { connection } from "./connection";
import { Address } from "../types";

export const insertAddress = async (address: Address) => {
  await connection.insert(address).into("servicos_backend");
};
