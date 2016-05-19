var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

var customers = require('./routes/customers');
var invoices = require('./routes/invoices');

// Mongoose Connect
mongoose.connect('mongodb://localhost/invoicr');
var db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("Please use /api/customers or /api/invoices")
});

app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.listen(3001, function(){
  console.log("started on port 3001...");
})
