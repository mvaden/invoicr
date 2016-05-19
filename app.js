var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

// Mongoose Connect
mongoose.connect('mongodb://localhost/invoicr');
var db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("Very Basic Express App")
});

app.listen(3001, function(){
  console.log("started on port 3001...");
})
