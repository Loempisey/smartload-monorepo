const mongoose = require ('mongoose')
const CustomerSchema = mongoose.Schema({
    avatar:{
        type: String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
})
const Customer=mongoose.model('customer',CustomerSchema)
module.exports=Customer;