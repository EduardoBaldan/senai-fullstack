
--hasheando dados em uma consulta
SELECT ID, Email, HASHBYTES('M2',Senha) FROM Usuarios;

--hasheando dados e filtrando apenas um usuario
SELECT ID, Email, HASHBYTES('M2',Senha) FROM Usuarios WHERE Id = 1;

--hasheando dados e filtrando apenas um usuario e dando apelido a couna hasheada
SELECT ID, Email, HASHBYTES('M2',Senha) AS 'Senha Hash' FROM Usuarios;


--tilizando algotitmo MD2 (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('MD2',Senha) AS 'Senha Hash' FROM Usuarios;

--tilizando algotitmo MD4 (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('MD4',Senha) AS 'Senha Hash' FROM Usuarios;

--tilizando algotitmo MD5 (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('MD5',Senha) AS 'Senha Hash' FROM Usuarios;

--tilizando algotitmo SHA (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('SHA',Senha) AS 'Senha Hash' FROM Usuarios;

--tilizando algotitmo SH1 (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('SHA1',Senha) AS 'Senha Hash' FROM Usuarios;

--tilizando algotitmo SHA2_256 (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('SHA2_256',Senha) AS 'Senha Hash' FROM Usuarios;

--tilizando algotitmo SHA2_512 (seguindo os ultimos exempolos de linhaXcolunas)
SELECT ID, Email, HASHBYTES('SHA2_512',Senha) AS 'Senha Hash' FROM Usuarios WHERE Id = 1;