const express = require("express");
const router = express.Router();

const { create, getAll, destroy } = require("./handler/media");

router.get("/", getAll);
router.post("/", create);
router.delete("/:id", destroy);

module.exports = router;
