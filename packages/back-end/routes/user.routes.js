//export default
const controllers= require('../controllers/user.controller')
const authJwt = require('../utils/Auth/authJwt')
module.exports=(test)=>{
    // app.use((req, res, next) => {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next(); 
    //   });
    test.get('/users',[authJwt.verifyToken,authJwt.isAdmin],controllers.getUser);
    test.post('/users',controllers.createUser);
    test.post('/users/signin',controllers.signin);
    test.put('/users/:id',controllers.updateUser);
    test.delete('/users/:id',controllers.deleteUser);
}