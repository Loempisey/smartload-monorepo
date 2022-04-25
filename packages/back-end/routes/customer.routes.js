const controller = require('./../controllers/customer.controller')
module.exports=(test)=>{
    // app.use((req, res, next) => {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next(); 
    //   });
    test.post('/api/v1/customer',controller.createCustomer)
    test.get('/api/v1/customer',controller.getCustomer)
    test.put('/api/v1/customer/:id',controller.updateCustomer)
    test.delete('/api/v1/customer/:id',controller.deleteCustomer)
}