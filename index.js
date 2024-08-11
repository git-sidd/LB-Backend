import express from "express";
import dotenv from "dotenv";
import connectDB  from "./config/Database.js";
import router from "./routes/todoRouter.js";

dotenv.config({
    path:"./.env"
})

const app=express();
//body parser-|
app.use(express.json())
app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page</h1>`)
})
app.listen(process.env.PORT,()=>{
    console.log(`Server Started On port ${process.env.PORT}`)
})

app.use("/api/v1",router)
connectDB();

