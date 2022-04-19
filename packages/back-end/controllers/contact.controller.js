const db = require("./../models");

const createContact = async (req, res) => {
  const body = req.body;

  //check condition when request with empty body
  if (Object.keys(body).length == 0) {
    return res.status(400).send({
      message: "cannot empty body",
      statusCode: 400,
    });
  }
  //prepare data into database
  const contact = new db.contact({
    fullname: body.fullname,
    email: body.email,
    phone: body.phone,
    message: body.message,
  });

  try {
    const response = await contact.save();
    res.status(200).send({
      statusCode: 201,
      data: response,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
    throw error;
  }
};

const getContact = async (req, res) => {
  const fullname = req.query.fullname;
  const page = req.query.page;
  // let limit = 10
  let pages;
  let limit = 10

  if(req.query.limit <=0 || page <=0){
    return res.status(400).send({message: "bad request or limit >0 or page>0", statusCode:400})
  }

  if(Boolean(req.query.limit)&&req.query.limit!=0){
    limit = req.query.limit;
  }

    try{
          const total = await db.contact.find().count();
          if(total%limit==0){
            pages = total/limit;
          }else {
            pages = parseInt(total/limit)+1;
          }
          if (fullname) {
            const contact = await db.contact.find({
              fullname: {$regex: fullname, $options: "i"},
            });
            res.status(200).send({data: contact, count: contact.length, total: total});
          }else if(page){
          
            const contact = await db.contact.find().skip((page-1)*limit).limit(limit)
            let nextPage = null;
            let prevPage = null;
            if(page!=1){
              prevPage= `http://localhost:${process.env.PORT}/api/v1/contact?page=${Number(pages)-1}&limit=${limit}`
            }
            if(page<pages){
              nextPage= `http://localhost:${process.env.PORT}/api/v1/contact?page=${Number(pages)+1}&limit=${limit}`
            }
            
            res.status(200).send({
              data: contact, 
              pages: pages,
              count: contact.length,
              total: total,
              firstPage: `http://localhost:${process.env.PORT}/api/v1/contact?page=1&limit=${limit}`,
              prevPage: prevPage,
              nextPage: nextPage,
              lastPage: `http://localhost:${process.env.PORT}/api/v1/contact?page=${pages}&limit=${limit}`
            });
          }
          else {
            const contact = await db.contact.find();
            res.status(200).send({data: contact, count: contact.length, total: total});
          }
          // const response = await db.contact.find();
          // res.status(200).send({
          //     data: response,
          //     count: response.length,
          //     message: "success",
          //     statusCode: 200
          // });

    }catch(error){
        res.status(500).send({
            error: error,
            statusCode: 500
        })
    }
};

const deleteContact = async(req,res)=>{
    const id = req.params.id
    try{
        const response = await db.contact.findByIdAndDelete(id);
        res.status(200).send({
            data: response,
            message: `Delete id: ${id}`,
            statusCode: 200
        });
 
    }catch(error){
        res.status(500).send({
            error: error,
            statusCode: 500,
        });
    }

}

const updateContact = async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    console.log(body)
    try{
        const response = await db.contact.findByIdAndUpdate(id,body)
        res.status(200).send({
            data: response,
            message: `Update id: ${id}`,
            statusCode: 200
        });


    }catch(error){
        res.status(500).send({
            error: error,
            statusCode: 500,
        });

    }
}
module.exports = {
  createContact,
  getContact,
  deleteContact,
  updateContact,
};

