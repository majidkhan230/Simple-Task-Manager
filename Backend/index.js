import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";



const app = express()
dotenv.config()


app.use(express.json())


app.use("/",taskRoutes)






const PORT  =  process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server is sucessfully running! ${PORT}`)
})