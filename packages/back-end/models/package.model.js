const mongoose = require('mongoose');
const packageSchema = mongoose.Schema({
    type_business:{
        type: String,
        required: true,
    },
    price_paid:{
        type: String,
        required:true,
    },
    des:{
        type:String,
        required:true,
    },
    // register:{
    //     type:String,
    //     required:true,
    // },

}, {timestamps:true});

const Package = mongoose.model('package',packageSchema);
module.exports = Package;