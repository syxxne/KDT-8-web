const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
  res.render("index3", { title: "POST로 정보 받기" });
});

// app.get("/getForm", (req, res) => {
//   console.log(req.query);
//   res.render("result2", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//   });
// });

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result3", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

// router
// app.get("/", (req, res) => {
//   // res.send("Hello");
//   res.render("index", { title: "폼 실습" });
// });

// app.get("/getForm", (req, res) => {
//   console.log(req.query);
//   res.render("result", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//   });
// });

// app.post("/postForm", (req, res) => {
//   console.log(req.body);
//   res.render("result", {
//     title: "POST요청 폼 결과 확인하기",
//     userInfo: req.body,
//   });
// });

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 새로운 페이지 연결할 때 (router)
// app.get("/도메인", (req, res) => {
//   res.render("ejs 파일명");
// })
// app.get : get 방식으로 페이지를 보여줌
// app.post : post 방식으로 정보를 전송
