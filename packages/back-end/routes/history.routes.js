const controller = require('./../controllers/history.controller')
module.exports=(test)=>{
    // app.use((req, res, next) => {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next(); 
    //   });
    test.post('/api/v1/history',controller.createHistory)
    test.get('/api/v1/history',controller.getHistory)
    test.put('/api/v1/history/:id',controller.updateHistory)
    test.delete('/api/v1/history/:id',controller.deleteHistory)
}