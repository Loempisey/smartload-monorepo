const controller = require('./../controllers/package.controller')
module.exports = (app) =>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.post('/api/v1/package',controller.createPackage)
    app.get('/api/v1/package',controller.getPackage)
    app.delete('/api/v1/package/:id',controller.deletePackage)
    app.put('/api/v1/package/:id',controller.updatePackage)

}