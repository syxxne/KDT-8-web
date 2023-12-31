// const model = require('../model/Model');
// const {User} = require("../models/index");와 아래는 동일 index 생략 가능
const { User } = require("../models");
const bcrypt = require("bcrypt");

// 쿠키 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
};

///////////////////////////////////////
// GET
const main = (req, res) => {
  // 쿠키 사용
  console.log("cookie", req.cookies.testCookie);
  if (req.cookies.testCookie) {
    res.render("index", { alert: true });
  } else {
    res.render("index", { alert: false });
  }
};
// 회원가입 페이지
const signup = (req, res) => {
  // 쿠키 생성
  // res.cookie(쿠키 이름, 쿠키값, 옵션 객체)
  res.render("signup");
};
// 로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};
// 회원정보 조회 페이지
// findOne : 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
// where는 객체 형태로 찾을 정보를 입력
const profile = (req, res) => {
  console.log(req.params);
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

const userList = (req, res) => {
  console.log("session name", req.session.name, "sessionID", req.sessionID);
  if (req.session.name) {
    User.findAll().then((result) => {
      console.log(result);
      res.render("userList", { name: req.session.name, data: result });
    });
  } else {
    res.redirect("/signin");
  }
};
const buy = () => {};

////////////////////////////////////////////////
// POST
// 회원가입
// create : 데이터 생성
const post_signup = (req, res) => {
  const { userid, name, pw } = req.body;
  User.create({
    userid,
    name,
    pw,
  }).then(() => {
    res.json({ result: true });
  });
};

const post_signin = async (req, res) => {
  // 실습 과제
  // 1. 아이디로 사용자 존재 유무 체크
  // 2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
  const { userid, pw } = req.body;
  const user = await User.findOne({
    where: { userid },
  });

  if (user) {
    const enc_pw = bcryptPassword(user.pw);

    if (comparePassword(pw, enc_pw)) {
      // 세션 생성 : req.session.세션이름
      req.session.name = user.name;
      console.log(req.session.name);
      res.cookie("testCookie", "test", cookieConfig);
      res.json({ result: true, data: user });
    } else {
      res.json({ result: false });
    }
  } else {
    res.json({ result: false });
  }
};
///////////////////////////////////////////
// PATCH
// update(수정될 정보를 객체 형태로 입력, 수정될 곳 객체 입력)
const edit_profile = (req, res) => {
  // 세션 가져오기
  const { name, pw, id } = req.body;
  User.update({ name, pw }, { where: { id } }).then(() => {
    res.json({ result: true });
  });
};

// DELETE
const delete_profile = (req, res) => {
  // 쿠키 삭제
  // res.clearCookie(쿠키 이름)
  const { id, userid } = req.body;
  User.destroy({ where: { id } }).then(() => {
    req.session.destroy();
    res.clearCookie("testCookie");
    res.json({ result: true });
  });
};

const salt = 10;

const bcryptPassword = (pw) => {
  return bcrypt.hashSync(pw, salt);
};

const comparePassword = (pw, dbPw) => {
  return bcrypt.compareSync(pw, dbPw);
};

//res.render: 뷰페이지를 렌더링  render(뷰페이지이름, 데이터(선택)), 뷰 => node.js가 제공하는 템플릿
//res.send: 모든타입 데이터 전송(모든타입? 문자열, 배열, 객체, 숫자 )
//res.json: 객체타입 데이터 전송
//res.redirect: 페이지를 이동
module.exports = {
  main,
  signup,
  signin,
  profile,
  buy,
  post_signup,
  post_signin,
  edit_profile,
  delete_profile,
  userList,
};
