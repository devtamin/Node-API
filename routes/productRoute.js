
const express = require("express");
const Product = require("../models/productModel")
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require("../controller/productController")
const router = express.Router();




router.get('/products', getProducts)

router.get('/products/:id',getProduct)


router.post('/products',createProduct)

// update a product
router.put('/products/:id',updateProduct)

// delete a product

router.delete('/products/:id', deleteProduct)


module.exports = router;