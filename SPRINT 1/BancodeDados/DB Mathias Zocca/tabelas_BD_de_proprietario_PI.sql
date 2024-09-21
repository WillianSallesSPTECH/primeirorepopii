create database proprietarios;
use proprietarios;


CREATE TABLE Proprietarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100),
    endereco VARCHAR(255)
);

INSERT INTO Proprietarios (nome, telefone, email, endereco) VALUES
('João Silva', '(11) 98765-4321', 'joao@hotmail.com', 'Rua das Flores, 123'),
('Maria Lima', '(21) 99876-5432', 'maria@gmail.com', 'Avenida Brasil, 456'),
('raffu', '(11) 99776-7462', 'raffu@email.com', 'parque savoy, 476'),
('Maria isabelle', '(11) 99746-6832', 'maria7miniguiti@gmail.com', 'astorga, 109');

select * from Proprietarios;