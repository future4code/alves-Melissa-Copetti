import { Request, Response } from 'express';


export const getUserOrdened = async(req:Request, res:Response): Promise<void> =>{
    try {
        let sort = req.query.sort as string;
        let order = req.query.order as string;

        if (!sort || !order) {
            throw new Error("Dados fornecidos incompletos ou inexistentes");
            
        }

        sort = sort.toLowerCase() === "name"?"name" : sort.toLowerCase() === "email"?"email": sort.toLowerCase() === "type"?"tipe":"email";
        order = order.toLowerCase() === "DESC"?"DESC":"ASC";

        const users = await selectUserOrdened(sort, order);
        res.status(200).send("sucesso")
    } catch (error:any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    }
}