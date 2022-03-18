const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    // username:{
    //     type:String,
    //     require:true

    // },
    // emial:{
    //     type:String,
    //     require:true 
    // },
    // password:{
    //     type:String,
    //     require:true
    // },
    // dob:{
    //     type:Date
    // }
    fullname:{
        type:String,
        require:true 

    },
    emial:{
        type:String,
        require:true 
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }

})

const User = mongoose.model('users',userSchema)
module.exports = User;