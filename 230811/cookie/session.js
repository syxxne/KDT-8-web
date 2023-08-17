const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 옵션 객체
// httpOnly : 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 함
// secure : 값을 true로 하면 https에서만 세션을 주고받음
// secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명 값(세션을 발급할 때 사용되는 키)
// resave : 세션에 수정 사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지, 덮어쓰기 가능하게 하기(false면 덮어쓰기 하지 않음)
// saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 것인지
app.use(
  session({
    secret: "mySessionKey",
    resave: false,
    saveUninitialized: true,
  })
);

const userInfo = { id: "kdt8", pw: "1234" };

app.get("/", (req, res) => {
  const user = req.session.user;
  if (user === undefined) {
    res.render("index2", { isLogin: false });
  } else {
    res.render("index2", { isLogin: true, user: user });
  }
});

// app.get("/", (req, res) => {
//   req.session.name = "홍길동";
//   res.send("세션 설정 완료");
// });

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log("a");
  console.log(req.body);
  if (userInfo.id === req.body.id && userInfo.pw === req.body.id) {
    req.session.user = req.body.id;
    req.redirect("/");
  } else {
    res.send(
      `<script>alert('로그인 실패'); document.locatioin.href="/"; </script>`
    );
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.get("/destroy", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
