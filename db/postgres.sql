CREATE DATABASE likeme;

\c likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);

\dt posts;

INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('Jack Sparrow', 'https://www.latercera.com/resizer/byOqyX3DbjzewqOo1L5De2xNDjM=/arc-anglerfish-arc2-prod-copesa/public/NI6XTALQUFFVXGZ6TXKJBB5B3Q.jpg', 'Sigue tu propia brújula #like #f4f', 0);
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('Cristiano Ronaldo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/480px-Cristiano_Ronaldo_2018.jpg', 'Futbolista portugués, Juega como extremo izquierdo o delantero', 0);
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('Kendo Kaponi', 'https://yt3.googleusercontent.com/ytc/AGIKgqP4a8FDgNbk3JeFUj6jrJuVofMJTjbdlfusjMG_Yw=s900-c-k-c0x00ffffff-no-rj', ' Rapero, cantante y compositor del género de rap y reguetón', 0);
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('Tony Montana', 'https://www.lavozdegalicia.es/default/2013/02/27/0012_201302G27P34F1jpg/Foto/G27P34F1.jpg', 'Tony Montana, personaje de ficción y protagonista de Scarface', 0);
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('Dominic Toretto', 'https://elcomercio.pe/resizer/KzChmYDnYa5P9_SxCPGQYBOkBVk=/1200x900/smart/filters:format(jpeg):quality(75)/dvgnzpfv30f28.cloudfront.net/06-14-2020/t_ada45e8190314c0794887d0fa4586c2f_name_MAG_DOM.jpg', ' El protagonista principal de Fast & Furious', 0);

SELECT * FROM posts; 
-- para ver lo insertado en la tabla