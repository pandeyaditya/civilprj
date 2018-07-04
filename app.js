
/**
 * Module dependencies.
 */

var express      = require('express');

var formidable = require('formidable');
// console.log(formidable);
var routes       = require('./routes');
var http         = require('http');
var path         = require('path');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var flash        = require('connect-flash');
var bodyParser   = require('body-parser');
// var fs           = require("fs");
// var multer       = require('multer')
// var upload       = multer({ dest: 'uploads/' });
// var fileUpload   = require('express-fileupload');

//load application routes
var properties = require('./routes/properties');
var login      = require('./routes/login');
var logout      = require('./routes/logout');
var signup     = require('./routes/signup');
var users      = require('./routes/users');
var listing      = require('./routes/listing');
var detail      = require('./routes/detail');

var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(cookieParser());
app.use(session({
    secret: 'secret123',
    proxy: true,
    saveUninitialized: true,
    resave: true
}));

app.use(flash());


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

// formidable = new formidable.IncomingForm();

global.formidable = formidable;

app.use(
    
    connection(mysql,{
        
        // host: 'us-cdbr-iron-east-04.cleardb.net', //'localhost',
        // user: 'b47ec6e686a673',
        // password : 'ec29abce',
        // port : 3306, //port mysql
        // database:'heroku_e5ee02fba49f24b'

        host: 'localhost', //'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'myec1'

    },'pool') //or single

);



// All the URL routes

// Get Methods
app.get('/', routes.index);
app.get('/login',login.page);
app.get('/logout',logout.destroy);
app.get('/signup', signup.page);
app.get('/properties',properties.list);
app.get('/properties/add', properties.add);
app.get('/properties/delete/:id',properties.delete_property);
app.get('/properties/edit/:id', properties.edit);
app.get('/userprofile',users.profile);
app.get('/listing',listing.list);
app.get('/detail/:id',detail.listproperty);


// Post Methods

app.post('/logincheck',login.check);
app.post('/register',signup.register);
app.post('/properties/add', properties.save);
app.post('/properties/edit/:id',properties.save_edit);
app.post('/properties/upload',properties.upload);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
