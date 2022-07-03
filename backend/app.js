var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var produtosRouter = require('./routes/produtos');
var materiasprimasRouter = require('./routes/materiasprimas');
var usersRouter = require('./routes/users');

var config = require('./config');

const mongoose = require('mongoose');

const url = config.mongoUrl;

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('conectado no servidor');
}, (err) => {console.log(err);});

var app = express();

app.use(session({ secret: 'shhhhh' })); // diferente do git do Diogo, estava dando erro sem a sessão
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());


app.use('/users', usersRouter);


  
  
app.use(express.static(path.join(__dirname, 'public')));


app.use('/produtos', produtosRouter);
app.use('/materiasprimas', materiasprimasRouter);

module.exports = app;
