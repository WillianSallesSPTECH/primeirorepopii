-- Banco de dados PetCare
CREATE DATABASE PetCare;
USE PetCare;

-- Criar a tabela Animal
CREATE TABLE Animal (
    idAnimal INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    especie VARCHAR(20),
    peso DECIMAL(5, 2),
    porte VARCHAR(10),
    CONSTRAINT chk_porte CHECK (porte IN ('pequeno', 'médio', 'grande'))
);

-- Criar a tabela Sensor
CREATE TABLE Sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(30),  -- Tipo do sensor (ex: Temperatura, Bloqueio)
    localizacao VARCHAR(50)  -- Onde o sensor está instalado (ex: Porta-malas, Jaula)
);

-- Criar a tabela LeituraSensor
CREATE TABLE LeituraSensor (
    idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    idAnimal INT,  -- ID do animal associado à leitura
    idSensor INT,  -- ID do sensor que realizou a leitura
    data_leitura DATETIME,
    valor_leitura DECIMAL(5, 2)  -- Valor da temperatura ou bloqueio
);

-- Inserir alguns dados na tabela Animal
INSERT INTO Animal (nome, especie, peso, porte) VALUES 
('Rex', 'Cachorro', 25.50, 'Grande'),
('Mia', 'Gato', 4.30, 'Pequeno'),
('Luna', 'Cachorro', 10.00, 'Médio');

-- Inserir dados na tabela Sensor
INSERT INTO Sensor (tipo, localizacao) VALUES 
('Temperatura', 'Porta-malas'),
('Bloqueio', 'Entrada Jaula'),
('Temperatura', 'Jaula Interna');

-- Inserir leituras de sensores para os animais
INSERT INTO LeituraSensor (idAnimal, idSensor, data_leitura, valor_leitura) VALUES
(1, 1, '2024-09-10 14:30:00', 22.5),  -- Temperatura para Rex
(2, 2, '2024-09-10 15:00:00', 1),    -- Bloqueio para Mia (1 = bloqueio ativo)
(3, 3, '2024-09-10 16:00:00', 19.8);  -- Temperatura para Luna

-- Comandos de consulta e manipulação de dados

-- Exibir todos os animais
SELECT * FROM Animal;

-- Exibir todos os sensores
SELECT * FROM Sensor;

-- Exibir as leituras dos sensores
SELECT * FROM LeituraSensor;

-- Usar LIKE para buscar animais por porte
SELECT nome, especie FROM Animal WHERE porte LIKE 'Pequeno';

-- Atualizar o valor de uma leitura de sensor
UPDATE LeituraSensor SET valor_leitura = 23.0 WHERE idLeitura = 1;

-- Adicionar uma nova coluna de descrição para os sensores
ALTER TABLE Sensor ADD descricao VARCHAR(100);

-- Deletar um sensor
DELETE FROM Sensor WHERE idSensor = 2;

