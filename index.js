const express = require('express');
const env = require('./config/environment');

const app = express();
require('./config/view-helpers')(app);
const path = require('path');
const port = 8000;


const expressLayouts = require('express-ejs-layouts');
//connect mongo db config file
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');


const MongoStore = require('connect-mongo')(session);
// var MongoStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const customMware = require('./config/middleware');


const cookieParser = require('cookie-parser');
app.use(express.urlencoded());
//app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use(express.static(env.asset_path));

//make uploads path avaliable
app.use('/uploads',express.static(__dirname +'/uploads'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    })
}));

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));
//app.use(express.json());

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


