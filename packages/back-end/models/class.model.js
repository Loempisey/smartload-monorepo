const mongoose=require('mongoose')
const classSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true, //clear all space and special character
    },
    code:{
        type:Number,
        required:true,
    },
},
{
    timestamps:true, // show the date that was created
}
);

const Class = mongoose.model('classes',classSchema);
module.exports=Class;