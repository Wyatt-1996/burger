DROP DATABASE IF EXISTS burgerDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burger (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0
);