const mongoose = require('mongoose')
const User=require('./user.model')
const Class = require('./class.model')
const Inventory = require('./inventory.model')
const Order = require('./order.model')
// const History = require('./history.model')

const Comment = require('./comment.model')
// const Package = require('./package.model')
// const Product = require('./product.model')
let db = {};
db.mongoose=mongoose;
db.users = User;
db.classes=Class;
db.inventory=Inventory;
db.order=Order;
db.comment=Comment;

module.exports=db;
// db.contact = Contact;
// db.package = Package;
// db.product = Product;
module.exports= db;

