const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    profile_url:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        default: 'user',
        enum: ['user', "admin"]
    }
});{timeStamps:true}

const Users = mongoose.model('users', usersSchema);
module.exports = Users;



