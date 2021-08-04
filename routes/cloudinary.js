const express = require("express");
const router = express.Router();

const { create, get, destroy } = require("./handler/cloudinary");

router.post("/cloudinary", create);
router.get("/cloudinary", get);
router.delete("/cloudinary/:id", destroy);

module.exports = router;
