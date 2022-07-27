const controller = require('./../controllers/inventory.controller')
module.exports=(app)=>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next(); 
      });
    app.post('/api/v1/inventory',controller.createInventory)
    app.get('/api/v1/inventory',controller.getInventory)
    app.put('/api/v1/inventory/:id',controller.updateInventory)
    app.delete('/api/v1/inventory/:id',controller.deleteInventory)
}




