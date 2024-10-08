CREATE DATABASE hogwarts;

USE hogwarts;


-- Criação da tabela Casa
CREATE TABLE Casa (
    idCasa INT PRIMARY KEY AUTO_INCREMENT,
    nomeCasa VARCHAR(50) NOT NULL,
    fundadorCasa VARCHAR(50) NOT NULL,
    professorResponsavel VARCHAR(50) NOT NULL
);

-- Criação da tabela Aluno
CREATE TABLE Aluno (
    RA VARCHAR(5) PRIMARY KEY,
    nomeAluno VARCHAR(50) NOT NULL,
    quadribol ENUM('sim', 'não') NOT NULL,
    dataInicio DATE NOT NULL,
    dataFim DATE,
    pet VARCHAR(50),
    patrono VARCHAR(50),
    fkCasa INT,
    FOREIGN KEY (fkCasa) REFERENCES Casa(idCasa)
);

-- Criação da tabela Monitor
CREATE TABLE Monitor (
    idMonitor INT PRIMARY KEY AUTO_INCREMENT,
    fkRA VARCHAR(5),
    fkCasaMonitor INT,
    FOREIGN KEY (fkRA) REFERENCES Aluno(RA),
    FOREIGN KEY (fkCasaMonitor) REFERENCES Casa(idCasa)
);

INSERT INTO Casa (nomeCasa, fundadorCasa, professorResponsavel)
VALUES
    ('Grifinória', 'Godric Gryffindor', 'Minerva McGonagall'),
    ('Sonserina', 'Salazar Slytherin', 'Severo Snape'),
    ('Corvinal', 'Rowena Ravenclaw', 'Filius Flitwick'),
    ('Lufa-Lufa', 'Helga Hufflepuff', 'Pomona Sprout');
    
    INSERT INTO Aluno (RA, nomeAluno, quadribol, dataInicio, dataFim, pet, patrono, fkCasa)
VALUES
    ('A001', 'Harry Potter', 'sim', '1991-09-01', '1997-06-30', 'Coruja Hedwig', 'Cervo', 1),
    ('A002', 'Hermione Granger', 'não', '1991-09-01', '1997-06-30', NULL, 'Lontra', 1),
    ('A003', 'Ron Weasley', 'sim', '1991-09-01', '1997-06-30', 'Rato Perebas', 'Cão', 1),
    ('A004', 'Draco Malfoy', 'sim', '1991-09-01', '1997-06-30', 'Coruja', 'Dragão', 2),
    ('A005', 'Luna Lovegood', 'não', '1992-09-01', '1998-06-30', NULL, 'Lebre', 3),
    ('A006', 'Cedrico Diggory', 'sim', '1990-09-01', '1996-06-30', NULL, 'Águia', 4),
    ('A007', 'Neville Longbottom', 'não', '1991-09-01', '1997-06-30', 'Sapo', 'Leão', 1),
    ('A008', 'Cho Chang', 'não', '1991-09-01', '1997-06-30', NULL, 'Cisne', 3),
    ('A009', 'Ginny Weasley', 'sim', '1992-09-01', '1998-06-30', NULL, 'Cavalo', 1),
    ('A010', 'Pansy Parkinson', 'não', '1991-09-01', '1997-06-30', NULL, NULL, 2),
    ('A011', 'Hannah Abbott', 'não', '1991-09-01', '1997-06-30', NULL, NULL, 4),
    ('A012', 'Zacharias Smith', 'sim', '1991-09-01', '1997-06-30', NULL, NULL, 4);

SELECT * FROM Aluno WHERE quadribol = 'sim';

SELECT nomeAluno AS 'nomeAluno', dataInicio AS 'Data início', patrono 
FROM Aluno INNER JOIN Casa ON Aluno.fkCasa = Casa.idCasa
WHERE nomeCasa = 'Lufa-Lufa';

SELECT nomeAluno, pet, nomeCasa
FROM Aluno INNER JOIN Casa ON Aluno.fkCasa = Casa.idCasa;

SELECT m.fkRA AS 'monitor responsável', a.nomeAluno AS 'nome aluno', c.nomeCasa AS 'Casa'
FROM Monitor m
JOIN Aluno a ON a.fkCasa = m.fkCasaMonitor
JOIN Casa c ON c.idCasa = m.fkCasaMonitor;


SELECT nomeAluno, 
       IFNULL((SELECT nomeCasa FROM Casa WHERE idCasa = fkCasa), 'aluno não alocado') AS casa,
       quadribol,
       IFNULL(pet, 'Nenhum pet') AS pet,
       IFNULL(patrono, 'Sem memórias felizes') AS patrono
FROM Aluno;

SELECT a.nomeAluno, a.dataFim, c.nomeCasa, c.fundadorCasa, c.professorResponsavel
FROM Aluno a
INNER JOIN Casa c ON a.fkCasa = c.idCasa;

-- Atribuindo uma casa aos alunos restantes
UPDATE Aluno SET fkCasa = 1 WHERE RA = 'A002'; 
UPDATE Aluno SET fkCasa = 2 WHERE RA = 'A004'; 
UPDATE Aluno SET fkCasa = 3 WHERE RA = 'A008'; 

SELECT a.nomeAluno, 
       IFNULL(m.fkRA, 'Tem caroço nesse angu') AS monitor,
       c.nomeCasa
FROM Aluno a
LEFT JOIN Monitor m ON a.RA = m.fkRA
LEFT JOIN Casa c ON a.fkCasa = c.idCasa;

SELECT a.nomeAluno, 
       IFNULL(m.fkRA, 'aluno não iniciou o curso em Hogwarts') AS monitor
FROM Aluno a
LEFT JOIN Monitor m ON a.RA = m.fkRA;

DROP DATABASE hogwarts;