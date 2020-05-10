// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'API Its Working',
		message: 'hello world',
	});
});

// Export API routes
module.exports = router;

// Import controllers
var contactController = require('./controlers/contactController');
var customerController = require('./controlers/customerController');
var productController = require('./controlers/productController');
var categoryController = require('./controlers/categoryController');
var orderController = require('./controlers/orderController');

// Customer routes for customers
router.route('/customers')
.get(customerController.index)
.post(customerController.new);
router.route('/customers/:customer_id')
.get(customerController.view)
.put(customerController.update);



// Product routes for products
router.route('/products')
.get(productController.index)
.post(productController.new);
router.route('/products/:product_id')
.get(productController.view)
.put(productController.update);


// Category routes for categories
router.route('/categories')
.get(categoryController.index)
.post(categoryController.new);
router.route('/categories/:category_id')
.get(categoryController.view)
.put(categoryController.update);


// Order routes for orders
router.route('/orders')
.get(orderController.index)
.post(orderController.new);
router.route('/orders/:order_id')
.get(orderController.view)
.put(orderController.update);
