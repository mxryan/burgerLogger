CREATE DATABASE burgerlogger_db;
USE burgerlogger_db;
CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(80) NOT NULL,
devoured BOOL DEFAULT 0,
PRIMARY KEY(id)
);