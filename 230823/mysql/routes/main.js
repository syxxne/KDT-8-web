const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/signup", controller.signup);
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);

router.get("/userinfo", controller.userinfo);
router.patch("/userinfo", controller.modify);

module.exports = router;
