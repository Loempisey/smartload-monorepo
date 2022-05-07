const db = require('./../models')

const createCustomer = async(req,res)=>{
    const body = req.body;

    //check condition when request empty body
    if(Object.keys(body).length == 0){
        return res.status(400).send({
            message: "can not empty body",
            statusCode:400,
        });
    }
    const customer = new db.customer({
        avatar: body.avatar,
        name: body.name,
        location:body.location,
        phone:body.phone,
        code:body.code,
    });
    try{
        const response=await customer.save()
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
const getCustomer= async(req,res)=>{
    try{
        const response = await db.customer.find()
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
const updateCustomer = async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    console.log(body)
    
    try{
        const response= await db.customer.findByIdAndUpdate(id,body)
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
const deleteCustomer = async(req,res) => {
    const id =  req.params.id;
    const body = req.body;

    try{
        const response = await db.customer.findByIdAndDelete(id,body)
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
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
}