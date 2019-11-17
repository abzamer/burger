var mysql = require("mysql");
// var inquirer = require("inquirer");
require("dotenv").config();

//create connection for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;



