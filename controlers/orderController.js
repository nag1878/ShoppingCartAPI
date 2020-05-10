var mongoose = require('mongoose');
var Order = require('../models/order');
var Customer = require('../models/customer');
Product = require('../models/product');


//Handle index actions
exports.index = function (req, res) {

	var customer_id = req.body.customer_id ;

	if(customer_id){
		Order.findById(customer_id, function (err, orders) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		else{
			res.json({
				status: "success",
				message: "Orders retrieved successfully for "+customer_id,
				data: orders
			});	
		}
		
		});
	}

	else{
		Order.find(function (err, orders) {
			if (err) {
				res.json({
					status: "error",
					message: err,
				});
			}
			res.json({
				status: "success",
				message: "Orders retrieved successfully",
				data: orders
			});
		});
	}		

};
// Handle create order actions
exports.new = function (req, res) {
	var order = new Order();
	// order.order_id = req.body.order_id;
	order.order_status = req.body.order_status;
	var customer_id = req.body.customer_id;
	Customer.findById(customer_id, function (err, customer) {
		if(customer){
			console.log('Valid Customer...continue');
			// customer.orders.push(_id);

		}

		else{
			res.json({
				message: 'Customer does not exist!',
			});
		}
	});
	order.customer_id = customer_id;
	console.log('Customer ID:'+	customer_id)
	
// save the order and check for errors
	order.save(function (err) {
		if (err)
			 res.json(err);
		else{
			Customer.findById(customer_id, function (err, customer) {
				if(customer){
					console.log('Entered if after saving order');
					customer.orders.push(order._id);
					console.log(customer.customer_id);
					console.log(customer.orders);
					customer.save();

				}
				res.json({
					message: 'New order created!',
					data: order	
				});
			});
			
		}

	});

	var product_id = req.body.product_id;
	Product.findById(product_id, function (err, product) {
		if(product){
			console.log('Valid Product...continue');
			order.products.push(product_id);
			// console.log(order.products);
			// console.log(customer.orders);
			order.save();

		}

		else{
			res.json({
				message: 'Product Id not found!',
			});
		}
	});
	
	
};


// Handle view contact info
exports.view = function (req, res) {
	Order.findById(req.params.order_id, function (err, order) {
		if (err)
			res.send(err);
		else{
			res.json({
				message: 'Order details loading..',
				data: order
			});
		}
		
	});
};


exports.update = function (req, res) {
	Order.findById(req.params.order_id, function (err, order) {
		if (err)		
			res.send(err);
		Order.findById(req.params.order_id, function (err, order) {
			if(order){
				console.log('Valid Order');
				order.order_status = req.body.order_status;
				order.products.push(req.body.product_id);
				order.category_name = req.body.category_name;
				// customer.orders.push(_id);

				order.save(function (err) {
					if (err)
						res.json(err);
					else{
						res.json({
							message: 'Customer Info updated',
							data: order
						});	
					}
				});

			}

			else{
				res.json({
					message: 'Order does not exist!',
				});
			}
		});
		
// save the costomer and check for errors
		
	});
};
