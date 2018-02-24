var inquirer = require("inquirer");
var mysql = require("mysql");
var colors = require("colors.js");
var Table = require('cli-table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startTransaction();
 });


function startTransaction() {

	connection.query("SELECT * FROM products", function(err, res)	{
		if (err)	{
			console.log("There is a problem with the query...");
		};			
	console.log("Welcome to Kimmy's Bamazon! Here are our current product offerings: ");

		var table = new Table({ 
			head: ["Item ID", "Product Name", "Department", "Price", "In Stock"],
			colWidths: [10, 30, 20, 10, 10]
 		});

		for (var i = 0; i < res.length; i++) 	{
			table.push(
    			[res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]	
  			);
  		}
  		console.log(table.toString());
  		buyPrompt();
	});
	
}

function buyPrompt()	{
	connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

	inquirer.prompt([{
		name: "chooseProduct",
		type: "input",
		message: "Please enter the ID of the product you wish to buy.",
		validate: function(value)	{
			if (isNaN(value))	{
				console.log("\n Please enter a valid number associated with one of our products.")
			}
			
		},
		{
			name: "quantity",
			type: "input",
			message: "What is the quantity"
		}

	});
	.then(function(answer)	{
		connection.query(SELECT

		)
	})
}


