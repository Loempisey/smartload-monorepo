const mongoose = require ('mongoose')
const HistorySchema = mongoose.Schema({
    date_and_time:{
        type: String,
        required:true,
    },
    customer_his:{
        type:String,
        required:true,
    },
    order_his:{
        type:String,
        required:true,
    },
},{timesTamp:true})
const History=mongoose.model('history',HistorySchema)
module.exports=History;

