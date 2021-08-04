const express = require("express");
const router = express.Router();

const { create, get, destroy } = require("./handler/cloudinary");

router.post("/", create);
router.get("/", get);
router.delete("/:id", destroy);

module.exports = router;
