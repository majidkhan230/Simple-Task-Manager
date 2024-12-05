import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data", "data.json");

// Read tasks
export const readTask = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// Write tasks
export const writeTask = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// Get all tasks
export const getAllData = (req, res) => {
  try {
    const data = readTask();
    res.status(200).send({
      message: "Welcome to task data",
      task: data,
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong with the server",
      error: error.message,
    });
  }
};

// Create a task
export const createTask = (req, res) => {
  try {
    const task = req.body;
    const tasks = readTask();
    tasks.push(task);
    writeTask(tasks);

    res.status(201).send({
      message: "Task created successfully",
      task: task,
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong with the server",
      error: error.message,
    });
  }
};

// Update a task
export const updateTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const tasks = readTask();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).send({ message: "Task not found!" });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body }; 
    writeTask(tasks);

    res.status(200).send({
      message: "Task updated successfully",
      task: tasks[taskIndex],
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong with the server",
      error: error.message,
    });
  }
};

// Delete a task
export const deleteTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const tasks = readTask();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).send({ message: "Task not found!" });
    }

    tasks.splice(taskIndex, 1); 
    writeTask(tasks);

    res.status(200).send({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong with the server",
      error: error.message,
    });
  }
};
