const db = require('./../models')
const createUser = async(req,res)=>{
    const body = req.body;
    const user = new db.users({
        // username:body.username,
        // email:body.email,
        // password:body.password,
        // dob:body.dob
        fullname:body.fullname,
        email:body.email,
        phone:body.phone,
        message:body.message
    })

//prepare data into database 
    const response = await user.save()
    res.status(200).send(response);
};

const getUser = async(req,res)=>{
const fullname = req.query.fullname;
    try {
        const total = await db.user.find().count();
        if(fullname) {
            const user = await db.user.find({
                fullname: {$regex: fullname, $options: "i"},
            });
            res.status(200).send({data: user, count: user.length, total: total});
        }else {
            const user = await db.user.find();
            res.status(200).send({data: user, count: user.length, total: total});
        }
    } catch(error){
        res.status(200).send({statusCode: 500, message: error});
    }
    // const response = await db.users.find()
    // res.status(200).send({data:response});

};

const updateUser = (req,res)=>{ 
    const id = req.params.id
    if(id){
        res.status(200).send({message: `update a user id :${id}`})
    }else
        res.status(400).send({message: "bad request, missing id"})

};

const deleteUser = (req,res)=>{
    const id = req.params.id
    if(id){
        res.status(200).send({message: `update a user id :${id}`})
    }else
        res.status(400).send({message: "bad request, missing id"}) 

};

module.exports ={
    createUser,
    getUser,
    updateUser,
    deleteUser
}