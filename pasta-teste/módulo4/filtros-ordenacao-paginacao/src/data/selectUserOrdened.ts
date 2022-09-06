import { connection } from "./connection";

export default async function selectUserOrdened(
  sort: string,
  order: string
): Promise<any> {
  const result = await connection("aula49_exercicio").orderBy(sort, order);

  return result;
}
