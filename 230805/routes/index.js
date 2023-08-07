const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); // GET / 경로 접속하면 실행
router.get("/comments", controller.comments); // GET /comments 경로 접속하면 실행
router.get("/comment/:id", controller.comment); // GET /comment/:id id는 파라미터 값

module.exports = router;
