## Exercício 1

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

 ## a) Ele some com a coluna de salário.

## b)ele altera o gênero, trocando por sexo, limitando caracteres para 6.

 ## c) altera o gênero para gênero novamente, limitando caracteres para 255.

## Exercício 2
-- UPDATE Actor
-- SET name = "Moacyr Franco"
-- WHERE id = "123";

## a)
UPDATE Actor
SET name = "Joana Prado";
SELECT id = "003";

 ## b)
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

 ## c)
UPDATE Actor
SET name = "Paulo Gustavo";
SET salary = 234567;
SET birth_date = "2005-03-07";
SET gender = "male";
SELECT id = "005";

 ## Exercício 3
DELETE FROM Actor WHERE name = "Tony Ramos";
 ## a)
DELETE FROM Actor Where name = "Fernanda Montenegro";

 ## b)
DELETE FROM Actor
WHERE gender = "male" AND
	salary > 1000000;

## Exercício 4
SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

 ## a)
SELECT MAX(salary) FROM Actor;

## b) 
SELECT MIN(salary) FROM Actor WHERE gender = "female";

## c) 
SELECT COUNT(*) FROM Actor WHERE gender = "female";

## d) 
SELECT SUM(salary) FROM Actor;

## Exercício 5

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

## a) Ele contou todos os atores de cada gênero e agrupou como tipos de gênero.;

## b)
SELECT id, name FROM Actor
ORDER BY name DESC;

 ## c)

SELECT * FROM Actor
ORDER BY salary;

## d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
## e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## Exercício 6
## a)
ALTER TABLE Movies ADD playing_limit_date DATE;

## b)
ALTER TABLE Movies CHANGE avaliacao avaliacao FLOAT;

 ## c)
UPDATE Movies
SET playing_limit_date = "2020-12-31"
WHERE id = 001;

UPDATE Movies
SET playing_limit_date = "2022-12-31"
WHERE id = 002;

## d)

DELETE FROM Movies WHERE id = 001
