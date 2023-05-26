import { Router } from "express";

import { Todo } from "../models/todo.models";

const todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
});

router.put("/todo/:todoID", (req, res, next) => {
  const todoID = req.params.todoID;
});

export default router;
