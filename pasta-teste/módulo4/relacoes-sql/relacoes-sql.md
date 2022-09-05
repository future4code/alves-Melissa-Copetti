``` 

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		avaliacao FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

-- 1-a) Chave estrangeira tem a função de trazer um dado de outra tabela para relacionar com os dados da tabela atual.
-- 1-b) 
INSERT INTO Rating VALUES
('A','Uma obra prima da década de 90 que continua firme e forte até hoje
Que filme incrível!!!
Poucas palavras pois não cabem todas', 9.8,'005'),
('B','A Origem é, acima de tudo, um filme de diretor. Esta afirmação pode parecer estranha diante da grandiosidade do exibido, mas certos detalhes a confirmam. Um deles é a complexidade do roteiro, envolvendo o mundo dos sonhos em diversos níveis, e o ritmo acelerado com o qual as informações pouco a pouco são transmitidas.', 8,'006'),
('C','No final das contas, é um filme nacional interessante, bem escrito e que deveria servir de modelo para as produções futuras. Talvez a melhor produção brasileira do ano e uma das melhores dos últimos tempos. Merece ser conferida!',9.5, '007'),
('D','Ícone da cultura pop, personagens icônicos e memoráveis, não importa quantas vezes eu assista, nunca perde a graça, os memes, os bordões, clássico filme que toda adolescente deve assistir.',5.5, '008'),
('E','Muito bom! Excelente! Uma releitura do eterno clássico "The Strange Case of Dr Jekyll and Mr. Hyde" de Robert Louis Stevenson para o universo adolescente moderno.',3.9, '009'),
('F','Clássico! Um filme digno de uma rainha. Xuxa rainha dos baixinhos e da bilheteria brasileira.', 8, '004'),
('G','Considerando que, em pleno 2017, ainda é quase um tabu se falar em sexualidade feminina sem descambar para clichês, a contemporaneidade precisa mesmo do reforço dessa mulher dos anos 1940 para levar o tema para o cinema de massas', 6.5, '003');

-- 1-c) 
INSERT INTO Rating VALUE
('H','O filme é bem fraquinho e bem diferente da Cinderela tradicional, o que valeu a pena foi FADO MADRINHO, e francamente, podia ter aparecido mais nas cenas para dar mais graça e menos tédio.', 2.5, '010');

SELECT * FROM Rating;
SELECT * FROM Movies;

-- 1-c)0	26	14:50:48	INSERT INTO Rating VALUE ('H','O filme é bem fraquinho e bem diferente da Cinderela tradicional, o que valeu a pena foi FADO MADRINHO, e francamente, podia ter aparecido mais nas cenas para dar mais graça e menos tédio.', 2.5, '010')	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-melissa-copetti`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.171 sec
-- Ele não identifica id pra colocar comentário.

SELECT * FROM `alves-melissa-copetti`.Movies;

INSERT INTO Movies VALUES
('005', 'Toy Story', 'O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Com ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela. É o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos.', '1995-12-22', 6, '1996-05-26'),
('006', 'A Origem', 'Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.', '2010-08-06', 9.5, '2018-08-15'),
('007','Cidade de Deus', 'Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.', '2002-08-30', 8.7, '2012-12-05'),
('008','Meninas Malvadas', 'A adolescente Cady Heron foi educada na África pelos seus pais cientistas. Quando sua família se muda para o subúrbio, nos Estados Unidos, Cady começa a frequentar a escola pública e recebe uma rápida introdução às leis de popularidade que dividem seus colegas. Sem querer, ela acaba no meio de um grupo de elite de estudantes apelidadas "as poderosas".', '2004-07-09', 5, '2005-02-01'),
('009', 'Não! Não Olhe!', '"O que é um mau milagre?" O vencedor de um Óscar, Jordan Peele causou disrupção e redefiniu o género do terror moderno com "Foge" e "Nós". Agora, Peele reimagina o filme de verão com um novo pesadelo pop: o épico expansivo de terror "Nope".O filme volta a reunir Peele e o vencedor de um Óscar Daniel Kaluuya ("Foge", "Judas e o Messias Negro"), juntando Keke Palmer ("Ousadas e Golpistas") e Steven Yeun ("Minari", "Okja"), ator já nomeado para um Óscar , no papel de residentes de uma localidade solitária no interior da Califórnia, que testemunham uma espantosa e arrepiante descoberta.', '2022-08-25', 7.5, '2022-12-25');

INSERT INTO Movies VALUES
('010','Cinderela', 'Na nova e ousada abordagem musical da história tradicional que o público conhece, Cinderela (Camila Cabello) é uma jovem ambiciosa cujos sonhos são maiores do que o seu mundo permite. Entretanto, com a ajuda de seu Fado Madrinho (Billy Porter) ela é capaz de perseverar e realizar seus sonhos.', '2021-09-03', '2022-02-20'),
('011','A Lagoa Azul', 'Depois de um naufrágio, duas crianças e o cozinheiro de um navio vão parar em uma ilha deserta do Pacífico. O cozinheiro morre, deixando o menino Richard e a menina Emmeline sozinhos. Isolados do mundo, eles crescem e descobrem o amor.', '1980-06-05', '1990-05-06');


-- 1-d)
ALTER TABLE Movies DROP COLUMN avaliacao;

-- 1-e)
 DELETE FROM Movies
 WHERE id = '007';
 -- 0	28	14:59:46	DELETE FROM MoviesWHERE id = '007'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-melissa-copetti`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.172 sec


 -- 2-a) A tabela faz uma lista entre os filmes e os atores, importando os ids das tabelas de filmes e atores.

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- 2- b)
INSERT INTO MovieCast VALUES
('003','1'),
('004','6'),
('007','6'),
('006','3'),
('008','3'),
('009','3'),
('008','4'),
('007','5'),
('009','5');

-- 2-c) 
INSERT INTO MovieCast VALUE
('010','20');
-- 2-c) 0	58	15:58:04	INSERT INTO MovieCast VALUE Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'SELECT * FROM MovieCast' at line 4	0.172 sec
-- não é possível fazer essa relação;


SELECT * FROM MovieCast;

SELECT * FROM `alves-melissa-copetti`.Actor;

INSERT INTO Actor VALUES
('1', 'Sônia Braga', 10000, '1950-06-08','female', 'morango','NotDirector'),
('2', 'Alexandre Lippiani', 5000, '1964-09-11','male', 'limão','NotDirector'),
('3', 'Flávia Saddy', 8500, '1978-12-12','female', 'abacate','NotDirector'),
('4', 'Gustavo Pereira', 50000, '1989-11-17','male', 'baunilha','NotDirector'),
('5', 'Nina Carvalho', 2500, '19-06-08','female', 'morango','NotDirector'),
('6', 'Júlia Lemmertz', 134000, '1963-03-18','female', 'limão','NotDirector');


-- 2-d) 0	60	16:02:05	DELETE FROM Actor WHERE id= '5'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-melissa-copetti`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.172 sec
-- não é possível deletar porque está sendo usado em outra tabela.
DELETE FROM Actor
 WHERE id= '5'; 

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- 3-a) é pra fazer a relação da lista com os ids que combinam entre uma tabela e outra
-- 3-b)

SELECT Movies.id, name, rate FROM Movies
INNER JOIN Rating 
ON Movies.id = Rating.movie_id;

-- 4-a)
SELECT m.id as movie_id, m.name, r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;

SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id); ```