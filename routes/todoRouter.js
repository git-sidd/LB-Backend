import express from "express";
import { Router } from "express";
import createTodo from "../controllers/createTodoController.js"
import {getTodo,getTodoById} from "../controllers/getTodoController.js";
import { updateTodo } from "../controllers/updateTodoController.js";


const router=Router();



router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
router.get("/updateTodo/:id",updateTodo)


export default router;