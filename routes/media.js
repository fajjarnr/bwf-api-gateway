const express = require("express");
const router = express.Router();

const {
  create,
  getAll,
  destroy,
  createCloudinary,
  destroyCloudinary,
  getCloudinary,
} = require("./handler/media");

router.get("/", getAll);
router.post("/", create);
router.delete("/:id", destroy);
router.post("/cloudinary", createCloudinary);
router.get("/cloudinary", getCloudinary);
router.delete("/cloudinary/:id", destroyCloudinary);

module.exports = router;
