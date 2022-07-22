const db = require('./../../models');

//commonjs
const connectionDB = async()=>{
    try{
        await db.mongoose.connect('mongodb://localhost:27017/test')
        console.log("Database connected");
    }catch(err){
        throw error;
    }
}

module.exports=connectionDB;