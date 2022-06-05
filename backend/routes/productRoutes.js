const express = require('express');
const { getAllProducts } = require("../controllers/productControllers");

//Can't Remember routes code
const router = express.Router();


//Can't remember routes code //router's Routes fuction use 
router.route("/products").get(getAllProducts)

module.exports = router;