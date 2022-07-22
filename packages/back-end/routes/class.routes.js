const controller=require('./../controllers/class.controller')
module.exports=(test)=>{
    // app.use((req, res, next) => {
    //     //     res.header(
    //     //       "Access-Control-Allow-Headers",
    //     //       "x-access-token, Origin, Content-Type, Accept"
    //     //     );
    //     //     next(); 
    //     //   });
    test.post('/api/vi/classes',controller.createClass)
    test.get('/api/vi/classes',controller.getClass)
    test.delete('/api/vi/classes/:id',controller.deleteClass)
    test.put('/api/vi/classes/:id',controller.updateClass)
}