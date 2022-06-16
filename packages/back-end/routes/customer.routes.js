const controller = require('./../controllers/customer.controller')
module.exports=(app)=>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next(); 
      });
    app.post('/api/v1/customer',controller.createCustomer)
    app.get('/api/v1/customer',controller.getCustomer)
    app.put('/api/v1/customer/:id',controller.updateCustomer)
    app.delete('/api/v1/customer/:id',controller.deleteCustomer)
}






