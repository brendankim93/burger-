CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

