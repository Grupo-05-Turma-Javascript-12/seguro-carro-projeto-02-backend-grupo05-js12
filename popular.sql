INSERT INTO tb_categorias (nome, descricao)
VALUES
('Básico', 'Plano básico com cobertura essencial'),
('Completo', 'Plano completo com cobertura ampliada'),
('Premium', 'Plano premium com assistência e extras');

INSERT INTO tb_usuarios (nome, email, senha, carro, ano)
VALUES
('Ana Souza', 'ana@email.com', '123456', 'HB20', 2012),
('Bruno Lima', 'bruno@email.com', '123456', 'Onix', 2018),
('Carla Silva', 'carla@email.com', '123456', 'Civic', 2009);

INSERT INTO tb_produtos 
(nome, descricao, preco, esta_ativo, categoria_id, usuario_id)
VALUES
('Seguro Básico', 'Cobertura contra roubo e furto', 1200.00, true, 1, 1),
('Seguro Completo', 'Roubo, furto e colisão', 2200.00, true, 2, 2),
('Seguro Premium', 'Completo + assistência 24h', 3200.00, true, 3, 3),
('Seguro Terceiros Essencial', 'Danos materiais e corporais a terceiros (RCF-V)', 900.00, true, 1, 1),
('Seguro Compreensivo Total', 'Cobertura total: colisão, roubo, furto, incêndio e terceiros', 2800.00, true, 2, 2),
('Seguro Assistência 24h', 'Guincho, troca de pneu, pane seca e chaveiro', 1100.00, true, 1, 3),
('Seguro com Carro Reserva', 'Veículo reserva enquanto o carro segurado está em conserto', 1800.00, true, 2, 1),
('Seguro para Carros Antigos', 'Cobertura especial para veículos com mais de 10 anos', 1600.00, true, 1, 2),
('Seguro para Aplicativos', 'Cobertura para motoristas de aplicativo (Uber/99)', 2400.00, true, 2, 3),
('Seguro Viagem Mercosul', 'Cobertura internacional para países do Mercosul', 3500.00, true, 3, 1);