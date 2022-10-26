--criaaçção de banco de dados
CREATE DATABASE TesteSegurancaBE7FS4;

--colocar o banco de dados em uso
USE TesteSegurancaBE7FS4;

--criação de uma tabela para armaznar usuários
CREATE TABLE Usuarios
(
	ID INT PRIMARY KEY IDENTITY, --identity torna o campo auto incremental
	Email VARCHAR(100) UNIQUE NOT NULL,
	Senha VARCHAR(50) NOT NULL
);

--Consulta a todos os dados da tabela criada

SELECT * FROM Usuarios;

-- cadastrar um usuario no banco de dados

INSERT INTO Usuarios VALUES ('eduardo@email.com' ,'1234' )
INSERT INTO Usuarios VALUES ('renata@email.com' ,'4321' )
INSERT INTO Usuarios VALUES ('francisco@email.com' ,'5678' );

--Hasheando dados em uma consulta
SELECT Id,Email FROM Usuarios;


