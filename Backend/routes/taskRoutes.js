import express from 'express'
import { readTask } from '../controllers/taskcontroller.js';


const taskRoutes = express();


taskRoutes.get("/",(req,res)=>{
    try {
        readTask()
        res.status(200).send({
            message:"welcome to task",
        })
    } catch (error) {
        res.status(500).send({
            message:"some thing went wrong with server",
            error: error.message
        })
    }
})

export default taskRoutes