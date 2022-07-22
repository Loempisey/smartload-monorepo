const mongoose = require('mongoose')
const User=require('./user.model')
const Class = require('./class.model')
const Customer = require('./customer.model')
const Order = require('./order.model')
const History = require('./history.model')

let db = {};
db.mongoose=mongoose;
db.users=User;
db.classes=Class;
db.customer=Customer;
db.order=Order;
db.history=History;

module.exports=db;
