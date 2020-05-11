var mongoose = require('mongoose');
// Setup schema



var productSchema = mongoose.Schema({
	// product_id: {
	// 	type: Number,
	// 	required: true
	// },


	product_name: {
		type: String
	},

	amount_purchased: Number,
	// number_purchased: String, //TODO: add inventory_left
	
	categories: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'category'
	}]
	
});

var Product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function (callback, limit) {
	Product.find(callback).limit(limit);
};
