const model = require("../model/Model");

// GET
const main = (req, res) => {
  res.render("index");
};

const signup = (req, res) => {
  res.render("signup");
};

const signin = (req, res) => {
  res.render("signin");
};

const userinfo = (req, res) => {
  res.render("userinfo");
};

// POST
const post_signup = (req, res) => {
  console.log(req.body);
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

// PATCH
const modify = (req, res) => {
  console.log(req.body);
  model.db_userinfo(req.body, () => {
    res.json({ result: true });
  });
};

// res.redner : view 페이지를 렌더링 render(view 페이지 이름, 데이터(선택))
// res.send : 모든 타입 데이터 전송(모든 타입 - 문자열, 배열, 객체, 숫자)
// res.json : 객체 타입 데이터 전송(json)
// res.redirect : 페이지 이동

module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
  userinfo,
  modify,
};
