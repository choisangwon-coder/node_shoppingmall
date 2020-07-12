
//1
const mangoose = require("mongoose");



//2
const productSchema = mangoose.Schema({
    name: String,
    price: Number,
});



//3
module.exports = mangoose.model("product", productSchema);