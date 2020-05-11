// var mongoose = require('mongoose');
// // Setup schema

var mongoose = require('mongoose');
// Setup schema

var customerSchema = mongoose.Schema({
	// customer_id: {
	// 	type: Number,
	// 	required: true
	// },


	customer_first_name: {
		type: String,
		required: true
	},

	orders: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'order'
	}]	
	
});

var Customer = module.exports = mongoose.model('customer', customerSchema);


// module.exports.get = function (callback, limit) {
// 	Customer.find(callback).limit(limit);
// };

