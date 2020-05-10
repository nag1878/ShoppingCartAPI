Customer = require('../models/customer');

// exports.new = function (req, res) {
// // Handle create costomer actions
// var customer = new Customer();
// customer.orders	 = req.body.orders;
// customer.customer_first_name = req.body.customer_first_name;
// customer.category_id = req.body.category_id;
// customer.category_name = req.body.category_name;
// customer.number_purchased = req.body.number_purchased;
// 	// customer.phone = req.body.number_purchased;
// 	// customer.date_of_birth = req.body.date_of_birth
// // save the costomer and check for errors

// customer.save(function (err) {
// // if (err)
// // res.json(err);
// res.json({
// 	message: 'New customer created!',
// 	data: customer
// });
// });
// };

exports.index = function (req, res) {

	Customer.find(function (err, customer) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		else{
			res.json({
				status: "success",
				message: "Customer retrieved successfully",
				data: customer
			});
		}
			
	});
};




exports.new = function (req, res) {
	var customer = new Customer();
	customer.orders	 = req.body.orders;
	// customer.customer_id = req.body.customer_id;
	customer.customer_first_name = req.body.customer_first_name;
	customer.category_id = req.body.category_id;
	//customer.category_name = req.body.category_name;

// save the costomer and check for errors

	customer.save(function (err) {
		if (err)
			res.json(err);
		else {
			res.json({
				message: 'New customer created!',
				data: customer
			});
		}
	});
};


// Handle view costomer info
exports.view = function (req, res) {
	Customer.findById(req.params.customer_id, function (err, customer) {
		if (err)
			res.send(err);
		else{
			res.json({
				message: 'Customer details loading..',
				data: customer
			});	
		}
		
	});
};


// Handle update costomer info
exports.update = function (req, res) {
	Customer.findById(req.params.customer_id, function (err, customer) {
		if (err)
			res.send(err);
		customer.customer_id = req.body.customer_id ? req.body.customer_id : customer.customer_id;
		customer.customer_first_name = req.body.customer_first_name;
		customer.category_id = req.body.category_id;
		customer.category_name = req.body.category_name;
// save the costomer and check for errors
		customer.save(function (err) {
			if (err)
				res.json(err);
			else{
				res.json({
					message: 'Customer Info updated',
					data: customer
				});	
			}
		});
	});
};
