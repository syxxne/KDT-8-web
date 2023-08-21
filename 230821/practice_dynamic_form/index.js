const express = require("express");
const app = express();
const PORT = 8000;

const userInfo = { id: "kdt8", pw: "1234" };

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//post실습
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  //코드 실습
  console.log(req.body);
  if (req.body.username === userInfo.id && req.body.password === userInfo.pw) {
    console.log("true");
    res.send({ result: true });
  } else {
    console.log("false");
    res.send({ result: false });
  }
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
