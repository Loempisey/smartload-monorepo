const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    fullname:{
        type: String,
        required:true,
        unique: true
    },
    username:{
        type: String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        unique: true
    },
    dob:{
        type:String
    },
    role:{
        type:String,
        required:true,
        // default:User,
        enum:['guest','user',"admin"]
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
const User=mongoose.model('users',UserSchema)
module.exports=User;