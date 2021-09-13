CREATE DATABASE maratonadev WITH ENCODING 'UTF8';

ALTER DATABASE maratonadev OWNER TO postgres;

\connect maratonadev

CREATE TABLE donors (
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  email VARCHAR (255) NOT NULL,
  blood VARCHAR (255) NOT NULL
);

ALTER TABLE donors OWNER TO postgres;
