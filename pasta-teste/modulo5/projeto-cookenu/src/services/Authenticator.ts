import * as jwt from 'jsonwebtoken'
import { sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()

export class Authenticator {

    generate = (input: authenticationData):string => {
        const token = sign(
            input,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string }
        )

        return token
    }

    getTokenData = (token: string):authenticationData => {
        const data = verify(
            token,
            process.env.JWT_KEY as string
        )
        
        return data as authenticationData
    }
}