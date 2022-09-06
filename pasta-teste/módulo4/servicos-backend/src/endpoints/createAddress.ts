import { getFullAddress } from './../services/getFullAddress';
import { insertAddress } from './../data/insert.Adress';
import { Request, Response } from "express";
import { Address } from "../types";

export const createAddress = async (req:Request, res:Response) =>{
    try {
        const {cep} = req.params
        const address = await getFullAddress(cep)

        if(!address) {
            res.statusCode = 404
            throw new Error("Endereço não encontrado");
            
        }

        const addressDetails:Address = {
            cep: address.cep,
            logradouro:address.logradouro,
            numero:address.ibge,
            complemento:address.complemento,
            bairro:address.bairro,
            cidade:address.localidade,
            estado: address.uf
        }

        await insertAddress(addressDetails)

        res.status(201).send({message:"Endereço criado com sucesso!"})
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message || error.sqlMessage)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}