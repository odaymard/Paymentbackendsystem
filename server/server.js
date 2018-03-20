
const express = require("express")(db);
var bodyParser = require('body-parser');
var app = express;
var _ = require('lodash');
var morgan = require('morgan');
const payment = require("../routes/payment");


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/payment", payment);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/home'); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("DB connection alive");
});


app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});


module.exports = app;