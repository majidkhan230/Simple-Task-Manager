import express from 'express'
import { createTask, getAllData, readTask, updateTask, writeTask } from '../controllers/taskController.js';


const taskRoutes = express();


taskRoutes.get("/",getAllData)
taskRoutes.post("/",createTask)
taskRoutes.put("/:id",updateTask)
export default taskRoutes