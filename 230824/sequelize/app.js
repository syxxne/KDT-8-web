const express = require("express");
const db = require("./models");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router 분리
const router = require("./routes/main");
app.use("/", router);

// 오류 처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

// DB 싱크
// force: true -> 항상 테이블을 삭제 후, 재생성
// force: false (default) -> 테이블 존재하면 pass, 없으면 생성
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
