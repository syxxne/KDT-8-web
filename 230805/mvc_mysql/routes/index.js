const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitor", controller.getVisitors);
router.get("/visitor/get", controller.getVisitor);
router.post("/visitor/write", controller.writeVisitor);
router.patch("/visitor/edit", controller.editVisitor);
router.delete("/visitor/delete", controller.deleteVisitor);

module.exports = router;
