const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/index");

router.get("/", ProductController.getAllProduct);

module.exports = router;
