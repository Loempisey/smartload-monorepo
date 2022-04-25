const db = require('./../models')
const isEmail = require('validator/lib/isEmail')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const createUser= async(req,res)=>{
    const{
        fullname,username,email,password,dob,role
    }=req.body;
    console.log(fullname,username,email,password,dob,role)
    //body empty
    if(Object.keys(req.body).length==0){
        return res.status(400).send({message:'can not empty data.'})
    }
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
          return res.status(401).send({message:'this eamil is already use.'})
        }
        const newUser = new db.users({
            fullname:fullname,
            username:username,
            email:email,
            password:bcrypt.hashSync(password,8),
            dob:dob,
            role:role
        })
    //create a user
        const data = await newUser.save();
        return res.status(200).send({data})
    }catch(error){
        res.status(500).send({message:error || 'Error is occured.'})
    }
}
const signin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await db.users.findOne({email:email})
        if(!user){
          return res.status(401).send({message:'No user in the system. Please create one'})
        }
        const isRightPassword = bcrypt.compareSync(password,user.password)
        if(!isRightPassword){
            return res.status(401).send({message:'Password is not Matched.'})
        }
        const playload ={userId:user._id}
        jwt.sign(playload,process.env.JWT_SECRET_KEY,{expiresIn:'1d'},(err,token)=>{
            if(err){
               return res.status(401).send({error:err})
            }
            res.status(200).send({data:user,token:token})
        })    
    }catch (error){
        res.status(500).send({message:error||'Error is occured.'})
    }
}

const getUser =async(req,res)=>{
    const response = await db.users.find();
    res.status(200).send({
        data:response,
        count : response.length,
        message: "Success",
        statusCode:200,
        
    })
}
const updateUser =(req,res)=>{
    const id=req.params.id;
    console.log("Update User")
    if(id){
        res.status(200).send({message:`Update User : ${id}`})    
    }
    else{
        res.status(400).send({message:"bad request, missing id"})
    }
    
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
    deleteUser
}




