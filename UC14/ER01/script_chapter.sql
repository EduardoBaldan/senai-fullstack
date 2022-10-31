CREATE DATABASE Chapter;
USE Chapter;
CREATE TABLE Livros
(
	Id INT PRIMARY KEY IDENTITY,
	Titulo VARCHAR (150) NOT NULL,
	QuantidadePaginas INT,
	Disponivel BIT
);

INSERT INTO Livros  (Titulo, QuantidadePaginas, Disponivel)
VALUES ('itulo A', '120', '1');

INSERT INTO Livros  (Titulo, QuantidadePaginas, Disponivel)
VALUES ('itulo B', '220', '0');

UPDATE Livros
SET Titulo = 'Titulo A'
where Id = 1;

UPDATE Livros
SET Titulo = 'Titulo B'
where Id = 2;



SELECT * FROM Livros;



