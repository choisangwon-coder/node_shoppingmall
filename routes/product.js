
// 01. 
const express = require("express");
const router = express.Router();
const productModel = require('../models/product');
// Product Data CRUD

//'/'사용자 요청기준 잡아주겠다.
// Product Data read
// 전체 프로덕트 데이터를 불러오는 API
router.get('/', (req, res) => {

    productModel
        .find()
        .then(docs => {
            res.json({
                meg: "get total product data",
                count:docs.length,
                products: docs
            });
        })
        .catch(err => {
            res.json({
                msg:err.message
            });
        });
        



    
});


//상세 프로덕트 데이터만 불러오는 API
router.get("/:productId", (req, res) => {
    const id = req.params.productId;

    productModel
        .findById(id)
        .then(result => {
            if (!result) {
                return res.json({
                    msg: "no product id"
                });
            } else {
                res.json({
                    msg: "product get data" + id,
                    productInfo: result
                })
            }
        })
        .catch(err => {
            res.json({
                msg: err.message
            });
        });
        
})







// Product Data Create
// 프로덕트 데이터를 등록하는 API
router.post('/', (req, res) => {


    const newProduct = new productModel({
        name: req.body.productname,
        price: req.body.productprice,
    });

    newProduct
        .save()
        .then(doc => {
            res.json({
                meg: "saved product data",
                productinfo: doc
            });
        })
        .catch(err => {
            res.json({
                error: err.message
            });
        });
    // const product = {
    //     name: req.body.productname,
    //     price: req.body.productprice
    // };



    // res.json({
    //     message : "Product Created",
    //     productinfo: product
    // });
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

