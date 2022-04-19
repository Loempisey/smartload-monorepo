const controller = require('./../controllers/contact.controller')
//the same 'export default'
module.exports=(app)=>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next(); 
      });
    app.post('/api/v1/contact',controller.createContact)
    app.get('/api/v1/contact',controller.getContact)
    app.delete('/api/v1/contact/:id',controller.deleteContact)
    app.put('/api/v1/contact/:id',controller.updateContact)
}
 

