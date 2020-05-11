var mongoose = require('mongoose');
// Setup schema

var categorySchema = mongoose.Schema({

	// category_id: {
	// 	type: String,
	// 	required: true
	// },	

	category_name: {
		type: String,
		required: true
	},
/*
	products: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'product'
	}]*/

	
});

var Category = module.exports = mongoose.model('category', categorySchema);
module.exports.get = function (callback, limit) {
	Category.find(callback).limit(limit);
};



