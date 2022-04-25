const mongoose = require ('mongoose')
const CustomerSchema = mongoose.Schema({
    cus_profile:{
        type: String,
        required:true,
    },
    cus_name:{
        type:String,
        required:true,
    },
    cus_location:{
        type:String,
        required:true,
    },
    cus_phone_num:{
        type:String,
        required:true,
    },
    code_item:{
        type:String,
        required:true,
    },
})
const Customer=mongoose.model('customer',CustomerSchema)
module.exports=Customer;