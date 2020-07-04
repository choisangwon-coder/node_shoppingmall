//01
const express = require("express");
const router = express.Router();

// order data read
router.get('/', (req, res) => {
    res.json({
        message : "order get all"
    });
});

// order data create
router.post('/', (req, res) => {
    res.json({
        message : "order posted"
    });
});

// order data update
router.patch('/', (req, res) => {
    res.json({
        message : "order Updated"
    });
});


// order data del
router.delete('/', (req, res) => {
    res.json({
        message : "order del"
    });
});


//02
module.exports = router;

