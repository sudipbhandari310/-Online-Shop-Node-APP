const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/products");
// const products = [];
router.get("/add-product", productController.getAddProducts);

router.post("/product", productController.postAddProducts);

module.exports = router;
