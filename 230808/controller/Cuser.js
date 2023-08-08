const User = require("../model/Muser");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.signup = (req, res) => {
  console.log(req.body);

  User.signup(req.body.userid, req.body.name, req.body.pw, function (result) {
    res.send({ result: true });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.signin = (req, res) => {
  console.log(req.body);

  User.signin(req.body.userid, req.body.pw, function (result) {
    console.log(result);
    res.send(result);
  });
};

exports.viewProfile = (req, res) => {
  console.log(req.body);

  User.viewProfile(req.body.profileId, function (result) {
    res.render("profile", { data: result });
  });
};

exports.editProfile = (req, res) => {
  console.log(req.body);

  User.editProfile(
    req.body.userid,
    req.body.name,
    req.body.pw,
    function (result) {
      console.log(result);
      res.send(result);
    }
  );
};

exports.deleteProfile = (req, res) => {
  console.log(req.body);

  User.deleteProfile(req.body.userid, function (result) {
    console.log(result);
    res.send(result);
  });
};
