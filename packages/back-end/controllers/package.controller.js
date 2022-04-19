const db = require('./../models')

const createPackage = async(req,res) =>{
    const body = req.body;
    if (Object.keys(body).length == 0) {
        return res.status(400).send({
          message: "cannot empty body",
          statusCode: 400,
        });
      }
      const package = new db.package({
        type_business:body.type_business,
        price_paid:body.price_paid,
        des:body.des,
        register:body.register,
      })

      try{
        const response = await package.save()
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

const getPackage= async(req,res)=>{
    try{
        const response = await db.package.find();
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

const deletePackage= async(req,res)=>{
    const id = req.params.id
    try{
        const response = await db.package.findByIdAndDelete(id)
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

const updatePackage= async(req,res)=>{
    const body = req.body;
    const id = req.params.id;
    try{
        const response = await db.package.findByIdAndUpdate(id,body)
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
    createPackage,
    getPackage,
    deletePackage,
    updatePackage
};

