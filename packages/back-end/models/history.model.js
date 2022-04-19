const { timestampFormat } = require('concurrently/src/defaults');
const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    // date_and_time:{
    //     type: String,
    //     required: true,
    // },
    customer_his:{
        type: String,
        required:true,
    },
    order_his:{
        type:String,
        required:true,
    },
}, {timestamps:true});

const History = mongoose.model('history',historySchema);
module.exports = History;