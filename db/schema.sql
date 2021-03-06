DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(30),
	devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

UPDATE burgers SET devoured=true WHERE id = 1;
SELECT * FROM burgers;