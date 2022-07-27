<<<<<<< HEAD
const db = require("./../models");
const isEmail = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findByIdAndUpdate } = require("../models/user.model");
=======
const db = require('./../models')
const isEmail = require('validator/lib/isEmail')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087

const getCurrentUser = async (req, res) => {
  const userId = req.userId;
  if (!userId) response.errorResponse(res, 401, undefined, "Unauthorized");
  const user = await db.users.findById(userId);
  if (!user) response.errorResponse(res, 401, undefined, "No current user.");
  res.status(200).send(user);
};

const createUser = async (req, res) => {
  const { fullname, username, email, role, password } = req.body;
  console.log(fullname, username, email, role, password);
  //body empty
  if (Object.keys(req.body).length == 0) {
    return res.status(400).send({ message: "Can not empty data." });
  }
  // Check validate email
  if (!isEmail(email)) {
    return res.status(400).send({ message: "This email is unvalid." });
  }
  // 6 digit
  if (password.length < 6) {
    return res
      .status(400)
      .send({ message: "Password is required at least 6 digits." });
  }
  // duplicated email
  try {
    const user = await db.users.findOne({ email: email });
    if (user) {
      return res
        .status(401)
        .send({ statusCode: 401, message: "This email is already use." });
    }
<<<<<<< HEAD
    const newUser = new db.users({
      fullname: fullname,
      username: username,
      email: email,
      role: role,
      password: bcrypt.hashSync(password, 8),
    });
=======
    // Check validate email
    if(!isEmail(email)){
        return res.status(400).send({message:'Email is unvalid.'})
    }
    // 6 digit
    if(!(password.length>6 && password.length<12)){
        return res.status(400).send({message:'Password is required between 6-12 digit.'})
    }
    // duplicated email
    try{
        const user = await db.users.findOne({email:email})
        if(user){
          return res.status(401).send({statusCode:401,message:'This email is already use.'})
        }
        const newUser = new db.users({
            fullname:fullname,
            username:username,
            email:email,
            role:role,
            password:bcrypt.hashSync(password,8),
            
            
        })
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
    //create a user
    const data = await newUser.save();
    return res.status(200).send({ statusCode: 200, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error", statusCode: 500 });
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.users.findOne({ email: email });
    if (!user) {
      return res.status(401).send({
        statusCode: 401,
        message: "No user in the system. Please create one",
      });
    }
    const isRightPassword = bcrypt.compareSync(password, user.password);
    if (!isRightPassword) {
      return res
        .status(401)
        .send({ statusCode: 401, message: "Password is incorrect." });
    }
    const playload = { userId: user._id };
    const userInfo = user._doc;
    jwt.sign(
      playload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          return res.status(401).send({ error: err });
        }
<<<<<<< HEAD
        res.status(200).send({ statusCode: 200, data: { ...userInfo, token } });
      }
    );
  } catch (error) {
    res.status(500).send({ message: error || "Error is occured." });
  }
};
const getUser = async (req, res) => {
  const response = await db.users.find();
  res.status(200).send({
    data: response,
    count: response.length,
    message: "Success",
    statusCode: 200,
  });
};
const updateUser = async (req, res) => {
  let user;
  const userId = req.userId;
  console.log(userId);
  const { username, email, oldPassword, password } = req.body;
  try {
    user = await db.users.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Update Email
    if (email) {
      if (!isEmail(email)) {
        return res.status(400).send({ message: "Your email is invalid" });
      }
      const isExit = await db.users.findOne({ email: email });
      if (isExit) {
        return res.status(400).send({ message: "This email is already in used" });
      }
      if (password) {
        const match = bcrypt.compareSync(password, user.password);
        if (!match) {
          return res.status(401).send({ message: "Cannot update password, Incorrect password" });
        }
      }
      user = await db.users.findByIdAndUpdate(userId, { email });
      user = await db.users.findById(userId)
      res.status(200).send({statusCode:200, message: "Updated Email.",data:user });
=======
        const isRightPassword = bcrypt.compareSync(password,user.password)
        if(!isRightPassword){
            return res.status(401).send({statusCode:401,message:'Password is incorrect.'})
        }
        const playload ={userId:user._id}
        const userInfo = user._doc
        jwt.sign(playload,process.env.JWT_SECRET_KEY,{expiresIn:'1d'},(err,token)=>{
            if(err){
               return res.status(401).send({error:err})
            }
            res.status(200).send({statusCode:200, data:{ ...userInfo,token}})
        })    
    }catch(error){
        res.status(500).send({message:error||'Error is occured.'})
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
    }

    // Udpate Username
    else if (username) {
      user = await db.users.findByIdAndUpdate(userId, { username });
      user = await db.users.findById(userId)
      return res.status(200).send({statusCode:200, message: "Updated Username.",data:user });
    }
    // Update Password
    else if (password) {
      if (password.length < 6) {
        return res
          .status(400)
          .send({ message: "Password is required at least 6 digits." });
      }
      if (!oldPassword) {
        return res.status(400).send({ message: "Enter old password" });
      }

      if (password) {
        const match = bcrypt.compareSync(oldPassword, user.password);
        if (!match) {
          return res.status(401).send({ message: "Cannot update password, Incorrect password" });
        }
      }
      user = await db.users.findByIdAndUpdate(userId, {
        password: bcrypt.hashSync(password, 8),
      });
     
      return res.status(200).send({statusCode:200, message: "Updated Password."});
    }
<<<<<<< HEAD
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      statusCode: 500,
    });
  }
=======
    
}
const deleteUser =(req,res)=>{
    const id=req.params.id;
    if(id){
        res.status(200).send({message:`Delete User : ${id}`})    
    }
    else{
        res.status(400).send({message:"bad request, missing id"})
    }
}

module.exports={
    createUser,
    signin,
    getUser,
    updateUser,
    deleteUser,
    getCurrentUser
}



>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087

  // const id = req.params.id;
  // console.log("Update User")
  // if(id){
  //     res.status(200).send({message:`Update User : ${id}`})
  // }
  // else{
  //     res.status(400).send({message:"bad request, missing id"})
  // }
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  if (id) {
    res.status(200).send({ message: `Delete User : ${id}` });
  } else {
    res.status(400).send({ message: "bad request, missing id" });
  }
};
  
module.exports = {
  createUser,
  signin,
  getUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
