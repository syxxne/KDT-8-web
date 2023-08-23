const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/students", controller.students);

router.get("/addStudent", controller.getAdd);
router.post("/addStudent", controller.add);

module.exports = router;
