create database petsensores;
use petsensores;

create table petsensores(
SensorID INT AUTO_INCREMENT PRIMARY KEY,
tiposensor varchar(20) check (tiposensor in('Temperatura', 'Proximidade')) NOT NULL,
localizacaosensor VARCHAR(100) NOT NULL,
datainstalacao DATE,
ultimaCalibracaosensor DATE
);

INSERT INTO petsensores (SensorID, tiposensor, localizacaosensor, datainstalacao, ultimaCalibracaosensor) VALUES
(default, 'Temperatura', 'caixa de transporte zona leste', '2024-01-15', '2024-03-01'),
(default, 'Temperatura', 'caixa de transporte zona oeste SP', '2024-01-15', '2024-03-01'),
(default, 'Proximidade', 'bloqueio da porta de van', '2024-02-10', '2024-03-10'),
(default, 'Proximidade', 'bloqueio da porta de van direita', '2024-02-10', '2024-03-10'),
(default, 'Temperatura', 'area da cabine', '2024-03-05', '2024-04-01'),
(default, 'Proximidade', 'caixa de transporte numero 12 zl', '2024-03-15', '2024-04-01'),
(default, 'Temperatura', 'compartimento de armazenamento', '2024-04-01', '2024-05-01');

select * from petsensores;
