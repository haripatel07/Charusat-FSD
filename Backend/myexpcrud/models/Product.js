const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    pname : String,
    pprice : Number,
    pdetails : String
})

// Convert Schema to Model
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;