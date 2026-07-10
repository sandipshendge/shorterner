import express from "express"
import { createUrl, getUrl } from "../controller/user.controller.js";

//import { createUrl, getUrl } from "../controller/user.controller";

const userRouter = express.Router()
    userRouter.post("/",createUrl)
     userRouter.get("/",getUrl)

export default userRouter;