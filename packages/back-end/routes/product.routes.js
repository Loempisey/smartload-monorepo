const controller = require('./../controllers/product.controller')
module.exports = (app) =>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.post('/api/v1/product',controller.createProduct)
    app.get('/api/v1/product',controller.getProduct)
    app.delete('/api/v1/product/:id',controller.deleteProduct)
    app.put('/api/v1/product/:id',controller.updateProduct)

}