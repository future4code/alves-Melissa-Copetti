import { UserData } from "../types";
import { connection } from "./connection";

export default async function selectUser(
  userId: string
):Promise <UserData | undefined> {
  const [result] = await connection("labecomerce_users").select("*").where({ id: userId });
  
  if(result) {
  const usertType:UserData ={
    id:result.id,
    name:result.name,
    email:result.email,
    password:result.password
  } 
  return usertType
}else{
    return undefined
}
 
}