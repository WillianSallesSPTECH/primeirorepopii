CREATE DATABASE projPI;
USE projPI;


    CREATE TABLE petCare (
    Nire INT PRIMARY KEY AUTO_INCREMENT ,
    Nome VARCHAR(30),
    Cnpj VARCHAR(30),
    Endereco VARCHAR(100),
    Telefone VARCHAR(15),
    Email VARCHAR(50),
    QuantFuncionarios VARCHAR (10),
    FaturamentoAnual DECIMAL(15, 2)
);

INSERT INTO petCare (Nome, Cnpj, Endereco, Telefone, Email, QuantFuncionarios, FaturamentoAnual ) VALUES 
('PetCare', '12345678000195', 'Rua Haddock Lobo 595', '(11)3589-4043', 'PetCare@Sptech.school', 6, '10.00');


    CREATE TABLE usuario (
    Id_usuario INT PRIMARY KEY AUTO_INCREMENT ,
	Nome VARCHAR(30),
    CPF VARCHAR (30),
    Endereco VARCHAR(30),
    Telefone VARCHAR(15),
    Email VARCHAR(50)
);

INSERT INTO usuario (Nome, Endereco, CPF, Telefone, Email ) VALUES 
('Junior', 'Rua Lobo 595', '38321278276', '(11)2212-4043', 'ClienteFeliz@gmil.com');


    CREATE TABLE Pet (
    Id_Pet INT PRIMARY KEY AUTO_INCREMENT ,
	Nome VARCHAR(30),
    Especie VARCHAR (30),
    Temperatura_ideal decimal (6,2),
	Temperatura_Trans decimal (6,2),
    Endereco_ida VARCHAR(30),
    Endereco_volta VARCHAR(30),
    Telefone VARCHAR(15),
    Porte VARCHAR(10),
    CONSTRAINT chk_porte CHECK (porte IN ('Grande', 'Médio', 'Pequeno'))
);

	INSERT INTO Pet (Nome, Especie, Temperatura_ideal, Temperatura_Trans, Endereco_ida, Endereco_volta, Telefone, Porte ) VALUES 
('Garfild', 'Gato', 24.2, 23.7,'Rua Haddock Lobo 595', 'Rua Lobo 595', '(11)6712-4043', 'Grande');


SELECT * FROM petCare;