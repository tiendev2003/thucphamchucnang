const express = require("express");
const { register, login,loginManager } = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/login-manager", loginManager);
module.exports = router;
