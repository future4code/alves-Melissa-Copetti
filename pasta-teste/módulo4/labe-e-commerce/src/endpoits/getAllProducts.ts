import { Request, Response } from "express";
import selectProducts from "../data/selectProducts";

export const getAllProducts = async (req:Request, res:Response) =>{
    try {

        const allProducts = await selectProducts()

        if(!allProducts?.length){
            throw new Error("Não há produtos cadastrados");
            
        }
        
        
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message || error.sqlMessage)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}