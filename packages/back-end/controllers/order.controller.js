const db = require('./../models')

const createOrder = async(req,res)=>{
    const body = req.body;

    //check condition when request empty body
    if(Object.keys(body).length == 0){
        return res.status(400).send({
            message: "can not empty body",
            statusCode:400,
        });
    }
    const order = new db.order({
        order_profile: body.order_profile,
        order_name: body.order_name,
        order_location:body.order_location,
        order_phone_number:body.order_phone_number,
        order_status:body.order_status,
        is_live:body.is_live,
    });
    try{
        const response=await order.save()
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
const getOrder= async(req,res)=>{
    const order_name = req.query.order_name;
    const page = req.query.page;
    let pages;
    if(req.query.limit<=0 || page<+0){
        return res.status(400).send({message: "bad request or limit>0 or page>0",statusCode:400})
    }
    let limit = 10
    if(Boolean(req.query.limit)){
        limit = req.query.limit;
    }

    try{
        //count all document in collection order
        const total = await db.order.find().count();
        // find amount of pages
        if(total%limit==0){
            pages=total/limit;
        }else{
            pages=parseInt(total/limit)+1;
        }
        // When request as search by order_name
        if(order_name){
            const response = await db.order.find({order_name:{$regex:order_name,$options:'i'}})
            res.status(200).send({
                data:response,
                total:total,
                count : response.length,
                message:"success",
                statusCode:200,
            });
        }else if(page){
            // 10 page : 2(limit) , patern : (page-1)2
            // p1 : skip=0 , 
            // p2:  skip=2 , 
            // p3 : skip=4 ,
            // p4 : skip=6 ,

            // 1 page : limit 10,
            
            
            const response = await db.order.find().skip((page-1)*limit).limit(limit)
            let nextPage = null;
            let prevPage = null;
            //find prevPage
            if(page!=1){
                prevPage = `http://localhost:${process.env.PORT}/api/v1/order?page=${Number(page)-1}&limit=${limit}`
            }
            //find next page
            if(page<pages){
                nextPage = `http://localhost:${process.env.PORT}/api/v1/order?page=${Number(page)+1}&limit=${limit}`
            }
            res.status(200).send({
                data:response,
                total:total,
                page : pages,
                count : response.length,
                message:"success",
                statusCode:200,
                currentPage:`http://localhost:${process.env.PORT}/api/v1/order?page=${page}&limit=${limit}`,
                firstPage:`http://localhost:${process.env.PORT}/api/v1/order?page=1&limit=${limit}`,
                prevPage:prevPage,
                nextPage:nextPage,
                lastPage:`http://localhost:${process.env.PORT}/api/v1/order?page=${pages}&limit=${limit}`
            });
        }
        else{
            const response = await db.order.find();
            res.status(200).send({ 
                data:response,
                total:total,
                count : response.length,
            });
        }
    }catch(error){
            res.status(500).send({
            statusCode:500,
            error: error,
        });
    }
}
const updateOrder = async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    
    try{
        const response= await db.order.findByIdAndUpdate(id,body)
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
const deleteOrder = async(req,res)=>{
    const id =  req.params.id;
    const body = req.body;

    try{
        const response = await db.order.findByIdAndDelete(id,body)
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
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
}