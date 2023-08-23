const Students = require("../model/Model");

exports.main = (req, res) => {
  res.render("index");
};

exports.students = (req, res) => {
  res.render("students", { lists: Students });
};

exports.getAdd = (req, res) => {
  res.render("add");
};

exports.add = (req, res) => {
  Students.push(req.body);
  res.send({ result: true });
};
