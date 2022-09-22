import { Router } from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { UserController } from "../Controller/UserController"
import { UserDatabase } from "../database/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

// userRouter.post("/signup", UserController.)
