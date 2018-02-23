var mysql = require("mysql");
// var Table = require('cli-table');
// const cTable = require('console.table');

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

// var table = new Table({
//     head: ['TH 1 label', 'TH 2 label']
//   , colWidths: [50, 50]
//  });

function startTransaction() {
	connection.query("SELECT * FROM products", function(err, res)	{
		if (err)	{
			console.log("There is a problem with the query...");
		};
	console.log("Welcome to Kimmy's Bamazon! Here are our current product offerings: ");
	console.log(res);
	buyPrompt();
	});
}

function buyPrompt()	{
	
}