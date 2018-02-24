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

var productInStock;


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
  		productPrompt();
	});
	
}

function productPrompt()	{
	inquirer.prompt([{
		name: "id",
		type: "input",
		message: "Please enter the ID of the product you wish to buy.",
		validate: function(value)	{
				if (isNaN(value) === false)	{
					return true;
				}
				console.log("\n Please enter a valid number associated with one of our products.");
				return false;	
			}	
		},
		{
		name: "quantity",
		type: "input",
		message: "What is the quantity you would like to purchase?",
		validate: function(value)	{
				if (isNaN(value) === false)	{
					
					return true;
				}
				console.log("\n Please enter a valid number.");
				return false;
			}
		}])
	.then(function(answer)	{
		var quantity = answer.quantity;
		// var newQuantity = answer[0].stock_quantity - quantity
		var id = answer.id;
		if (id >= 10)	{
			console.log("You have chosen a product that we do not carry. Please enter an Item ID from the above table.");
			productPrompt();
		} else	{
			connection.query("SELECT * FROM products WHERE?", {item_id: id}, function(err, res) {
				if (err) throw err;
				if (res[0].stock_quantity - quantity >= 0)	{
					console.log("You have selected " + quantity + " units of the " + res[0].product_name + ".");
					console.log("\nYour total cost today is: $" + (quantity * res[0].price) + "." + "\nThanks for supporting Kimmy's Bamazon!");
					// updateInventory(newQuantity, id);
	
				} else if (res[0].stock_quantity - quantity <= 0) {
					console.log("I'm sorry. We currently do not have enough stock to fulfill that order.");
					productPrompt();
				} 
			})
		}
		
	})	
}
// connection.query("UPDATE products SET ? WHERE ?", {stock_quantity: res[0].stock_quantity - quantity, item_id: id},
// 						function(err, res)	{
// 							if (err) throw err;
// 							console.log(res.affectedRows);
// 						})
				
// function updateInventory(newQuantity, id)	{
// 	connection.query ("UPDATE products SET ? WHERE ?", {stock_quantity: newQuantity, item_id: id},
// 		function(err, )	{
// 		if (err) throw err;
// 		console.log(res);
// 		console.log(res.affectedRows);
// 		}
// 	);	
// }

