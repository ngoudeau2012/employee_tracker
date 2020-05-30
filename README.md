# Employee Tracker
A command line interface that gives companies and employee database that they can add, remove, and query employee data from.

# Overview
Employee Tracker is a Command Line Interface (CLI) application that allows companies and managers manage employees throughout their entire organization. Using a mySQL database along side relational tables, users are able to add, remove, and search different employees, roles, and departments within the organization. 

To do this, my Employee Tracker application uses the [mySQL Language](https://dev.mysql.com/doc/refman/8.0/en/) to allow users to query the mySQL local database. 

# Application Preview

A video preview of the Employee Tracker can be found [here](https://drive.google.com/file/d/1ioBN3AvgDwvnje0RNfzVVQw1VpiM06RR)

# Documentation/Tools Used

## Application Design:

The spec for this application was provided by my boot camp's curriculums. I was asked to create the database and establish the relationships for each of the tables.

## Package Dependencies:

- I use the [console.table](https://www.npmjs.com/package/console.table) package to organize the JSON results that are sent back from queries.

- I use the [inquirer](https://www.npmjs.com/package/inquirer) package to prompt the User with questions that allows the user to query the database based on what they are looking for.

- I use the [mysql](https://www.npmjs.com/package/mysql) package to establish the connection to the database and allow the responses/request to be pasted through to the database.

- I use the [dotenv](https://www.npmjs.com/package/dotenv) package to allow me to load in my .env file which places all of my private information that the environment needs for the app to function.

## Setting up the environment:

1. Perform an npm install - This will install all of the dependencies
2. Utilize the `schema.sql` file to set up your database in mysql (for testing purposes, there is a `seed.sql` file available to inset data into your database.)
3. Create a `.gitignore` file (include your node_modules and DS_Store for mac users)
4. Copy `.env.sample` into a file called `.env`
5. Make sure that `.env` is included in your `.gitignore` file
6. Change the environment variables to match your environment. In this case, you need your mysql connection password

# User Story
```
AS a user I want a simple way for me to keep track of all employees in my company
SO that when I need to add, view, update, or delete employee information while they are in my organization
```
# Acceptance Criteria
```
USER is presented with choices
WHEN the user selects to view all employees in their organization
THEN the user is presented with a table view of all employees
WHEN the user selects to view all employees by department
THEN the user is presented with all the departments available to chose from
THEN the user is presented with a table view of all the employees in the department they selected
WHEN the user selects to view all employees by manager
THEN the user is presented with all the employees available to chose from
THEN the user is presented with a table view of all the employees in the manager they selected
WHEN the user selects to add an employee
THEN the user is prompted by a series of questions that will create a new employee
WHEN the user selects to add a role
THEN the user is prompted by a series of questions that will create a new role 
WHEN the user selects to add an department
THEN the user is prompted by a series of questions that will create a new department 
WHEN the user selects to update an employee's role
THEN the user is prompted by a series of questions that will update the employee's role
WHEN the user selects to update an employee's manager
THEN the user is prompted by a series of questions that will update the employee's manager
WHEN the user selects to remove an employee form the company
THEN the user is presented a list of employees to select from and remove the selected employee form the company
WHEN the user selects to remove an role form the company
THEN the user is presented a list of roles to select from and remove the selected role form the company
WHEN the user selects to remove a department form the company
THEN the user is presented a list of departments to select from and remove the selected department form the company
```

# How to use

Lastly, all you need to do to run the application once you have set up your environment is to navigate to the directory in terminal and run `node employee-tracker.js`in the command line. 

To end the session, select the Exit option when presented with the questions.

# Contact me

If you have any questions, comments, or concerns, please don't hesitate to reach out via my contact information located on my [Github Profile](https://github.com/ngoudeau2012).