CREATE DATABASE projPI;
USE projPI;


    CREATE TABLE petCare (
    id_empresa INT PRIMARY KEY AUTO_INCREMENT ,
    Nome VARCHAR(30),
    CNPJ VARCHAR(30),
    Endereco VARCHAR(100),
    Telefone VARCHAR(15),
    Email VARCHAR(30),
    QuantFuncionarios VARCHAR (10),
    FaturamentoAnual DECIMAL(15, 2)
);

INSERT INTO petCare (Nome, Cnpj, Endereco, Telefone, Email, QuantFuncionarios, FaturamentoAnual ) VALUES 
('PetCare', '35987564253', 'Rua Haddock Lobo, 595', '(11)3489-4063', 'petcare@setech.school', 6, '10.00');


    CREATE TABLE usuario(
    id_tutor INT PRIMARY KEY AUTO_INCREMENT ,
    Nome1 VARCHAR(30),
    CPF VARCHAR (30),
    Endereco VARCHAR(30),
    Telefone VARCHAR(15),
    Email VARCHAR(50)
);

INSERT INTO usuario (Nome1, Endereco, CPF, Telefone, Email ) VALUES 
('Cecilio', 'Rua Friedrich 595', '47316177829', '(11)3942-6301', 'pgfeeling@gmail.com');

DROP DATABASE projPI;
    CREATE TABLE pet (
    id_pet INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    especie VARCHAR (30),
    raça VARCHAR (20).
    temperatura_ideal decimal (6,2),
    Endereco_ida VARCHAR(30),
    endereco_volta VARCHAR(30),
    telefone VARCHAR(15),
    porte VARCHAR(10),
    CONSTRAINT chk_porte CHECK (porte IN ('Grande', 'Médio', 'Pequeno'))
);

INSERT INTO Pet (Nome, Especie, Raça, Temperatura_Trans, Endereco_ida, Endereco_volta, Telefone, Porte ) VALUES 
('Garfild', 'Gato','Laranjo','23.2','Haddock Lobo, 585',
 'Rua Lobo, 595', '(11)3942-6301', 'Grande');


SELECT * FROM petCare;

DROP DATABASE projPI;