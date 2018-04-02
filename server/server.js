
const express = require("express")(db);
let bodyParser = require('body-parser');
let app = express;
let _ = require('lodash');
let morgan = require('morgan');
const payment = require("../routes/payment");


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/payment", payment);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/home'); // connect to our database
let db = mongoose.connection;
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
