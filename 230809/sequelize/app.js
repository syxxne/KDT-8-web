const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.use("*", (req, res) => {
  res.render("404");
});

// force: true이면, 무조건 테이블을 새로 생성
// force: false이면, 테이블이 없는 경우에만 새로 생성
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
