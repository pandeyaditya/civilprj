//To list all the properties

exports.list = function(req, res){
  console.log("in listing list");
  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT props.*,img.property_id,img.property_image FROM properties props left join images_tbl img ON props.id=img.property_id',function(err,rows)
        {

          console.log("---- In listing");
          console.log(rows);
            
            if(err){
              console.log(error);
            }
            else{
              req.flash("success","Welcome user");
              res.locals.messages = req.flash();
              res.render('listing',{page_title:"Properties - Node.js",data:rows});
              
            }                
           
         });
         
         //console.log(query.sql);
    });
  
};