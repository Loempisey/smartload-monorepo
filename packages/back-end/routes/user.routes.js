const controller = require('../controllers/user.controller')
//the same 'export default'
module.exports=(app)=>{
    app.get('/user',controller.getUser)
    app.post('/user',controller.createUser)
    app.put('/user/:id',controller.updateUser)
    app.delete('/user/:id', controller.deleteUser)
}
//update, post have body
//query monify with search

