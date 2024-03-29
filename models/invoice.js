var mongoose = require("mongoose");

// Invoice Schema

var invoiceSchema = mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    service: {
      type: String,
      required: true
    },
    price: {
      type: String
    },
    due: {
      type: String
    },
    status: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

// Get Invoices
module.exports.getInvoices = function(callback, limit){
  Invoice.find(callback).limit(limit).sort([['createdAt', 'descending']])
}

// Get Invoice
module.exports.getInvoiceById = function(id, callback){
  Invoice.findById(id, callback);
}
