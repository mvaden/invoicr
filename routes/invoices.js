var express = require("express");
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

// Get all invoices
router.get('/', function(req, res){
  Invoice.getInvoices(function(err, invoices){
    if(err){
      res.send(err);
    }
    res.json(invoices);
  })
})

// Get single invoice
router.get('/:id', function(req, res){
  Invoice.getInvoiceById(req.params.id, function(err, invoice){
    if(err){
      res.send(err);
    }
    res.json(invoice);
  })
})

module.exports = router;
