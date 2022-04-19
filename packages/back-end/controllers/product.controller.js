const db = require('./../models')

const createProduct = async(req,res) =>{
    const body = req.body;
    if (Object.keys(body).length == 0) {
        return res.status(400).send({
          message: "cannot empty body",
          statusCode: 400,
        });
      }
      const product = new db.product({
        product_id:body.product_id,
        price:body.price,
        product_img:body.product_img,
      })

      try{
        const response = await product.save()
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

const getProduct= async(req,res)=>{
    try{
        const response = await db.product.find();
        res.status(200).send({
            data:response,
            count: response.length,
            message:'success',
            statusCode: 200,
        })

    }catch(error){
        res.status(500).send({
            error:error,
            statusCode: 500,
        })

    }
};

const deleteProduct= async(req,res)=>{
    const id = req.params.id
    try{
        const response = await db.product.findByIdAndDelete(id)
        if (!response)
            return res.status(404).send({
                message: `Not found with id: ${id}`,
                statusCode: 404,
            });

        return res.status(200).send({
            data:response,
            message:`Delete id: ${id}`,
            statusCode: 200,
        })


    }catch(error){
        res.status(500).send({
            error:error,
            statusCode: 500,
        });
    }
};

const updateProduct= async(req,res)=>{
    const body = req.body;
    const id = req.params.id;
    try{
        const response = await db.product.findByIdAndUpdate(id,body)
        res.status(200).send({
            data:response,
            message:`Update id: ${id}`,
            statusCode: 200,
        })

    }catch(error){
        res.status(500).send({
            error:error,
            statusCode: 500,
        });

    }
}
module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
};

