const controller = require('./../controllers/history.controller')
module.exports = (app) =>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.post('/api/v1/history',controller.createHistory)
    app.get('/api/v1/history',controller.getHistory)
    app.delete('/api/v1/history/:id',controller.deleteHistory)
    app.put('/api/v1/history/:id',controller.updateHistory)

}

