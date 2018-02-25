# Bamazon

### Overview

Bamazon is an online shop where users can pick from a tabled catalog of products and purchase available quantities. It uses mySQL and NodeJS. It requires the installation of npm packages: inquirer, colors.js and cli_table.

### Installation

**1) Set up mySQL database**

  * Visit the mySQL installation page and install the version that is the most appropriate for the computer's  
    operating system.

    https://dev.mysql.com/doc/refman/5.6/en/installing.htm


  * Use the bamazonSeeds.sql file to create a database in Sequel Pro (Mac) or MySQL Workbench (PCs) 
  
    https://github.com/KimmyBeee/Bamazon/blob/master/bamazonSeeds.sql
    
**2) NPM install the necessary packages**

  * In the command line interface (Terminal, Bash, Shell, etc), run "npm init" to create a file to hold the necessary            information for the packages.
  
  * Then run "npm install" followed by "inquirer", "colors.js" and "cli_table"; allowing the installations to fully  
    process each time before beginning a new installation.  
    
  * Here are some additional resources for troubleshooting:  
    https://www.npmjs.com/package/inquirer#installation  
    https://www.npmjs.com/package/colors.js  
    https://www.npmjs.com/package/cli-table  
    
    
**3) Set up files**

  * Again, in the command line interface, write "git clone" followed by " https://github.com/KimmyBeee/Bamazon.git "  
    to get access to the files necessary to explore Bamazon.
    
  * Finally, run "node BamazonCRUD.js" to launch the program.  
  
### Program Walkthrough  

Upon launching the program, a table will be displayed with current offerings, their prices and on-hand stock counts. The first prompt asks for an item ID number and the second prompt asks for the desired quantity to purchase. Upon completion, if there is enough on-hand stock, a confirmation of the order and a transaction total will be given.
 
![Basic walkthrough](https://github.com/KimmyBeee/Bamazon/blob/master/assets/Bamazon.gif "Basic Purchase Gif")

Should an invalid item ID number or a quantity that is more than what is available on-hand be requested, the user will be notified and prompted to resubmit their request within the inventory guidelines.

![Invalid item number or too large a quantity walkthrough](https://github.com/KimmyBeee/Bamazon/blob/master/assets/InvalidEntriesGif.gif "Invalid Item or Quantity Gif")
