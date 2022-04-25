//export default
module.exports=(test)=>{
    test.get('/userinfo/:id/name/:name/email/:email',(req,res)=>{
        const id=req.params.id;
        const name=req.params.name;
        const email=req.params.email;
        res.status(200).send({message:`userinfo ID: ${id} , Name: ${name} , Email: ${email}`})
    })
}