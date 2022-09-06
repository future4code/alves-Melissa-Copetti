import { baseURL } from "./endpoints/baseUrl";
import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import axios from "axios";

//exercício 1

//a. Qual endpoint você deve utilizar para isso?
//get

//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
//Promise<any[]>
//c.
// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//   };
//exercicio 2
//b.
//   const getSubscribers = async ():Promise<any[]> =>{
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//   };

//a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// a arrow parece mais simples porque o 'async' aparece depois da chamada da função "const nomeDaFuncao" e antes da tipagem, que no caso é promise<any[]>. o restante da função é escrito da mesma forma, com cost response = axios.get...

//Exercicio 3
//a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
// const getSubscribers = async ():Promise<subscribers[]> =>{
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//   };

//sim,temos uma tipagem.

//b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso

//é boa prática mapear para saber os elementos do endpoint

//c. Reimplemente a função, corretamente.

const getSubscribers = async (): Promise<subscribers[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

//Exercício 4
const createNews = async (
    title: string,
    content: string,
    date: number
    ): Promise<void>=> { await axios.put(`${baseURL}/news`,{
title: title,
content:content,
date:date
} )
}

//Exercício 5
const sendNotifications = async (
    users: subscribers[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };