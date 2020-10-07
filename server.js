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
    inquirer.prompt(
        {
            name: "name",
            type: "list",
            message: "What is your first_name?"
            choices: [
                "Test1",
                "Test2"
            ]
        },
    ).then (res => {
        if (res === true) {
            console.log("Success!");
          }
          else {
            console.log(err);
          }
    })
}