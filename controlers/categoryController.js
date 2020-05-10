Category = require('../models/category');

exports.new = function (req, res) {
	// Handle create contact actions
	var category = new Category();
	// category.category_id = req.body.category_id;
	category.category_name = req.body.category_name;
	
	// save the contact and check for errors

	category.save(function (err) {
		if (err)
			res.json(err);
		else{
			res.json({
				message: 'New category created!',
				data: category
			});
		}
	});
};

exports.index = function (req, res) {

	Category.find(function (err, category) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Category retrieved successfully",
			data: category
		});
	});
};





// Handle view contact info
exports.view = function (req, res) {
	Category.findById(req.params.contact_id, function (err, category) {
		if (err)
			res.send(err);
		else{
			res.json({
				message: 'Category details loading..',
				data: category
			});	
		}
	});
};


// Handle update contact info
exports.update = function (req, res) {
	Category.findById(req.params.contact_id, function (err, category) {
		if (err)
			res.send(err);
		// category.category_id = req.body.category_id ? req.body.category_id : category.category_id;
		category.category_name = req.body.category_name;
// save the contact and check for errors
		category.save(function (err) {
			if (err)
				res.json(err);
			else{
				res.json({
					message: 'Category Info updated',
					data: category
				});	
			}
			
		});
	});
};
