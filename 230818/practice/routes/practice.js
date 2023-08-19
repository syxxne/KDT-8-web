const express = require("express");
const router = express.Router();
const controller = require("../controller/Cpractice");

router.get("/", controller.index);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.signin);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);

router.post("/verify", controller.verify);

router.get("/viewInfo", controller.getViewInfo);

module.exports = router;
