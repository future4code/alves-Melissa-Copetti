// import { UserDataBase } from './../data/UserData';
// import { Response, Request } from "express"
// import { Authenticator } from "../services/Authenticator"

// export async function getAllCharacters (req:Request, res:Response){
// try {
//     const token = req.headers.authorization
//     if(!token) {
//         res.status(422).send("Esse endpoint exige uma autorização  de token a ser passada no headers")
//     }

//     const authenticator = new Authenticator()
//     const tokenData = authenticator.getTokenData(token as string)
    

//     if(tokenData.role !== 'ADMIN') {
//         res.status(401).send("Somente administradores podem acessar essa funcionalidade")
//     }
//     const userDataBase = new UserDataBase()
//     const users = await userDataBase.getAllUsers()

//     res.status(200).send(users)
// } catch (error:any) {
//     res.status(400).send(error.message)
// }
// }