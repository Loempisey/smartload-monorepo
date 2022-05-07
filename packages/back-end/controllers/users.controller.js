const db = require("./../models");
const isEmail = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const getCurrentUser = async (req, res) =>{
  const userId = req.userId;
  if(!userId) response.errorResponse(res, 401, undefined, "Unauthorized");
  try {
    const user = await db.users.findById(userId);
  if(!user) response.errorResponse(res, 401, undefined, "No current user");
    res.status(200).send({message:"Success get current user",data:user})

  
  }catch (error) {
    console.log(error)
    res.status(500).send({message:error || "Internal Server Error"})
      // const user = await db.users.findById(userId)
    // if(!user) response.errorResponse(res, 401, undefined, "No current user");
    // res.status(200).send({message:"Success get current user",data:user})
  }
};


const signUp = async (req, res) => {
  const { fullname, username, email, password, profile_url, role } = req.body;
  if (Object.keys(req.body).length == 0) {
    return res.status(400).send({
      message: "cannot empty body",
      statusCode: 400,
    });
  }
  //check validate email
  if (!isEmail(email)) {
    return res.status(200).send({ message: "Email is invalid" });
  }
  if (!password.length > 6 && password.length < 12) {
    return res
      .status(200)
      .send({ message: "Password is required between 6-12 digit" });
  }
  try {
    const users = await db.users.findOne({ email: email });
    if (users) {
      return res.status(401).send({ message: "this email is alread used" });
    }
    const newUsers = new db.users({
      fullname,
      username,
      email,
      password: bcrypt.hashSync(password, 8),
      profile_url,
      role,
    });
    //Create users
    const data = await newUsers.save();
    return res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ message: error || "Error is occured" });
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await db.users.findOne({ email: email });
    if (!users) {
      return res
        .status(401)
        .send({ message: "No user in database. Please signUp!" });
    }
    const isRightPassword = bcrypt.compareSync(password, users.password);
    if (!isRightPassword) {
      return res.status(401).send({ message: "Incorrect password" });
    }
    const payload = { userId: users._id };
    console.log(process.env.JWT_SECRET_KEY)
    jwt.sign(
        payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          return res.status(401).send({ error: err });
        }
        res.status(200).send({ data: users, token: token });
      }
    );
  } catch (error) {
    res.status(500).send({ error: error || "Error is occured" });
  }
};


const createUsers = async(req,res) =>{
    const body = req.body;
    if (Object.keys(body).length == 0) {
        return res.status(400).send({
          message: "cannot empty body",
          statusCode: 400,
        });
      }
      const users = new db.users({
        fullname:body.fullname,
        username:body.username,
        email:body.email,
        password: body.password,
        profile_url: body.profile_url,
      })

      try{
        const response = await users.save()
        res.status(200).send({
            statusCode:200,
            data:response,
        })
      }catch(error){
        res.status(500).send({
            statusCode:500,
            message:error.message,
        });
        throw error;
      }
};

const getUsers = async (req, res) => {
  // const userId = req.userId;
  const users = await db.users.find();
  res.status(200).send({ data: users });
};

const deleteUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db.users.findByIdAndDelete(id);
    if (!response)
      return res.status(404).send({
        message: `Not found with id: ${id}`,
        statusCode: 404,
      });

    return res.status(200).send({
      data: response,
      message: `Delete id: ${id}`,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      statusCode: 500,
    });
  }
};

const updateUsers = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const response = await db.users.findByIdAndUpdate(id, body);
    res.status(200).send({
      data: response,
      message: `Update id: ${id}`,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      statusCode: 500,
    });
  }
};
module.exports = {
  // createUsers,
  signUp,
  signIn,
  getUsers,
  getCurrentUser,
  deleteUsers,
  updateUsers,
};
