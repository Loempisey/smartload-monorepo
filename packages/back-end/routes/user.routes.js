//export default
const controllers= require('../controllers/user.controller')
const authJwt = require('../utils/Auth/authJwt')
module.exports=(app)=>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next(); 
      });
    app.get('/user',[authJwt.verifyToken,authJwt.isAdmin],controllers.getUser);
    app.post('/user/signup',controllers.createUser);
    app.post('/user/signin',controllers.signin);
    app.put('/user/:id',controllers.updateUser);
    app.delete('/user/:id',controllers.deleteUser);
    app.get('/user/current_user',[authJwt.verifyToken],controllers.getCurrentUser)
}