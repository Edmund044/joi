const { schema } = require("./app.js");

try{
    console.log(schema.validate({}));
}
catch{
   (err)=>{
       if(error.isJoi === true){
           error.status = 422;
           next(error);

       }
      console.log(err);
   }
}