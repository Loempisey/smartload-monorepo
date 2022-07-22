//export default
module.exports=(test)=>{
    test.get('/student',(req,res)=>{
    res.send({message:"Hello World"})
})
}