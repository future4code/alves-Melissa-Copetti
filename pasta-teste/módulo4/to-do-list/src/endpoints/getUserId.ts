import { Request, Response } from "express";
import selectUserId from "../Data/selectUserId";

export default async function getUserId (
    req:Request, res:Response
) {
try {
const user = await selectUserId(req.params.id)

if(!user){
    res.status(404).send("Usuário não encontrado.")
    return
}
res.status(200).send({message:"Usuário:",
id:user.id, nickname:user.nickname})
   
} catch (error:any) {
    res.status(400).send({message:error.message || error.sqlMessage})
}
}