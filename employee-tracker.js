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
                case "View All Employees by Department":
                    return employeesDepartment();
                case "View All Employees by Manager":
                    return employeesManager();
                case "Add Employee":
                    return addEmployee();
                case "Remove Employee":
                    return removeEmployee();
                case "Update Employee Role":
                    return updateRole();
                case "Update Employee Manger":
                    return updateManager();
                case "EXIT":
                    return
            };

        });
};

function allEmployees(){
    let query = "SELECT * FROM employees LEFT JOIN role AS table1 ON employees.role_id = table1.id"
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        start();
    })
}

function addEmployee(){
    inquirer
    .prompt()
}