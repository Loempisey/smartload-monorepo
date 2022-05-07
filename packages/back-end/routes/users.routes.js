const controller = require('./../controllers/users.controller')
const authJWT = require('./../utils/auth/authJWT') 

module.exports = (app)=>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.get('/api/v1/users',[authJWT.verifyToken, authJWT.isAdmin], controller.getUsers)
    app.get('/api/v1/users/current_user',[authJWT.verifyToken],controller.getCurrentUser)
    app.post('/api/v1/users', controller.signUp)
    app.post('/api/v1/auth/users', controller.signIn)
    app.delete('/api/v1/users/:id',controller.deleteUsers)
    app.put('/api/v1/users/:id',controller.updateUsers)
}




