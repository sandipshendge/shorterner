import express from "express"
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express()
const PORT = process.env.PORT || 8080;
dotenv.config()
app.use(express.json())
app.use(cors());
app.use("/", userRouter);


app.options("/", cors());


app.listen(PORT,async()=>{
    await connectDB();
    console.log(`server is started ${PORT}`)
})