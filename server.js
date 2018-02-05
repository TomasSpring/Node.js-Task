const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Username and password authentication strategy for Passport and Node.js.

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-auth')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'app/access.log'), {flags: 'a'});
let app = express();

require('./models/BlogModel');
require('./routes')(app);

app.use(logger('combined', {stream: accessLogStream}));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'pug');
app.listen(3001);
app.use(function(req, res, next) {
    if (req.accepts('html') && res.status(404)) {
        res.render('index.pug');
        return;
    }
});

let User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());