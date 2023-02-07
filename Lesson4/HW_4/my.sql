CREATE TABLE IF NOT EXISTS users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INT NOT NULL,
  address TEXT NOT NULL
 );

INSERT INTO users (name, age, address)
VALUES ("Ivan", '27', "Moscow");
INSERT INTO users (name, age, address)
VALUES ("Nikola", '30', "Irkutsk");
INSERT INTO users (name, age, address)
VALUES ("Maria", '25', "Ekaterinbutg");
INSERT INTO users (name, age, address)
VALUES ("Pavel", '32', "Kazan");
INSERT INTO users (name, age, address)
VALUES ("Anna", '18', "Moscow");
INSERT INTO users (name, age, address)
VALUES ("Vadim", '30', "Irkutsk");

SELECT * FROM users WHERE address >= 'Moscow'
AND age >= '18' AND age < '30';