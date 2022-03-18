// const mongoose = require('mongoose');
//common js

const db = require('./../../models')
const connectionDB = async() =>{
    try{
        await db.mongoose.connect('mongodb://localhost:27017/bootcampdb')
        console.log("==== Database is connected ====")
    }catch(err){
        throw error
    }
}

module.exports = connectionDB;
