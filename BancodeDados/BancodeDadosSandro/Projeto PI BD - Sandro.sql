-- Tabela dos dados do usuarios 
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    data_registro DATETIME  
);


INSERT INTO usuarios (nome, email, senha, telefone, endereco, data_registro)
VALUES 
('João Silva', 'joao.silva@example.com', 'senha123', '123456789', 'Rua das Flores, 123', '2024-09-01 10:00:00'),
('Maria Santos', 'maria.santos@example.com', 'senha456', '987654321', 'Av. Brasil, 456', '2024-09-01 11:00:00'),
('Pedro Souza', 'pedro.souza@example.com', 'senha789', '456789123', 'Rua do Sol, 789', '2024-09-02 09:00:00'),
('Ana Pereira', 'ana.pereira@example.com', 'senha1010', '123987654', 'Rua Nova, 321', '2024-09-02 10:30:00'),
('Carlos Nascimento', 'carlos.nascimento@example.com', 'senha1111', '789456123', 'Av. Central, 654', '2024-09-03 12:15:00'),
('Fernanda Lima', 'fernanda.lima@example.com', 'senha1212', '654123987', 'Praça Verde, 987', '2024-09-03 14:45:00');

-- Tabela com os dados dos pets
CREATE TABLE pets (
    id_pet INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,  
    raca VARCHAR(100),
    idade INT,
    peso DECIMAL(5,2),
    data_registro DATETIME 
);


INSERT INTO pets (nome, especie, raca, idade, peso, id_usuario, data_registro)
VALUES 
('Rex', 'Cachorro', 'Golden Retriever', 3, 25.50, 1, '2024-09-05 08:00:00'),  
('Mingau', 'Gato', 'Siamês', 2, 4.20, 2, '2024-09-05 09:00:00'),               
('Toby', 'Cachorro', 'Beagle', 4, 12.00, 3, '2024-09-06 07:30:00'),            
('Bella', 'Cachorro', 'Poodle', 1, 8.50, 1, '2024-09-06 08:45:00'),            
('Luna', 'Gato', 'Persa', 5, 5.00, 2, '2024-09-06 10:00:00'),                  
('Max', 'Cachorro', 'Labrador', 3, 22.00, 4, '2024-09-07 11:30:00'),           
('Simba', 'Gato', 'Bengal', 2, 4.50, 5, '2024-09-07 12:00:00'),                
('Fifi', 'Cachorro', 'Chihuahua', 1, 3.00, 6, '2024-09-08 14:15:00');

-- Tabela das vans e dos sensores
CREATE TABLE vans_sensores_pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pet INT,
    sensor_temperatura DECIMAL(5,2),
    dentro_caixa VARCHAR(3) NOT NULL, 
    data_viagem DATETIME,
    CHECK (dentro_caixa IN ('Sim', 'Não')) 
);


INSERT INTO vans_sensores_pets (id_pet, sensor_temperatura, dentro_caixa, data_viagem)
VALUES 
(1, 22.5, 'Sim', '2024-09-10 09:00:00'),  -- Rex
(2, 24.0, 'Não', '2024-09-10 10:00:00'),  -- Mingau
(3, 21.5, 'Sim', '2024-09-10 11:00:00'),  -- Toby
(4, 22.8, 'Sim', '2024-09-10 12:00:00'),  -- Bella
(5, 23.2, 'Não', '2024-09-11 09:00:00'),  -- Luna
(6, 21.9, 'Sim', '2024-09-11 10:30:00'),  -- Max
(7, 24.1, 'Sim', '2024-09-12 11:45:00'),  -- Simba
(8, 23.0, 'Não', '2024-09-12 13:00:00');  -- Fifi
