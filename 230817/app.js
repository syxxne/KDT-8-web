const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECREAT = "secreat";

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body; // 구조 분해 할당
  const token = jwt.sign({ id }, SECREAT);
  console.log(token);
  res.send({ result: true, token }); // postman에서 응답값 보이기
  // 보낼 응답이 json 객체라면, res.send보다는 res.json을 사용하는 것이 일반적
  // res.json({result: true, token});
});

app.post("/verify", (req, res) => {
  console.log(req.headers.authorization);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  console.log(token);

  if (token[0] === "Bearer") {
    // 콜백 함수 활용
    jwt.verify(token[1], SECREAT, (err, decoded) => {
      if (err) {
        // err 발생 시, 함수 종료하기 위해 return 사용
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다." });
      }
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증 방식이 아닙니다." });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
