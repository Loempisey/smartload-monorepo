const express = require('express');
const test = express();
const bodyParser = require('body-parser');
const morgan=require('morgan');
const db = require('./models')
const dotenv = require('dotenv');

// app.use(cors({
//     origin: '*',
//     methods: ['GET',"POST","PUT","DELETE"],
//   }))
// connectionDB();

db.mongoose.connect('mongodb://localhost:27017/test')
dotenv.config({path:'config.env'})

const PORT = process.env.PORT;
console.log(PORT)
console.log(process.env.MONGO_URI)

//Log Request
test.use(morgan('tiny'))

//get data from body
test.use(bodyParser.urlencoded())
//accept json format
test.use(express.json())

// Static Route
require('./routes/AccessRoute.routes')(test)

// Query

require('./routes/QueryStudents.routes')(test)

// test.get("*",(req,res)=>{
//     res.send({message:"Not Found Route."})
// })

test.post("/class",(req,res)=>{
    const body = req.body
    res.status(200).send({message:body})
})

//Dynamic Route (Params,query)

require('./routes/GetUserInfo')(test)


require('./routes/user.routes')(test)
require('./routes/class.routes')(test)
require('./routes/customer.routes')(test)
require('./routes/order.routes')(test)
require('./routes/history.routes')(test)

test.listen(PORT,()=>{
    console.log(`Server is starting http://localhost:${PORT}/`)
})