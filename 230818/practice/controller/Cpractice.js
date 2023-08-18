const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECREAT = "secreat";
let hash = "";

exports.index = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, userid, pw } = req.body;
    hash = bcryptPassword(pw);
    const user = await User.create({
      name,
      userid,
      pw: hash,
    });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.signin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const user = await User.findAll({
      attributes: ["name", "userid", "pw"],
      where: {
        userid: req.body.userid,
      },
    });
    const compare = comparePassword(pw, user[0].pw);
    const token = jwt.sign({ userid }, SECREAT);
    console.log(token);
    res.send({ result: compare, user: user[0], token });
  } catch (error) {
    console.log(error);
  }
};

exports.verify = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization.split(" ");
  console.log(token);

  if (token[0] === "Bearer") {
    // 콜백 함수 활용
    jwt.verify(token[1], SECREAT, (err, decoded) => {
      if (err) {
        // err 발생 시, 함수 종료하기 위해 return 사용
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다." });
      }
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증 방식이 아닙니다." });
  }
};

const salt = 10;

const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
