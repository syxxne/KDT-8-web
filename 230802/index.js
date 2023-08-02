const express = require("express");
const multer = require("multer");
// 경로를 가져오는 모듈(별도로 설치하지 않아도 됨)
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer setting
const upload = multer({
  // dest : 업로드할 파일을 저장할 경로를 지정
  // 폴더가 자동으로 생성됨
  dest: "uploads/",
});

const uploadDetail = multer({
  // storage : 저장할 공간에 대한 정보
  // diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      // 위의 upload와 달리 폴더가 자동으로 생성되지 않으므로 미리 생성해놓아야 함
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // 파일의 확장자를 가져옴
      const ext = path.extname(file.originalname);
      // 파일 이름 변경 (중복을 막기 위해 파일명에 현재 시간을 추가하는 경우가 많음)
      // file original 이름 + 현재 시간 + 파일 확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // 용량 제한
  limits: { fileSize: 1024 * 1024 * 5 },
});

app.get("/", (req, res) => {
  res.render("index");
});

// singile
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

// multi ver1.
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

//multi ver2.
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

// dynamic form
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);
  }
);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
