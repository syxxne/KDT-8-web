const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  models.Visitor.findAll().then((result) => {
    res.render("visitor", { data: result });
  });
};

exports.writeVisitor = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    res.send({
      id: result.dataValues.id,
      name: result.dataValues.name,
      comment: result.dataValues.comment,
    });
  });
};

exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    res.send({
      id: result.id,
      name: result.name,
      comment: result.comment,
    });
  });
};

exports.editVisitor = (req, res) => {
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => {
    res.send({ result: true });
  });
};

exports.deleteVisitor = (req, res) => {
  models.Visitor.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.send({ result: true });
  });
};
