const { Todo } = require("../models");

// get /todos post /todo patch /todo/:todoId delete /todo/:todoId

const main = (req, res) => {
  console.log("aa");
};

const todoList = async (req, res) => {
  const result = await Todo.findAll();

  console.log(result);
  res.json({ data: result });
};

const newTodo = async (req, res) => {
  console.log(req.body);
  const { title } = req.body;

  const result = await Todo.create({ title });
  console.log(result);

  res.json({ result: true });
};

const editTodo = async (req, res) => {
  const { id, title } = req.body;

  const result = await Todo.update({ title }, { where: { id } });
  console.log(result);

  res.json({ result: true });
};

const deleteTodo = async (req, res) => {
  const { id } = req.body;

  const result = await Todo.destroy({ where: { id } });
  console.log(result);

  res.json({ result: true });
};

module.exports = {
  main,
  todoList,
  newTodo,
  editTodo,
  deleteTodo,
};
