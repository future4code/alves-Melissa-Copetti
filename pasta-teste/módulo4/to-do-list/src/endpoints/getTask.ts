import { Request, Response } from "express";

export default async function getTask(
    req:Request, res:Response
) {
try {
   
} catch (error:any) {
    res.status(500).send({message:error.message || error.sqlMessage})
}
}