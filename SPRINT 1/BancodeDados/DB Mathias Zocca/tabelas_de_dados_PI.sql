create database logsensores;
use logsensores;

CREATE TABLE LogsSensores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    transporte_id INT,
    tipo_sensor VARCHAR(50) NOT NULL,
    valor FLOAT NOT NULL,
    data_hora DATETIME NOT NULL
    );
    
    INSERT INTO LogsSensores (transporte_id, tipo_sensor, valor, data_hora) VALUES
(1, 'Temperatura', 22.0, '2024-09-01 08:15:00'),
(1, 'Temperatura', 23.0, '2024-09-01 09:15:00'),
(2, 'Temperatura', 20.0, '2024-09-02 09:15:00'),
(2, 'Temperatura', 21.5, '2024-09-02 10:15:00');

select * from LogsSensores;