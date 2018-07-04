// To open the login page
exports.page = function(req, res){
  res.render('login');
};

// To check the login user
exports.check = function(req,res){

	var data = req.body;
	if(data.username === ''){
		req.flash("msg","Enter username");
		res.locals.messages = req.flash();
		res.render('login');
    }
    else if(data.password === ''){
		req.flash("msg","Enter password");
		res.locals.messages = req.flash();
		res.render('login');
    }    	
    else{
    	var req_username = data.username;
	    var req_password = data.password;
	    var sql = 'select * from users where email="'+ req_username +'" AND password="' + req_password + '"';

		req.getConnection(function(err,connection){
			connection.query(sql,function(error, rows, fields){
				console.log(rows.length);
				if(rows.length!=0){		
					if(rows[0].user_level === 2){
						req.session.username = rows[0].email;
						req.flash("success",req.session.username);
						res.locals.messages = req.flash();
						res.redirect("/admindash");	
					}
					else{
						req.session.username = rows[0].email;
						req.flash("success",req.session.username);
						res.locals.messages = req.flash();
						res.redirect("/listing");	
					}
					
				}
				else{
					req.flash("msg","Invalid Login");
	                res.locals.messages = req.flash();
	                console.log(res.locals.messages);
	                req.session.username = '';
					res.redirect("/login",{success:req.session.username});
				}
			});
		
		});			
    }
};