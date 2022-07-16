const db = require('./../models')
const io = require('./../server')

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
        const responses = await customer.save()
        const response = await db.customer.find()
        io.emit('customer', response);
        res.status(200).send({
            message: "Create Successful",
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
        const resp= await db.customer.findByIdAndUpdate(id,body)
        const response = await db.customer.find()
        io.emit('customer', response);
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
const deleteCustomer = async(req,res) => {
    const id =  req.params.id;
    const body = req.body;

    try{
        const responses = await db.customer.findByIdAndDelete(id,body);
        //socket customer
        const response = await db.customer.find()
        io.emit('customer', response);
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
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
}