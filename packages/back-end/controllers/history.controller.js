const db = require('./../models')

const createHistory = async(req,res) =>{
    const body = req.body;
    if (Object.keys(body).length == 0) {
        return res.status(400).send({
          message: "cannot empty body",
          statusCode: 400,
        });
      }
      const history = new db.history({
        date_and_time:body.date_and_time,
        customer_his:body.customer_his,
        order_his:body.order_his,
      })

      try{
        const response = await history.save()
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

const getHistory = async(req,res)=>{
    try{
        const response = await db.history.find();
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

const deleteHistory= async(req,res)=>{
    const id = req.params.id
    try{
        const response = await db.history.findByIdAndDelete(id)
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

const updateHistory = async(req,res)=>{
    const body = req.body;
    const id = req.params.id;
    try{
        const response = await db.history.findByIdAndUpdate(id,body)
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
    createHistory,
    getHistory,
    deleteHistory,
    updateHistory
};