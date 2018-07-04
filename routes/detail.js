exports.listproperty = function(req,res){
  var id = req.params.id;

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM properties WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            
            req.flash("success","Welcome user");
            res.locals.messages = req.flash();
            res.render('detail_property',{data:rows});
                
             
         });
         
         //console.log(query.sql);
    });
};