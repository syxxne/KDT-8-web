const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    // result.dataValues.id 또는 result.id로 접근(dataValues 생략 가능)
    res.send({ result: true });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.signin = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    if (result == null) {
      res.send({ result: false });
    } else {
      res.send({ result: true });
    }
  });
};

exports.viewProfile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.profileId },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

exports.editProfile = (req, res) => {
  // const { userid, pw, name } = req.body
  // name, pw와 같이 수정 가능(이름 같으면, : 이후 생략 가능)
  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        userid: req.body.userid,
      },
    }
  ).then(() => {
    res.send({ result: true });
  });
};

exports.deleteProfile = (req, res) => {
  models.User.destroy({
    where: {
      userid: req.body.userid,
    },
  }).then(() => {
    res.send({ result: true });
  });
};

exports.findall = (req, res) => {
  models.User.findAll({
    // findOne에서도 attributes 사용 가능
    // attributes : 원하는 컬럼 조회
    // attributes: ["name", "userid"],
    // Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지 않은)
    // Op.or(또는), Op.in(배열 요소 중 하나), Op.notIn(배열 요소와 모두 다름)
    // where: {id : {[Op.gte]: 4}} id가 4 이상인 row
    // order : 정렬 순서
    // order: [["id", "DESC"]] id를 desc 방법으로 가져와라
    // limit : 최근 데이터 n개 가져옴
    // offset : n개 건너뛰고 가져옴
  }).then((result) => {
    console.log(result);
    res.send("findAll");
  });
};
