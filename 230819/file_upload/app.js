const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done : 콜백 함수
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // ext : 파일 확장자
      const ext = path.extname(file.originalname);
      // path.base(file.originalname, ext) : 확장자 제거한 파일 이름만
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");

// 미들웨어 등록할 때 app.use 사용
// __dirname : 절대 경로
// package.json과 경로가 달라질 경우, app.use 활용하여 경로 지정해주어야 함
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/axios", (req, res) => {
  res.render("axios_upload");
});

// app.post("/upload", uploadDetail.array("userfile"), function (req, res) {
//   console.log(req.files);
//   console.log(req.body);
//   res.send("upload!");
// });

app.post(
  "/upload",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.send("upload fileds!");
  }
);

app.post("/axios", uploadDetail.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send(req.file.path);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
