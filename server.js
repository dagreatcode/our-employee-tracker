const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // getItems();
  // addNewItem();
  // connection.end();
  inquirer
    .prompt([
      {
        name: "userSelection",
        message: "What is next?",
        type: "list",
        choices: ["ADD NEW ITEM", "VIEW ITEMS", "UPDATE ITEM", "EXIT"],
      },
    ])
    .then(({ userSelection }) => {
      console.log(userSelection);
      if (userSelection === "VIEW ITEMS") {
        getItems();
      } else if (userSelection === "ADD NEW ITEM") {
        askUserForNewItemInfo();
      }
    });
});

function getItems() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}
function addNewItem(employee_id, first_name, last_name, role_id, manager_id) {
  connection.query(
    "INSERT INTO employee SET ?",
    {
      employee_id: employee_id,
      first_name: first_name,
      last_name: last_name,
      role_id: role_id,
      manager_id: manager_id,
    },
    (err, res) => {
      if (err) throw err;
      //         for(let i = 0; i < res.length; i++) {
      //             console.log(res[i].employee_id + "|" + res[i].first_name + "|" + res[i].last_name + "|" + res[i].role_id + "|" + res[i].manager_id)
      //         };
      //         console.log("--------------------------------------------------------");
    }
  );
}
function askUserForNewItemInfo() {
    inquirer.prompt([
        {
          name: "first_name",
          message: "first name?",
          type: "input",
        },
        {
          name: "last_name",
          message: "last name?",
          type: "input",
        },
        {
          name: "role_id",
          message: "role?",
          type: "list",
          choices: ["Employee", "Manager"],
        },
      ]).then (({first_name, last_name, role_id}) => {
          console.log(first_name);
          console.log(last_name);
          addNewItem(first_name, last_name, role_id);
          getItems();
      })
}

// function queryRole(){
//     const query = connection.query("SELECT * FROM employee", (err, res) => {
//         if (err) throw err;
//         console.table();
//     })
// }

// init2();

// function init() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "first_name",
//             messaage: "What is your name",
//         },
//         {
//             type: "input",
//             name: "last_name",
//             messaage: "What is your name",
//         },
//         {
//             type: "input",
//             name: "role",
//             messaage: "What is your role",
//             choice: [
//                 "Test1",
//                 "Test2"
//             ]
//         },
//     ]).then(function(answer) {
//         switch (answer.input) {
//         case "Find employee by name":
//           employeeSearch();
//           break;

//         case "employee by roll":
//           roleSearch();
//           break;

//         case "Find department":
//           departmentSearch();
//           break;
//         }
//       });
//   }

//   function employeeSearch() {
//     inquirer
//       .prompt({
//         name: "artist",
//         type: "input",
//         message: "What artist would you like to search for?"
//       })
//       .then(function(answer) {
//         const query = "SELECT id, first_name, last_name, role_id, manager_id FROM employees";
//         connection.query(query, { name: answer.first_name }, function(err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.log("id: " + res[i].id + " || first_name: " + res[i].last_name + " || role_id: " + res[i].role_id + " || manager_id: " + res[i].manager_id);
//           }
//           init();
//         });
//       });
// ])

// console.log(query.sql);
// connection.end();
//   }
