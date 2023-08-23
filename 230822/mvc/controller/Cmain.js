const commentsModel = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const comments = (req, res) => {
  res.render("comments", { lists: commentsModel });
};

const comment = (req, res) => {
  // 엔드포인트 : 뒤에 붙은 값이 req.params의 key
  console.log(req.params);
  res.render("comment", { data: commentsModel[Number(req.params.id) - 1] });
};

module.exports = {
  main: main,
  comm: comments,
  comment,
};

// 위를 단축하면, exports.main = (req, res) => {
//     res.render("index");
// };

// 모듈 사용 방법
// const test = () => {}
// 1. module.exports = test;
// 2. module.exports.test = "함수, 변수 등 모두 사용";
// 3. exports.test = ""; // 생략형
