const mysql = require("mysql");
const inquirer = require("inquirer")
const consoleTable = require("console.table")
require("dotenv").config();


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.MYSQL_PASSWORD,
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start(){
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees", 
                "View All Departments",
                "View All Roles",
                "View All Employees by Department", 
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manger",
                "EXIT"
            ]
        }).then(function(res){
            switch(res.action){
                case "View All Employees":
                    return allEmployees();
                case "View All Departments":
                    return allDepartments();
                case "View All Roles":
                    return allRoles();
                case "View All Employees by Department":
                    return employeesByDepartment();
                case "View All Employees by Manager":
                    return employeesByManager();
                case "Add Employee":
                    return addEmployee();
                case "Remove Employee":
                    return removeEmployee();
                case "Update Employee Role":
                    return updateRole();
                case "Update Employee Manger":
                    return updateManager();
                case "EXIT":
                    return exit();
            };

        });
};

function allEmployees(){
    let query = "SELECT table1.id, first_name, last_name, title FROM employees AS table1 LEFT JOIN role AS table2 ON table1.role_id = table2.id"
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        start();
    })
}

function allDepartments(){
    let query = "SELECT * FROM department"
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        start();
    })
}
function allRoles(){
    let query = "SELECT * FROM role"
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        start();
    })
}

function addEmployee(){
    // Run role query to gather possible roles available
    connection.query("SELECT title, id FROM role", function(errRole, resRole){
        if (errRole) throw errRole;
        // Run employee query to gather possible managers available
        connection.query("SELECT id, CONCAT(first_name,' ',last_name) AS name FROM employees", function(errMan, resMan){
            inquirer.prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: "What is the new employee's first name?"
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the new employee's last name?"
                },
                {
                    type: "list",
                    name: "role_id",
                    message: "What is this new employee's role?",
                    choices: resRole.map((role) => {
                        return {
                            name: role.title,
                            value: role.id
                        };
                    })
                },
                {
                    type: "list",
                    name: "manager_id",
                    message: "Who is this new employee's manager?",
                    choices: resMan.map((employee) => {
                        return {
                            name: employee.name,
                            value: employee.id
                        };
                    })
                }
                ]).then(function(res){
                    // console.log(res);
                    connection.query(
                        "INSERT INTO employees SET ?",
                        [{
                            first_name: res.first_name,
                            last_name: res.last_name,
                            role_id: res.role_id,
                            manager_id: res.manager_id
                        }],
                        function (err,res){
                            if (err) throw err
                            console.log("The employee was added!")
                            start();
                        });
                });
        });
    });
    
};

function employeesByDepartment(){
    allDepartments()
    inquirer.prompt({

    })
    let query = "SELECT * FROM role"
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        start();
    })
};

// function addEmployee() {
//     connection.query("Select title, id FROM role", function (errRole, resRole) {
//       if (errRole) throw errRole;
//       connection.query(
//         `SELECT CONCAT(first_name," ",last_name) AS ManagerName, id FROM employee;`,
//         function (errManager, resManager) {
//           if (errManager) throw errManager;
//           inquirer
//             .prompt([
//               {
//                 name: "employeeFirst",
//                 type: "input",
//                 message: "Please enter employee's first name.",
//               },
//               {
//                 name: "employeeLast",
//                 type: "input",
//                 message: "Please enter employee's last name.",
//               },
//               {
//                 name: "employeeRole",
//                 type: "list",
//                 message: "Please select employee's role.",
//                 choices: resRole.map((role) => {
//                   return {
//                     name: role.title,
//                     value: role.id,
//                   };
//                 }),
//               },
//               {
//                 name: "employeeManager",
//                 type: "list",
//                 message: "Please select employee's manager.",
//                 choices: resManager.map((manager) => {
//                   return {
//                     name: manager.ManagerName,
//                     value: manager.id,
//                   };
//                 }),
//               },
//             ])
//             .then(function (answer) {
//               connection.query(
//                 "INSERT INTO employee SET ?",
//                 {
//                   first_name: answer.employeeFirst,
//                   last_name: answer.employeeLast,
//                   role_id: answer.employeeRole,
//                   manager_id: answer.employeeManager,
//                 },
//                 function (err) {
//                   if (err) throw err;
//                   console.log("New employee added!");
//                   start();
//                 }
//               );
//             });
//         }
//       );
//     });
//   }