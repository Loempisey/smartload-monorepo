const mongoose = require ('mongoose')
const CommentSchema = mongoose.Schema({
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
const Comment=mongoose.model('comment',CommentSchema)
module.exports=Comment;
