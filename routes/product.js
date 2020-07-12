
// 01. 
const express = require("express");
const router = express.Router();

// Product Data CRUD

//'/'사용자 요청기준 잡아주겠다.
// Product Data read
router.get('/', (req, res) => {
    res.json({
        message : "Prodecut get all"
    });
});




// Product Data Create

router.post('/', (req, res) => {

    const product = {
        name: req.body.productname,
        price: req.body.productprice
    };



    res.json({
        message : "Product Created",
        productinfo: product
    });
});




//Product Data Update

router.patch('/', (req, res) => {
    res.json({
        message : "Product Updated"
    });
});



//Product Data Del
router.delete('/', (req, res) => {
    res.json({
        message : "Product Del"
    });
});








// 02
module.exports = router;

