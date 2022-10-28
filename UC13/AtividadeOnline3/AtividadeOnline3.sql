USE UC13

INSERT INTO Usuarios VALUES ('Geralt de rivia', 'Senha1234');
INSERT INTO Usuarios VALUES ('Yennefer de Vengerberg', 'Senha4321');
INSERT INTO Usuarios VALUES ('Cirilla de Cintra', 'Senha5678');
INSERT INTO Usuarios VALUES ('Kharazin', 'Senha8765');

INSERT INTO Classes VALUES ('BRUXO', 'Matador de Monstros');
INSERT INTO Classes VALUES ('MAGA', 'Caos');
INSERT INTO Classes VALUES ('BRUXA', 'Sangue Dos Antigos');
INSERT INTO Classes VALUES ('MONGE', 'Luta');

INSERT INTO Habilidades VALUES ('Fogo');
INSERT INTO Habilidades VALUES ('Curar');
INSERT INTO Habilidades VALUES ('Teleport');
INSERT INTO Habilidades VALUES ('Força');

INSERT INTO Personagens VALUES ('LoboBranco', 1,1);
INSERT INTO Personagens VALUES ('MagaDaNoit', 2,2);
INSERT INTO Personagens VALUES ('CIRI', 3,3);
INSERT INTO Personagens VALUES ('Zmonk', 3,1);

INSERT INTO ClassesHabilidades VALUES (1,1), (1,2);
INSERT INTO ClassesHabilidades VALUES (2,2), (2,1);
INSERT INTO ClassesHabilidades VALUES (3,1), (3,3);
INSERT INTO ClassesHabilidades VALUES (1,2), (1,1);

SELECT * FROM Usuarios;
SELECT * FROM Classes;
SELECT * FROM Habilidades;
SELECT * FROM Personagens;
SELECT * FROM ClassesHabilidades;