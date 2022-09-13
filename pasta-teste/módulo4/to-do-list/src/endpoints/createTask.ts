import { Request, Response } from "express";
import insertTask from "../Data/insertTask";
import moment from 'moment'

export default async function createUser(
    req:Request, res:Response
) {
try {

    if(
        !req.body.title ||
        !req.body.description ||
        !req.body.status ||
        !req.body.limit_date ||
        !req.body.crator_user_id

    ) {
        res.status(400)
        .send("Dados incompletos");
        return
    }
        const dateDiff:number = moment(req.body.limit_date, 'DD/MM/YYYY').unix() - moment().unix()
        console.log(dateDiff)
    

        if(dateDiff<= 0){
            res.status(400).send("deve ser uma data no futuro")
            return
        }
        const id:string = Date.now() + Math.random().toString()  
    await insertTask(
        id,
        req.body.title, 
        req.body.description, 
        req.body.status, 
        moment(req.body.limit_date, "DD/MM/YYYY" ).format('YYYY-MM-DD'),
        req.body.crator_user_id
    )
       res.status(200).send({message:"Tarefa criado com sucesso!",id, limitDate:req.body.limit_date})             
} catch (error:any) {
    res.status(400).send({message:error.message || error.sqlMessage})
}
}