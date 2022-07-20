const db = require('../models')

const createComment = async(req,res)=>{
    const body = req.body;

    //check condition when request empty body
    if(Object.keys(body).length == 0){
        return res.status(400).send({
            message: "can not empty body",
            statusCode:400,
        });
    }
    const comment = new db.comment({
        date_and_time: body.date_and_time,
        customer_his: body.customer_his,
        order_his:body.order_his,
    });
    try{
        const response=await comment.save()
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
const getComment= async(req,res)=>{
    const customer_his = req.query.customer_his;
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
        //count all document in collection history
        const total = await db.comment.find().count();
        // find amount of pages
        if(total%limit==0){
            pages=total/limit;
        }else{
            pages=parseInt(total/limit)+1;
        }
        // When request as search by customer_his
        if(customer_his){
            const response = await db.order.find({customer_his:{$regex:order_name,$options:'i'}})
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
            
            
            const response = await db.comment.find().skip((page-1)*limit).limit(limit)
            let nextPage = null;
            let prevPage = null;
            //find prevPage
            if(page!=1){
                prevPage = `http://localhost:${process.env.PORT}/api/v1/comment?page=${Number(page)-1}&limit=${limit}`
            }
            //find next page
            if(page<pages){
                nextPage = `http://localhost:${process.env.PORT}/api/v1/comment?page=${Number(page)+1}&limit=${limit}`
            }
            res.status(200).send({
                data:response,
                total:total,
                page : pages,
                count : response.length,
                message:"success",
                statusCode:200,
                currentPage:`http://localhost:${process.env.PORT}/api/v1/commentpage=${page}&limit=${limit}`,
                firstPage:`http://localhost:${process.env.PORT}/api/v1/comment?page=1&limit=${limit}`,
                prevPage:prevPage,
                nextPage:nextPage,
                lastPage:`http://localhost:${process.env.PORT}/api/v1/comment?page=${pages}&limit=${limit}`
            });
        }
        else{
            const response = await db.comment.find();
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
const updateComment = async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    
    try{
        const response= await db.comment.findByIdAndUpdate(id,body)
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
const deleteComment = async(req,res)=>{
    const id =  req.params.id;
    const body = req.body;

    try{
        const response = await db.comment.findByIdAndDelete(id,body)
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
    createComment,
    getComment,
    updateComment,
    deleteComment,
}