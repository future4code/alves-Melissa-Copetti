import { Request, Response } from "express";
import selectPurchasesByUser from "../data/selectPurchaseByUser";
import selectUser from "../data/selectUser";


export const getPurchasesByUser = async (req:Request, res:Response) =>{
    try {
const {userId} = req.params

const userAlreadyExist = await selectUser(userId)

if (!userAlreadyExist) {
    throw new Error(`usuario com o id ${userId} nao foi encontrado`)
}

const allPurchases = await selectPurchasesByUser(userId)

if(!allPurchases?.compras.length){
    throw new Error("Essa pessoa não fez nenhuma compra");
    
}
        
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message || error.sqlMessage)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}