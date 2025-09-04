CREATE DATABASE farmacia;

\c farmacia

CREATE TABLE remedios (
    id SERIAL PRIMARY KEY,
    nome_remedio VARCHAR(70) NOT NULL,
    efeito_remedio VARCHAR(150) NOT NULL,
    photo TEXT,
    modo_preparo TEXT NOT NULL,
    contraindicacoes TEXT NOT NULL,
    categoria_id INT REFERENCES categorias(id) NOT NULL
);

CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL
)

INSERT INTO categorias (nome_categoria) VALUES
('Relaxante'),
('Digestivo'),
('Dor no Corpo'),
('Insônia'),
('Gripe'),
('Dor de Cabeça'),
('Cólicas'),
('Queimação');

SELECT * FROM remedios;


INSERT INTO remedios (nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id) VALUES
('Chá de Camomila', 'Alívio do estresse e insônia', 'https://www.infoescola.com/wp-content/uploads/2008/06/ch%C3%A1-de-camomila_276983156.jpg', 'Ferver 1 colher de chá de flores secas em 250ml de água por 5 minutos. Coar e beber.', 'Pode causar alergias em pessoas sensíveis a plantas da família Asteraceae.', 1),
('Chá de Gengibre', 'Alívio de náuseas e problemas digestivos', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...', 'Ferver 1 pedaço de gengibre fresco em 250ml de água por 10 minutos. Coar e beber.', 'Pode aumentar o risco de sangramento em pessoas que tomam anticoagulantes.', 2),
('Chá de Hortelã', 'Alívio de dores de cabeça e problemas digestivos', 'https://image.tuasaude.com/media/article/jf/xr/beneficios-do-cha-de-hortela_57292.jpg?width=686&height=487', 'Ferver 1 colher de chá de folhas secas em 250ml de água por 5 minutos. Coar e beber.', 'Pode causar azia em pessoas com refluxo gastroesofágico.', 2),
('Chá de Erva-doce', 'Alívio de cólicas e problemas digestivos', 'https://s2-ge.glbimg.com/9Ks3FR8cYu6_N7G6nmdPdpv6p-E=/0x0:1256x835/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/g/7/IoC0BDTUAqW53j667w6A/istock-1286035860.jpg', 'Ferver 1 colher de chá de sementes em 250ml de água por 10 minutos. Coar e beber.', 'Pode causar reações alérgicas em pessoas sensíveis a plantas da família Apiaceae.', 2),
('Chá de Valeriana', 'Alívio do estresse e insônia', 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/10/18/2172484-cha-de-valeriana.jpg', 'Ferver 1 colher de chá da raiz seca em 250ml de água por 10 minutos. Coar e beber.', 'Pode causar sonolência excessiva e interagir com sedativos.', 1),
('Chá de Alecrim', 'Ajuda a melhorar a memória e aliviar dores musculares', 'https://totalpass.com/wp-content/uploads/2024/11/cha-de-alecrim.jpg', 'Ferver 1 colher de chá de folhas secas em 250ml de água por 5 minutos. Coar e beber.', 'Evitar em casos de gravidez ou hipertensão.', 3),
('Chá de Capim-limão', 'Ajuda a aliviar ansiedade e insônia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1D6mQgeuAWaPdpNyzgOlezeKWd6tFAS4lg&s', 'Ferver 1 colher de sopa de folhas frescas em 250ml de água por 10 minutos. Coar e beber.', 'Pode causar sonolência em excesso.', 4),
('Chá de Carqueja', 'Ajuda na digestão e no controle da glicose', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizcss_i1_jvyiT9Nfwg3OuStGkhTFdZIlmQ&s', 'Ferver 1 colher de sopa de folhas secas em 250ml de água por 5 minutos. Coar e beber.', 'Contraindicado para gestantes e lactantes.', 2),
('Chá de Guaco', 'Alívio de sintomas de gripe e tosse', 'https://image.tuasaude.com/media/article/bd/bd/guaco_18703.jpg?width=686&height=487', 'Ferver 1 colher de sopa de folhas frescas em 250ml de água por 10 minutos. Coar e beber.', 'Evitar em casos de problemas no fígado.', 5),
('Chá de Sálvia', 'Ajuda a aliviar sintomas de menopausa e dores de cabeça', 'https://belaflorplantas.com.br/wp-content/uploads/2023/05/IMG_5669-scaled.jpg', 'Ferver 1 colher de chá de folhas secas em 250ml de água por 5 minutos. Coar e beber.', 'Contraindicado para gestantes e lactantes.', 6),
('Chá de Anis-estrelado', 'Ajuda a aliviar cólicas e gases', 'https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/04/Anis-Estrelado_1744049897300.jpg', 'Ferver 1 colher de chá de anis-estrelado em 250ml de água por 5 minutos. Coar e beber.', 'Evitar em casos de alergia ao anis.', 7),
('Chá de Cúrcuma', 'Ajuda a reduzir inflamações e melhorar a digestão', 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/curcuma.jpg?w=1200&h=900&crop=1', 'Ferver 1 colher de chá de cúrcuma em pó em 250ml de água por 5 minutos. Coar e beber.', 'Evitar em casos de cálculos biliares.', 3),
('Chá de Malva', 'Ajuda a aliviar dores de garganta e inflamações', 'https://www.picturethisai.com/wiki-image/1080/153405511616692253.jpeg', 'Ferver 1 colher de sopa de folhas secas em 250ml de água por 10 minutos. Coar e beber.', 'Evitar em casos de alergia à planta.', 5),
('Chá de Espinheira-santa', 'Ajuda a aliviar gastrite e azia', 'https://s2-ge.glbimg.com/j-kaDuJ8NurSn-KZLEnWSTqDl8o=/0x0:1600x740/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/d/W/lYqOJUSIaHQs4XwYbMYg/espinheira-santa.jpg', 'Ferver 1 colher de sopa de folhas secas em 250ml de água por 10 minutos. Coar e beber.', 'Contraindicado para gestantes e lactantes.', 8),
('Chá de Alfazema', 'Ajuda a aliviar ansiedade e insônia', 'https://www.oficinadeervas.com.br/images/produtos/20190704_175848_alfazema.jpg', 'Ferver 1 colher de chá de flores secas em 250ml de água por 5 minutos. Coar e beber.', 'Pode causar sonolência em excesso.', 4);