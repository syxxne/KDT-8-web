const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// express 가져오기 위해 app을 가져옴
// 해당 파일에서는 express의 Router를 router로 가져와서 사용하므로 app 더이상 사용 X (대신 router 사용)

router.get("/", controller.main);

// 전체 목록 보기
router.get("/comments", controller.comm);

// 상세 보기
router.get("/comment/:id", controller.comment);

module.exports = router;
