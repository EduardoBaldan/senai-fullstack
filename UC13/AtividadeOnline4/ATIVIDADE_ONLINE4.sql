--CRIAMOS O LOGIN DO ALUNO
CREATE LOGIN aluno
WITH PASSWORD = '1234'

--CRIAMOS UM PERFIL CHAMADO ALUNO E ATRIBUIMOS AO ALUNO
CREATE USER aluno FOR LOGIN aluno;

GRANT SELECT TO aluno