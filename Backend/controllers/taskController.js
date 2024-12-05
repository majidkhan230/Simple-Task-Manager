import express from 'express'
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";





export const readTask = () => {


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



  const filePath = path.join(__dirname, "../data", "data.json");
  console.log(filePath);

  const data = fs.readFileSync(filePath,'utf-8');

  console.log(data);
};
