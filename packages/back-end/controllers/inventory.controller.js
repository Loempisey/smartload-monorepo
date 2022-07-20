const db = require('../models')

const createInventory = async(req,res)=>{
    const body = req.body;

    //check condition when request empty body
    if(Object.keys(body).length == 0){
        return res.status(400).send({
            message: "can not empty body",
            statusCode:400,
        });
    }
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
            statusCode:200,
        })
    }catch(error){
        res.status(500).send({
            statusCode:500,
            message: error.message,
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
        const response= await db.inventory.findByIdAndUpdate(id,body)
        res.status(200).send({
            data:response,
            message:`update id : ${id}`,
            statusCode:200,
        });
    }catch(error){
        res.status(500).send({
            error:error,
            statusCode:500,
        });
    } 
}
const deleteInventory = async(req,res) => {
    const id =  req.params.id;
    const body = req.body;

    try{
        const response = await db.inventory.findByIdAndDelete(id,body)
        res.status(200).send({
        data:response,
        message:`Delete id : ${id}`,
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