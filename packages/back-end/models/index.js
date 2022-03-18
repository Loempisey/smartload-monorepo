const mongoose = require('mongoose')
const User = require('./user.model')
const Contact = require('./contact.model')

let db = {};
db.mongoose = mongoose;
db.users = User;
db.contact = Contact;

module.exports= db;