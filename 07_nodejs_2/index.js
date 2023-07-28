// import express from "express";
const express = require("express");

const app = express();
const PORT = 8000;

// 뷰 엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// views 불러옴
// app.use("/views", express.static(__dirname + "/views"));

// 정적인 파일 불러옴
app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  // send() : 클라이언트에게 응답 데이터를 보낼 때 사용
  //   res.send({ result: true, code: 1000 });

  // render() : 뷰 엔진 렌더링
  res.render("test");
});

app.get("/test1", (req, res) => {
  res.render("test1");
});

app.get("/test2", (req, res) => {
  res.render("test2");
});

app.get("/test3", (req, res) => {
  res.render("test3", (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

console.log(express);
