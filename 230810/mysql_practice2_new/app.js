// import express from "express"; 도 가능
const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// routes의 index.js만 require("./routes")와 같이 생략 가능
// import userRouter from "./routes/user.js";도 가능
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.use("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
