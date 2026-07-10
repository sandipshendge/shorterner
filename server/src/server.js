import express from "express"
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
const app = express()

app.use(express.json)
app.use(userRouter)

app.listen(8080,async(res,req)=>{
    await connectDB();
    console.log(`server is started 8080`)
})