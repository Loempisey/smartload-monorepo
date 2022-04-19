const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true 
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{timestamps:true})

const Contact = mongoose.model('contact',contactSchema)
module.exports = Contact;