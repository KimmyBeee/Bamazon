DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(6,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog collar", "pet supplies", 31.50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("puppy harness", "pet supplies", 40.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fancy leash", "pet supplies", 27.50, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("brass picture frame", "housewares", 18.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("white lotus vase", "housewares", 50.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("silver incense burner", "housewares", 150.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("white cheddar popcorn", "snacks", 7.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("herbed popcorn", "snacks", 7.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tomato basil crackers", "snacks", 6.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("teriyaki beef jerky", "snacks", 8.99, 12);