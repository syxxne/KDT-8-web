const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.userId + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
});

app.get("/", (req, res) => {
  res.render("index2");
});

app.post("/uploadPractice", uploadDetail.single("profileImg"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({ data: req.body, img: req.file });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// uploadDetail ~ : multer 셋팅 값
