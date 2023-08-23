const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router 분리
// routes 폴더 내의 index.js는 생략 가능
const router = require("./routes/index");
app.use("/", router);

// 오류처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
