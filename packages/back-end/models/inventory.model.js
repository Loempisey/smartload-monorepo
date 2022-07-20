const mongoose = require ('mongoose')
const InventorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    qty:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    
})
const Inventory=mongoose.model('inventory',InventorySchema)
module.exports=Inventory;