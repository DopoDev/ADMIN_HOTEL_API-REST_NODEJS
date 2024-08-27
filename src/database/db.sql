CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  creacion TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO "users" (name, email) VALUES ('Johao Ramirez', 'johao@gmail.com');

INSERT INTO "users" (name, email)
  VALUES ('Joseph', 'joseph@gmail.com'),
  ('Etor', 'etor@gmail.com'),
  ('Cesar', 'cesar@gmail.com');


SELECT * FROM "users";