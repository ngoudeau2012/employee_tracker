-- Uncomment this code only if you want to clear out the database
-- DROP DATABASE IF EXISTS employees_db;

-- Creates the database 
CREATE DATABASE employees_db;

USE employees_db;

-- Creates table for employee's
CREATE TABLE employees (
	id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id),
    FOREIGN KEY(role_id) REFERENCES role(role_id)
);

-- Creates table for each role
CREATE TABLE role (
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary  DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department_id(department_id)
    
);

-- Creates table for each department
CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);
