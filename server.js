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
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            messaage: "What is your name",
        },
        {
            type: "input",
            name: "last_name",
            messaage: "What is your name",
        },
        {
            type: "input",
            name: "role",
            messaage: "What is your name",
            choice: [
                "Test1",
                "Test2"
            ]
        }
    ]).then(function(answers){
        console.log(answers);
    })
}