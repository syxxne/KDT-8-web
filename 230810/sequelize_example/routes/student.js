const express = require("express");
const router = express.Router();
const controller = require("../controller/Cstudent");

router.get("/", controller.index);
router.post("/student", controller.post_student);
router.get("/student", controller.get_student);
router.post("/class", controller.post_classexports);

module.exports = router;
