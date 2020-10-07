const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Family1st",
    database: "employees",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});

function init() {
    connection.query("SELECT name FROM employees", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.log(res);
      connection.table(data);
    });
  }