const express = require("express");
const { getProduct, saveProduct } = require("../controllers/product.controller");

const router = express.Router();

router.get("/products",getProduct);

router.post("/products",saveProduct);


module.exports = router;