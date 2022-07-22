//export default
module.exports=(app)=>{
    app.get("/students",(req,res)=>{
        const query = req.query
        res.status(200).send({message:query})
    })
}