const controller = require('./../controllers/order.controller')
module.exports=(test)=>{
    // app.use((req, res, next) => {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next(); 
    //   });
    test.post('/api/v1/order',controller.createOrder)
    test.get('/api/v1/order',controller.getOrder)
    test.put('/api/v1/order/:id',controller.updateOrder)
    test.delete('/api/v1/order/:id',controller.deleteOrder)
}