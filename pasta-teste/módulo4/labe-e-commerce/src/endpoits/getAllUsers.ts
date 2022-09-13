import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

export const getAllUsers = async (req:Request, res:Response) =>{
    try {

        const allUsers = await selectUsers()

        if(!allUsers?.length) {
            throw new Error("Não há usuários cadastrados");
            
        }

        res.status(200).send(allUsers)
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message || error.sqlMessage)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}