Product = require('../models/product');
Category = require('../models/category');

exports.new = function (req, res) {
	// Handle create contact actions
	var product = new Product();
	product.product_name = req.body.product_name;
	product.amount_purchased = req.body.amount_purchased;
	var category_id = req.body.category_id;

	Category.findById(category_id, function (err, category) {
		if(category_id){
			console.log('Valid Category...continue');
			product.categories.push(category_id);
			// console.log(order.products);
			// console.log(customer.orders);
			// product.save();

		}

		else{
			res.json({
				message: 'Category Id not found!',
			});
		}
	});
	product.save(function (err) {
		if (err)
			res.json(err);
		else{
			res.json({
				message: 'New product created!',
				data: product
			});
		}
	});
};

exports.index = function (req, res) {

	Product.find(function (err, product) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Product retrieved successfully",
			data: product
		});
	});
};





// Handle view contact info
exports.view = function (req, res) {
	Product.findById(req.params.product_id, function (err, product) {
		if (err)
			res.send(err);
		else{
			res.json({
				message: 'Product details loading..',
				data: product
			});	
		}
	});
};


// Handle update contact info
exports.update = function (req, res) {
	Product.findById(req.params.product_id, function (err, product) {
		if (err)
			res.send(err);
		product.product_name = req.body.product_name;
		product.number_purchased = req.body.number_purchased;
		var category_id = req.body.category_id;
		Category.findById(category_id, function (err, category) {
			if(category_id){
				console.log('Valid Category...continue');
				product.categories.push(category_id);
				// console.log(order.products);
				// console.log(customer.orders);
				product.save(function (err) {
					if (err)
						res.json(err);
					else{
						res.json({
							message: 'Product Info updated',
							data: product
						});	
					}
					
				});

			}

			else{
				res.json({
					message: 'Category Id not found!',
				});
			}
		});
		// product.save(function (err) {
		// 	if (err)
		// 		res.json(err);
		// 	else{
		// 		res.json({
		// 			message: 'Product Info updated',
		// 			data: product
		// 		});	
		// 	}
			
		// });
	});
};
