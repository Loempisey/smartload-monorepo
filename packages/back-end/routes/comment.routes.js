const controller = require('./../controllers/comment.controller')
module.exports=(test)=>{
    // app.use((req, res, next) => {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next(); 
    //   });
    test.post('/api/v1/comment',controller.createComment)
    test.get('/api/v1/comment',controller.getComment)
    test.put('/api/v1/comment/:id',controller.updateComment)
    test.delete('/api/v1/comment/:id',controller.deleteComment)
}