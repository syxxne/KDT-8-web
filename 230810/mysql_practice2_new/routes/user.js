const express = require("express");
// import controller from "../controller/Cuser.js"; 도 가능
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.signin);

router.post("/profile", controller.viewProfile);
router.post("/profile/edit", controller.editProfile);
// router.patch("/profile/edit", controller.editProfile); 도 가능
router.post("/profile/delete", controller.deleteProfile);
// router.delete("/profile/delete", controller.deleteProfile); 도 가능

router.get("/findall", controller.findall);

module.exports = router;
