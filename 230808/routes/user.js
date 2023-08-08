const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.signin);

router.post("/profile", controller.viewProfile);
router.post("/profile/edit", controller.editProfile);
router.post("/profile/delete", controller.deleteProfile);

module.exports = router;
