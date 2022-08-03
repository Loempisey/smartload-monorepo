const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required:true,
        // unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    role:{
        type:String,
        required:true,
        enum:['user',"admin"],
        default:'user'
    },
    password:{
        type:String,
        required:true,
        // unique: true
    },
    profile:{
        type:String,
    },
    // package_id:ref('packages'),
    // package_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref('packge')
    // }
},{timestamps:true})
const User=mongoose.model('users', UserSchema)
module.exports=User;
