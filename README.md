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
5. make sure that `.env` is included in your `.gitignore` file
6. change the environment variables to match your environment. In this case, you need your mysql connection password

# User Story
```
AS a user I want a simple way for me to keep track of all employees in my company
SO that when I need to add, view, update, or delete employee information while they are in my organization
```
# Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

# How to use

Lastly, all you need to do to run the application once you have set up your environment is to navigate to the directory in terminal and run `node employee-tracker.js`in the command line. 

To end the session, select the Exit option when presented with the questions.

# Contact me

If you have any questions, comments, or concerns, please don't hesitate to reach out via my contact information located on my [Github Profile](https://github.com/ngoudeau2012).