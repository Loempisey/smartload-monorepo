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
        cus_profile: body.cus_profile,
        cus_name: body.cus_name,
        cus_location:body.cus_location,
        cus_phone_num:body.cus_phone_num,
        code_item:body.code_item,
    });
    try{
        const response=await customer.save()
        res.status(200).send({
            data:response,
            statusCode:201,
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
    
    try{
        const response= await db.customer.findByIdAndUpdate(id,body)
        res.status(200).send({
            data:response,
            message:`update id : ${id}`,
            statusCode:200,
        });
    }catch{
        res.status(500).send({
            error:error,
            statusCode:500,
        });
    } 
}
const deleteCustomer = async(req,res)=>{
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