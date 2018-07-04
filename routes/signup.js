
// To open the registration page
exports.page = function(req, res){
  res.render('signup', { page_title: 'Test' });
};


// To register a user
exports.register = function(req,res){
	var data = req.body;

    if(data.firstname == ""){

        req.flash("msg","Enter firstname");
        res.locals.messages = req.flash();

    }else if(data.lastname == ""){

        req.flash("msg","Enter lastname");
        res.locals.messages = req.flash();

    }else if(data.email == ""){

        req.flash("msg","Enter email");
        res.locals.messages = req.flash();

    }else if(data.email_validity === "false"){

        req.flash("msg","Enter email");
        res.locals.messages = req.flash();

    }else if(data.password == ""){
        req.flash("msg","Enter password");
        res.locals.messages = req.flash();

    }
   

	req.getConnection(function(err,connection){

    connection.query('select * from users where email="'+data.email+'"',function(error, rows, fields){


    if(!!error){
        req.flash("msg","User Exists");
        res.locals.messages = req.flash();
        console.log("Error in the Query1",error);
    }else{

        if(rows.length != 0){

            req.flash("msg","User Exists");
            res.locals.messages = req.flash();
            res.render('signup');

        }else{



            console.log("User does not exist");
            //insert
            //insert
            var sql = 'insert into users(email,password,firstname,middle_name,last_name,address,phone,user_level)values("' + data.email + '","' + data.password + '","' + data.firstname + '","' + data.middlename + '","' + data.lastname + '","' + data.address + '","' + data.contact_no + '","'+ data.user_level +'")'

            connection.query(sql, function (error, rows, fields) {
                //console.log(rows[0].title);

                if (!!error) {
                    console.log("Error in the Query2",error);
                } else {


                    // using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
                    const sgMail = require('@sendgrid/mail');
                    sgMail.setApiKey('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');
                    const msg = {
                        // to: 'slaksh7@gmail.com',
                        to: 'pandeyaditya951@gmail.com',
                        from: 'info@ecivilization.com',
                        subject: 'Ecivilization.com - Account Activation',
                        text: 'Account Activation',
                        html: "<h4>Thank you for Registering with Ecivilization.com</h4><a>Please click <a href='https://www.ecivilization.com/activate?id="+data.email+"'>Here</a> to activate your account.</strong>",
                    };
                    sgMail.send(msg);

                    res.send("You have successfully registered with CRE.<br>We have sent an email including activation code. Please follow the instructions to Activate your Account.");
                   




                }

            });

        }


    }

});
});

}