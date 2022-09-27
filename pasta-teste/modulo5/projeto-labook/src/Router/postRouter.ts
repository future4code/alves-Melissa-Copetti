import { Router } from "express"
import { PostBusiness } from "../Business/PostBusiness"
import { PostController } from "../Controller/PostController"
import { PostDataBase } from "../DataBase/PostDataBase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"


export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDataBase(),
        new IdGenerator(),
        new Authenticator()
    )
)