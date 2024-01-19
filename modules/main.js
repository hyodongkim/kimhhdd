const express = require("express");
const app = express({xPoweredBy:false});

app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(require('../setting'));

// app.use('/user', require('./user/md'));
app.use('/user', require('./user/get'));
app.use('/user', require('./user/post'));
app.use('/user', require('./user/put'));

module.exports = app;