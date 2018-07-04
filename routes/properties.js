//To list all the properties

exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM properties',function(err,rows)
        {
            
            if(err){
              console.log(error);
            }
            else{
              req.flash("success","Welcome user");
              res.locals.messages = req.flash();
              res.render('properties',{page_title:"Properties - Node.js",data:rows});
              
            }                
           
         });
         
         //console.log(query.sql);
    });
  
};


// To open the add property form

exports.add = function(req, res){
  req.flash("success","Welcome user");
          res.locals.messages = req.flash();
  res.render('add_property',{page_title:"Add Properties - Node.js"});
};


// To read the property and fill edit form

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM properties WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            
            req.flash("success","Welcome user");
            res.locals.messages = req.flash();
            res.render('edit_property',{page_title:"Edit Properties - Node.js",data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};


/*To save a property*/

exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));

    var form = formidable.IncomingForm();

          // Upload done, insert name in db
          req.getConnection(function (err, connection) {
        
        console.log("Input received")
        console.log(req.body);
        var data = {
            
            property_title    : input.property_title,
            // property_title    : "test",
            address           : input.address,
            location          : input.location,
            category          : input.category,
            bedroom           : input.bedroom,
            bathroom          : input.bathroom,
            carpet_area       : input.carpet_area,
            builtup_area      : input.builtup_area,
            description       : input.description,
            year_built        : input.year_built,
            owner             : input.owner,
            country           : input.country,
            city              : input.city,
            is_featured       : input.is_featured,
            price             : input.price,
       
        };
        console.log(data);
        
        var query = connection.query("INSERT INTO properties set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
          
          // req.flash("success","Welcome user");
          // res.locals.messages = req.flash();
          // res.redirect('/properties');
            // res.send("property added");
            console.log("Property Added");

        });
   
    });

};


exports.upload = function(req,res){

 req.getConnection(function (err, connection) {
    var sql1 = 'SELECT max(id) as id from properties';
    var query = connection.query(sql1, function(err, result) {
       var x =JSON.stringify(result);
       var newstr = x.substr(1).slice(0,-1);
       var value = JSON.parse(newstr);
      if(err){
       console.log(err);
      }


          var form = formidable.IncomingForm();
          var image = [];
              form.on('fileBegin', function (name, file){
                  file.path = __dirname + '/../uploads/' + file.name;
              });

              form.on('file', function (name, file){
                  image.push(file.name);
              });


              form.parse(req,function(err, fields, files){

                var property_id = value.id;

                for(var j=0;j<image.length;j++){
                  var sql = "INSERT INTO `images_tbl`(`property_id`,`property_image`) VALUES ('" + property_id + "','" + image[j] + "')";
                  req.getConnection(function(error,connection){
                    console.log(sql);
                    var query = connection.query(sql, function(err, result) {
                     console.log(result);
                    if(err){
                     console.log(err);
                    }
                    });  
                  });   
                } // second for

                // req.flash("success","Welcome user");
                // res.locals.messages = req.flash();
                res.redirect('/properties');
                }); // form.parse

              });


    });
};

// To edit a property
exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            property_title    : input.property_title,
            address : input.address,
            location   : input.location,
            category   : input.category
        
        };
        
        connection.query("UPDATE properties set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          req.flash("success","Welcome user");
          res.locals.messages = req.flash();
          res.redirect('/properties');
          
        });
    
    });
};


// To delete a property
exports.delete_property = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM properties  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             req.flash("success","Welcome user");
             res.locals.messages = req.flash();
             res.redirect('/properties');
             
        });
        
     });
};



