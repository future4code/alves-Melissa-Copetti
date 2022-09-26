import { Router } from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { UserController } from "../Controller/UserController"
import { UserDataBase } from "../database/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDataBase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)