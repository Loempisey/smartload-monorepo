const controller = require('./../controllers/contact.controller')
//the same 'export default'
module.exports=(app)=>{
    app.post('/api/v1/contact',controller.createContact)
    app.get('/api/v1/contact',controller.getContact)
    app.delete('/api/v1/contact/:id',controller.deleteContact)
    app.put('/api/v1/contact/:id',controller.updateContact)
}


