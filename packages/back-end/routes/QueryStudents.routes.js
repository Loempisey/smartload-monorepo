//export default
module.exports=(test)=>{
    test.get("/students",(req,res)=>{
        const query = req.query
        res.status(200).send({message:query})
    })
}