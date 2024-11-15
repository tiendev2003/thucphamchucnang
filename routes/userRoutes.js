const express = require("express");
const { register, login,loginManager, getUserInfo, updateUserInfo } = require("../controllers/userController");
const { authenticate } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/login-manager", loginManager);
router.get("/info", authenticate, getUserInfo);
router.put("/update", authenticate, upload.single("image") ,updateUserInfo);
module.exports = router;
