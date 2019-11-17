var mysql = require("mysql");
// var inquirer = require("inquirer");
require("dotenv").config();

//create connection for sql database
var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M1asp127*",
    database: "burgers_db"
  });
};

connection.connect();  
module.exports = connection;



