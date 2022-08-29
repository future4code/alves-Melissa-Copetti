import connection from "../connection";

export default async function selectUserId(id: string) {
  const result = await connection("todolist_User").select("*").where({ id });
  return result[0]
}
