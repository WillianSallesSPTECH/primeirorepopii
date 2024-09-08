CREATE DATABASE ProjetoPI;

USE ProjetoPI;

-- Tabela sobre data de registro dos dados de pets clientes

CREATE TABLE DadosClientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomePet varchar(100) NOT NULL,
    racaPet varchar(50) NOT NULL,
    nomeDono varchar(100) NOT NULL,
    possuiConvenio char(3) NOT NULL,
    dataHora DATETIME NOT NULL
);

INSERT INTO DadosClientes (nomePet, racaPet, nomeDono, possuiConvenio, dataHora)
VALUES 
('Rex', 'Labrador', 'João Silva', 'Sim', '2024-09-06 08:30:00'),
('Bella', 'Poodle', 'Maria Oliveira', 'Sim', '2024-10-25 06:45:00'),
('Max', 'Bulldog', 'Carlos Santos', 'Não', '2024-02-06 17:00:00'),
('Luna', 'Beagle', 'Fernanda Costa', 'Sim', '2024-07-15 13:15:00'),
('Zeca', 'Siamês', 'Ana Pereira', 'Não', '2024-10-20 08:30:00');

SELECT * FROM DadosClientes;

-- Tabela sobre coleta de dados

CREATE TABLE dadosSensores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dataHora DATETIME NOT NULL,
    temperatura DECIMAL(5,2) NOT NULL,
    sensorProximidade INT NOT NULL -- 0 para não detectado, 1 detectado
);

INSERT INTO dadosSensores (dataHora, temperatura, sensorProximidade)
VALUES 
('2024-05-07 09:05:00', '22.30', '1'),
('2024-08-10 13:20:00', '15.50', '0'),
('2024-01-05 15:35:00', '11.40', '0'),
('2024-09-02 12:50:00', 30.70, '1'), 
('2024-11-20 11:05:00', 24.00, '0');

SELECT * FROM dadosSensores;

-- tabela sobre Petcare e os dados das van

CREATE TABLE informacoesVans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa char(8) NOT NULL UNIQUE,
    possuiPetcare varchar(10) NOT NULL,
    nomePetshop varchar(100) NOT NULL,
    nomeDonoPetshop varchar(100) NOT NULL
);

INSERT INTO informacoesVans (placa, possuiPetcare, nomePetshop, nomeDonoPetshop)
VALUES 
('ABC-1234', 'Possui', 'PetShop do Tonhao', 'Maria Oliveira'),
('XYZ-5678', 'Não possui', 'Mundo dos Pets', 'João Silva'),
('LMN-9101', 'Possui', 'PetLove', 'Ana Costa'),
('OPQ-2345', 'Não possui', 'Petz', 'Carlos Pereira'),
('RST-6789', 'Possui', 'PetMania', 'Fernanda Lima'),
('UVW-5432', 'Não possui', 'Bichinhos Felizes', 'Roberto Almeida');

SELECT * FROM informacoesVans;