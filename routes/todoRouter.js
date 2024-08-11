import express from "express";
import { Router } from "express";
import createTodo from "../controllers/createTodoController.js"
import {getTodo,getTodoById} from "../controllers/getTodoController.js";
import { updateTodo } from "../controllers/updateTodoController.js";
import { deleteTodo } from "../controllers/deleteTodoController.js";


const router=Router();



router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)


export default router;