let express = require('express');
let app = express();
const port = 3000;

// Import Body parser
let bodyParser = require('body-parser');	

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

let routes = require("./routes")

// Import Mongoose
let mongoose = require('mongoose');


app.use('/', routes)
// app.use('/customers', apiRoutes)


// Use routes in the App
app.use('/', routes)
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;
// Added check for DB connection
if(!db)
	console.log("Error connecting db");
else
	console.log("Db connected successfully");

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));


//Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


