const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    product_id:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required:true,
    },
    product_img:{
        type:String,
        required:true,
    },
});

const Product = mongoose.model('product',productSchema);
module.exports = Product;