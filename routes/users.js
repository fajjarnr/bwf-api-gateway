const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const { register, login, update, getUser, logout } = require("./handler/users");

router.get("/", verifyToken, getUser);
router.post("/register", register);
router.post("/login", login);
router.put("/", verifyToken, update);
router.post("/logout", verifyToken, logout);

module.exports = router;
