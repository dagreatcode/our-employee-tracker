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
  init();
});

function getItems() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
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
  inquirer
    .prompt([
        {
        name: "employee_id",
        message: "employee id?",
        type: "input",
      },
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
        message: "role id?",
        type: "list",
        choices: [5, 6, 7, 8, 9],
      },
      {
        name: "manager_id",
        message: "manager id?",
        type: "list",
        choices: [5, 6, 7, 8, 9],
      },
      {
        name: "userSelection",
        message: "What do you want to do next?",
        type: "list",
        choices: ["Employee", "Manager", "EXIT"],
      },
    ])
    .then(({ employee_id, first_name, last_name, role_id, manager_id }) => {
      console.log(employee_id, first_name, last_name, role_id, manager_id);
      addNewEmployee(employee_id, first_name, last_name, role_id, manager_id);
      getItems();
      init();
      //   if(userSelection === "Manager") {
      //     // console.log(userFirst, userLast);
      //     // addNewItem(first_name, last_name, role_id);
      //     askUserForNewItemInfo();
      //   }else if (userSelection === "Employee") {
      //       inquirer.prompt([
      //           {
      //             name: "userSelection",
      //             message: "role?",
      //             type: "list",
      //             choices: ["OldEmployee", "NewEmployee"],
      //           },
      //       ]).then (({userFirst, userLast}) => {
      //           console.log(userFirst);
      //           console.log(userLast);
      //       })
      //   }else if (userSelection === "Bye") {
      //     getItems();
      //   }
    });
}

function init() {
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
      }else if(userSelection === "EXIT"){
          exit();
      }else if (userSelection === "UPDATE ITEM") {
          updateEmployment();
      }
    });
}

function addNewEmployee(employee_id, first_name, last_name, role_id, manager_id) {
  connection.query(
    "INSERT INTO employee SET ? ",
    {
      employee_id: employee_id,
      first_name: first_name,
      last_name: last_name,
      role_id: role_id,
      manager_id: manager_id,
    },
    (error, data) => {
      if (error) throw error;
      init();
    }
  );
}

function viewDepartment() {
  connection.query("SELECT * FROM department;", (error, data) => {
    if (error) throw error;
    console.table(data);
    init();
  });
}

function updateEmployment() {
    connection.query("SELECT * FROM employee", (err, data) => {
        if (err) throw err;
        console.log(data);
        const arrayOfItemNames = data.map(item => item.name);
        console.log(arrayOfItemNames);
        inquirer.prompt([
            {
                name: "itemToUpdate",
                message: "What do you want to update?",
                type: "list",
                choices: arrayOfItemNames,
            }
        ]).then(({ itemToUpdate }) => {
            console.log(itemToUpdate);
            connection.query(
                "UPDATE department SET ? WHERE ?",
                [
                    {
                        name: NewEmployees,
                    },
                    {
                        name: itemToUpdate,
                    },
                ],
                (err, data) => {
                    if (err) throw err;
                    console.log(data);
                    init;
                }
            )
        })
    })
}

function exit() {
    connection.end();
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
