const mongoose = require ('mongoose')
const OrderSchema = mongoose.Schema({
    order_profile:{
        type: String,
        required:true,
    },
    order_name:{
        type:String,
        required:true,
    },
    order_location:{
        type:String,
        required:true,
    },
    order_phone_number:{
        type:String,
        required:true,
    },
    order_status:{
        type:String,  
    },
    is_live:{
        default:false,
    },
    // product_id:[
    //     ref('product')
    // ],
},{timestamps:true})
const Order=mongoose.model('order',OrderSchema)
module.exports=Order;