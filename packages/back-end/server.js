const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const morgan=require('morgan');
const db = require('./models')
const dotenv = require('dotenv');
const http = require("http")
const server = http.createServer(app)
const socketio = require("socket.io")
dotenv.config({path:"config.env"})
const PORT = process.env.PORT;

const io = socketio(server,{
    transports:["polling"],
    cors:{
        origin:"http://localhost:3000",
    }
})
io.on("connection",(socket)=>{
    console.log("Client is connected")
})

module.exports=io;

app.use(cors({
    origin: '*',
    methods: ['GET',"POST","PUT","DELETE"],
  }))
// connectionDB();

db.mongoose.connect('mongodb://localhost:27017/app')
dotenv.config({path:'config.env'})

// console.log(PORT)
// console.log(process.env.MONGO_URI)

//Log Request
app.use(morgan('tiny'))

//get data from body
app.use(bodyParser.urlencoded())
//accept json format
app.use(express.json())

// Static Route
require('./routes/AccessRoute.routes')(app)
//accept json
app.use(express.json());

//Dynamic route (params,query)

// Query

require('./routes/QueryStudents.routes')(app)

// app.get("*",(req,res)=>{
//     res.send({message:"Not Found Route."})
// })

app.post("/class",(req,res)=>{
    const body = req.body
    res.status(200).send({message:body})
})
// Query (get request)
// app.get('/user',(req,res)=>{
//     const query = req.query
//     res.status(200).send({message: "Display user information",query})
// })

//load all routes
// require('./routes/contact.routes')(app)
// require('./routes/history.routes')(app)
// require('./routes/package.routes')(app)
// require('./routes/users.routes')(app)
// require('./routes/product.routes')(app)
// require('./routes/inventory.routes')(app)
// app.post('/user',(req,res)=>{
//     const body = req.body
//     res.status(200).send({message: body})
// })

//Dynamic Route (Params,query)

require('./routes/GetUserInfo')(app)


require('./routes/user.routes')(app)
require('./routes/class.routes')(app)
require('./routes/inventory.routes')(app)
require('./routes/order.routes')(app)
require('./routes/comment.routes')(app)

server.listen(PORT,()=>{
    console.log(`Server is starting http://localhost:${PORT}/`)
})