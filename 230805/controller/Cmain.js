const Comment = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  console.log(req.params.id);

  const commentId = req.params.id;
  const comments = Comment.commentInfos();
  console.log(comments[commentId - 1]);

  // :id 변수에 숫자가 아닌 값이 들어올 경우 처리
  if (isNaN(commentId)) return res.render("404");

  // :id 변수가 숫자는 맞으나 존재하지 않는 댓글인 경우
  if (commentId < 1 || commentId > comments.length) return res.render("404");

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
