-- DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(60) NOT NULL, 
devoured BOOLEAN
);

