USE `api-node-sql`;

CREATE TABLE users(
	email VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR (150) NOT NULL,
    
    CONSTRAINT pk_email PRIMARY KEY (email)
);