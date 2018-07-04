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


      // Upload done, insert name in db
          req.getConnection(function (err, connection) {
        
        var data = {
            
            property_title    : input.property_title,
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
            price             : input.price
        
        };
        
        var query = connection.query("INSERT INTO properties set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
          
          req.flash("success","Welcome user");
          res.locals.messages = req.flash();
          res.redirect('/properties');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
  //   });
  // }
  // else{
  //   res.render('add_property',{page_title:"Add Properties - Node.js"});
  // }





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



exports.detail_property = function(req,res){
  var id = req.params.id;

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM properties WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            
            req.flash("success","Welcome user");
            res.locals.messages = req.flash();
            res.redirect('detail_property',{data:rows});
                
             
         });
         
         //console.log(query.sql);
    });
};