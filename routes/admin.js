const path = require("path");

const express = require("express");

const adminController = require("../controllers/adminCon");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProducts);

// /admin/products => GET
router.get("/products", adminController.getProducts);

router.get("/edit-products/:productId", adminController.getEditProducts);
// /admin/add-product => POST
router.post("/add-product", adminController.postAddProducts);

router.post("/edit-products", adminController.postEditProducts);

router.post("/delete-product");

module.exports = router;
