import express from "express";
import fs from "fs";
import { get } from "https";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data", "data.json");
// console.log(filePath);

// readTask
export const readTask = () => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return data;
};

// writeTask
export const writeTask = (task) => {
  const tasks = readTask();
  tasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(tasks));
};

// getAllTask
export const getAllData = (req,res)=>{
  try {
    const data =  readTask()
     res.status(200).send({
         message:"welcome to task data",
         task: data
     })
 } catch (error) {
     res.status(500).send({
         message:"some thing went wrong with server",
         error: error.message
     })
 }
}


//createTask
export const createTask  = (req,res)=>{
  try {
  const task =req.body
  writeTask(task)

     res.status(201).send({
         message:"task created sucessfully",
         task: task
     })
 } catch (error) {
     res.status(500).send({
         message:"some thing went wrong with server",
         error: error.message
     })
 }
}

export const updateTask = (req,res)=>{
  const id = req.params.id

  const data = readTask()
  const filterData = data.find((item)=>item.id == id)
  console.log(filterData)

}