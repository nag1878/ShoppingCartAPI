var mongoose = require('mongoose');
// Setup schema

var orderSchema = mongoose.Schema({
	// order_id: {
	// 	type: Number,
	// 	required: true
	// },
	order_status: String,

	products: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'product'
	}],

	customer_id: {
		type: mongoose.Schema.Types.ObjectId, ref: 'customer',
		required: true
	}	
});

var Order = module.exports = mongoose.model('order', orderSchema);
module.exports.get = function (callback, limit) {
	Order.find(callback).limit(limit);
};
