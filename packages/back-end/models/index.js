const mongoose = require('mongoose')
const Contact = require('./contact.model')
const History = require('./history.model')
const Package = require('./package.model')
const Users = require('./users.model')
const Product = require('./product.model')
let db = {};

db.mongoose = mongoose;
db.contact = Contact;
db.history = History;
db.package = Package;
db.users = Users;
db.product = Product;

module.exports= db;

