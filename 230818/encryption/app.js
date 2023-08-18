const express = require("express");
const app = express();
const PORT = 8000;
require("dotenv").config();

let hash = "";

// ejs
app.set("view engine", "ejs");
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.get("/", (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.STATUS);
  console.log(process.env.NODE_ENV);
  res.render("index");
});

app.post("/hash", (req, res) => {
  const { pw } = req.body;
  // const hash = createHashedPassword(pw);
  // hash = createPbkdf(pw);
  hash = bcryptPassword(pw);
  res.json({ hash });
});

app.post("/verify", (req, res) => {
  const { pw } = req.body;
  // const compare = verifyPassword(pw, salt, hash);
  const compare = comparePassword(pw, hash);
  res.json({ compare });
});

app.post("/cipher", (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncrypt(data);
  console.log(encrypt);
  const decrypt = decipher(encrypt);
  res.json({ decrypt });
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const crypto = require("crypto");

// functions
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
  // 같은 비밀번호에 대해 항상 같은 값이 나오기 때문에 요즘에는 잘 사용하지 않는 방식
  return crypto.createHash("sha512").update(password).digest("base64");
};

// salt 생성
const salt = crypto.randomBytes(16).toString("base64");
// 반복 횟수
const iterations = 100;
// 생성할 key의 길이
const keylen = 64;
// 해시 알고리즘
const digest = "sha512";

// -------- 단방향 --------

// 암호 생성
const createPbkdf = (password) => {
  // pbkdf2함수(비밀번호, salt, 반복 횟수, 키의 길이, 알고리즘)으로 생성되고, 버퍼 값을 반환
  // 따라서 toString을 통해 DB에 넣을 수 있는 값으로 변환 필요
  // salt가 다르므로 비밀번호가 같아도 값이 다름(서버 종료했다가 다시 켜면 또 바뀜)
  const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);

  return hash.toString("base64");
};

// 암호 비교
const verifyPassword = (password, salt, dbPassword) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");

  if (compare === dbPassword) {
    return true;
  } else {
    return false;
  }
};

// -------- 양방향 --------

// 256비트 key를 사용, 블록 크기는 128비트
const algorithm = "aes-256-cbc";
// 1byte = 8bit
const key = crypto.randomBytes(32);
// 초기화 벡터, 데이터 블록을 암호화할 때, 보안성을 높이기 위해 사용
const iv = crypto.randomBytes(16);

// 대칭키 암호화
const cipherEncrypt = (word) => {
  // 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  // 암호화할 데이터 처리
  let encryptedData = cipher.update(word, "utf-8", "base64");
  // 최종 결과 생성
  encryptedData += cipher.final("base64");

  return encryptedData;
};

// 복호화
const decipher = (encryptedData) => {
  // 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  // 복호화할 데이터 처리
  let decryptedData = decipher.update(encryptedData, "base64", "utf-8");
  // 최종 결과 생성
  decryptedData += decipher.final("utf-8");

  return decryptedData;
};

// -------- bcrypt(단방향) --------
const bcrypt = require("bcrypt");
const saltNumber = 10;

// 암호 생성
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

// 암호 비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
