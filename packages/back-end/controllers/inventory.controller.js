<<<<<<< HEAD:packages/back-end/controllers/customer.controller.js
const db = require('./../models')
const io = require('./../server')
=======
const db = require('../models')
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/back-end/controllers/inventory.controller.js

const createInventory = async(req,res)=>{
    const body = req.body;

    //check condition when request empty body
    if(Object.keys(body).length == 0){
        return res.status(400).send({
            message: "can not empty body",
            statusCode:400,
        });
    }
<<<<<<< HEAD:packages/back-end/controllers/customer.controller.js
    const customer = new db.customer({
        avatar: body.avatar,
        name: body.name,
        location:body.location,
        phone:body.phone,
        code:body.code,
    });
    try{
        const responses = await customer.save()
        const response = await db.customer.find()
        io.emit('customer', response);
        res.status(200).send({
            message: "Create Successful",
=======
    const inventory = new db.inventory({
        avatar: body.avatar,
        name: body.name,
        price: body.price,
        description:body.description,
        qty:body.qty,
        category:body.category,
    });
    try{
        const response=await inventory.save()
        res.status(200).send({
            data:response,
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/back-end/controllers/inventory.controller.js
            statusCode:200,
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            statusCode:500,
            message: "Something went wrong !",
        });
        throw error;
    } 
}
const getInventory= async(req,res)=>{
    try{
        const response = await db.inventory.find()
        res.status(200).send({
        data:response,
        count : response.length,
        message:"success",
        statusCode:200,
    });
    }catch(error){
            res.status(500).send({
            statusCode:500,
            error: error,
        });
    }
}

const updateInventory = async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    console.log(body)
    
    try{
<<<<<<< HEAD:packages/back-end/controllers/customer.controller.js
        const resp= await db.customer.findByIdAndUpdate(id,body)
        const response = await db.customer.find()
        io.emit('customer', response);
=======
        const response= await db.inventory.findByIdAndUpdate(id,body)
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/back-end/controllers/inventory.controller.js
        res.status(200).send({
            data:resp,
            message: "Updated Successful",
            // message:`update id : ${id}`,
            statusCode:200, 
        });
    }catch(error){
        res.status(500).send({
            error:error,
            statusCode:500,
        });
    } 
}
<<<<<<< HEAD:packages/back-end/controllers/customer.controller.js
const deleteCustomer = async(req,res) => {
=======
const deleteInventory = async(req,res) => {
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/back-end/controllers/inventory.controller.js
    const id =  req.params.id;
    const body = req.body;

    try{
<<<<<<< HEAD:packages/back-end/controllers/customer.controller.js
        const responses = await db.customer.findByIdAndDelete(id,body);
        //socket customer
        const response = await db.customer.find()
        io.emit('customer', response);
=======
        const response = await db.inventory.findByIdAndDelete(id,body)
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/back-end/controllers/inventory.controller.js
        res.status(200).send({
        data:responses,
        message: "Deleted Successful",
        statusCode:200,
    })
    }catch(error){
        res.status(500).send({
            error:error,
            statusCode:500,
        });
    }   
}
module.exports={
    createInventory,
    getInventory,
    updateInventory,
    deleteInventory,
}