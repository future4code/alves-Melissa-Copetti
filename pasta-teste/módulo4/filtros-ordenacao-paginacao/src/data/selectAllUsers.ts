import { user } from './../types';
import { connection } from "./connection"

export default async function selectAllUsers():Promise<any> {
    const result = await connection("aula49_exercicio").where("name", "LIKE", `%${name}%`)
    const usuarios = result.map(toUsers)
    
    return result;
 }

 const toUsers = (input:any): user => {
    return {
        id:input.id,
        name:input.name,
        email:input.email,
        type:input.type
    };
 };