var express = require("express");
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

// Get all customers
router.get('/', function(req, res){
  Customer.getCustomers(function(err, customers){
    if(err){
      res.send(err);
    }
    res.json(customers);
  })
})

// Get single customer
router.get('/:id', function(req, res){
  Customer.getCustomerById(req.params.id, function(err, customer){
    if(err){
      res.send(err);
    }
    res.json(customer);
  })
})

module.exports = router;
