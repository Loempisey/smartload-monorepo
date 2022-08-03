const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const morgan=require('morgan');
const db = require('./models')
const dotenv = require('dotenv');
const http = require("http"); 
const server = http.createServer(app);
const socketio = require("socket.io")
dotenv.config({path:'config.env'})
const PORT = process.env.PORT||7777;

// connectionDB();

db.mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("DB is connected")
}).catch((err)=>{
    console.log("Error",err)
})
const io = socketio(server, {
    cors:{
        origin: [process.env.CLIENT_URL],
    },
});

io.on('connection', (socket) => {
    console.log("Client is connected");
    io.on("disconnect", () => {
        console.log("Client is disconnect")
    });
});

module.exports = io;

app.use(cors({
    origin: '*',
    methods: ['GET',"POST","PUT","DELETE"],
  }))

  



// console.log(PORT)
// console.log(process.env.MONGO_URI)
//Log Request
app.use(morgan('tiny'))

//get data from body
app.use(bodyParser.urlencoded())
//accept json format
app.use(express.json())

// Static Route
// require('./routes/AccessRoute.routes')(app)

// // Query

// require('./routes/QueryStudents.routes')(app)

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

// require('./routes/GetUserInfo')(app)


require('./routes/user.routes')(app)
require('./routes/class.routes')(app)
require('./routes/inventory.routes')(app)
require('./routes/order.routes')(app)
// require('./routes/history.routes')(app)
require('./routes/comment.routes')(app)
app.get("*",(req,res)=>{
    return res.status(200).send({message:"WELCOME TO SMARTLOAD API."})
})


server.listen(PORT,()=>{
    console.log(`Server is starting http://localhost:${PORT}/`)
})