
const db = require('./../models')

const createClass = async(req,res)=>{
    const body = req.body;

    //when request with empty body
    if(Object.keys(body).length==0){
        return res.status(400).send({
            message : "can not be empty body.",
            statusCode:400,
        })
    };
    
    const classes= new db.classes({
        name: body.name,
        code:body.code
    });
    try{
        const response = await classes.save()
        res.status(200).send({
            statusCode:201,
            data: response,
        })
    }catch(error){
        res.status(500).send({
            statusCode:500,
            error:error
        }); 
    }
}

const getClass = async (req, res) => {
    try {
        const response = await db.classes.find()
        res.status(200).send({
            data: response,
            count: response.length,
            message: "success",
            statusCode: 200,
        })
    } catch (error) {
        res.status(500).send({
            error: error,
            statusCode: 500,
        })
    }
};

const deleteClass = async (req, res) => {
    const id = req.param.id
    try {
        const response = await db.classes.findByIdAndDelete(id);

        //no id in record
        if (!response) return res.status(404).send({
            message: `not found with id :${id}`,
            statusCode: 404
        });
        // id is exist in db
        return res.status(200).send({
            data: response,
            message: `delete id : ${id}`,
            statusCode: 200,
        });
    } catch (error) {
        res.status(500).send({
            error: error,
            statusCode: 500,
        })
    }
};

const updateClass = async (req, res) => {
    const id = req.param.id;
    const body = req.body;
    try {
        const response = await db.classes.findByIdAndUpdate(id, body);
        //not found id
        if (!response) return res.status(404).send({
            message: `not found with id :${id}`,
            statusCode: 404
        });
        //has id
        res.status(200).send({
            data: response,
            message: `delete id : ${id}`,
            statusCode: 200,
        });
    } catch {
        res.status(500).send({
            error: error,
            statusCode: 500,
        });

    }
};
module.exports = {
    createClass,
    getClass,
    deleteClass,
    updateClass
}