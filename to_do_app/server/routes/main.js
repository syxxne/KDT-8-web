const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/todos", controller.todoList);
router.post("/todo", controller.newTodo);
router.patch("/todo/:todoId", controller.editTodo);
router.delete("/todo/:todoId", controller.deleteTodo);

module.exports = router;
