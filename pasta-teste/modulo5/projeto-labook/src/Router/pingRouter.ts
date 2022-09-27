import { Router } from "express"
import { PingBusiness } from "../Business/PingBusiness"
import { PingController } from "../Controller/PingController"


export const pingRouter = Router()

const pingController = new PingController(
    new PingBusiness()
)

pingRouter.get("/", pingController.ping)