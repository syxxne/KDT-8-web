const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getForm", (req, res) => {
  const { id, pw } = req.query;
  res.render("result", {
    title: "GET 요청 결과 확인",
    userInfo: { id, pw },
  });
});

app.post("/postForm", (req, res) => {
  const { id, pw } = req.body;
  res.render("result", {
    title: "POST 요청 결과 확인",
    userInfo: { id, pw },
  });
});

// 페이지를 지정할 때에는 use 미들웨어 사용
// app.use("/", (req, res) => {
//   res.render("index");
// });

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
