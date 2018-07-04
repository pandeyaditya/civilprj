//To search property
exports.list = function(req,res){

    var search_term = req.params.property_search;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM properties WHERE property_title = ?',[search_term],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            
            req.flash("success","Welcome user");
            res.locals.messages = req.flash();
            res.render('listing',{data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};
