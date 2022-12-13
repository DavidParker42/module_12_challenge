DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker_db

USE employeetracker_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCUREMENT,
  name VARCHER (30) NOT NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCUREMENT,
  title VARCHAR(30)NOT NULL,
  salary DECIMAL NOT NULL,
  department INT
);

CREATE TABLE employee(
  id INT PRIMARY KEY AUTO_INCUREMENT,
  first_name VARCHAR(30) NOT NULL ,
  last_name VARCHAR(30) NOT NULL ,
  role_id INT,
  Manager_id INT 
  (null)
);