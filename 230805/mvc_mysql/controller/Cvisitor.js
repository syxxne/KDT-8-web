const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() });
  Visitor.getVisitors((result) => {
    res.render("visitor", { data: result });
  });
};

exports.writeVisitor = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const comment = req.body.comment;

  Visitor.writeVisitor(req.body.name, req.body.comment, function (result) {
    console.log(result);
    res.send({
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

exports.getVisitor = (req, res) => {
  console.log(req.query);

  Visitor.getVisitor(req.query.id, function (result) {
    console.log(result);
    res.send({
      id: result[0].id,
      name: result[0].name,
      comment: result[0].comment,
    });
  });
};

exports.editVisitor = (req, res) => {
  console.log("수정:", req.body);

  Visitor.editVisitor(
    req.body.id,
    req.body.name,
    req.body.comment,
    function (result) {
      console.log(result);
      res.send(result);
    }
  );
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);

  Visitor.deleteVisitor(req.body.id, function (result) {
    console.log(result);
    res.send(result);
  });
};
