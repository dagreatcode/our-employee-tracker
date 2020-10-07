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
            messaage: "What is your role",
            choice: [
                "Test1",
                "Test2"
            ]
        }
    ])
    .then(function(answer) {
        switch (answer.input) {
        case "Find employee by name":
          employeeSearch();
          break;
  
        case "employee by roll":
          roleSearch();
          break;
  
        case "Find department":
          departmentSearch();
          break;
        }
      });
  }

  function employeeSearch() {
    inquirer
      .prompt({
        name: "artist",
        type: "input",
        message: "What artist would you like to search for?"
      })
      .then(function(answer) {
        const query = "SELECT id, first_name, last_name, role_id, manager_id FROM employees";
        connection.query(query, { name: answer.first_name }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("id: " + res[i].id + " || first_name: " + res[i].last_name + " || role_id: " + res[i].role_id + " || manager_id: " + res[i].manager_id);
          }
          init();
        });
      });
  }