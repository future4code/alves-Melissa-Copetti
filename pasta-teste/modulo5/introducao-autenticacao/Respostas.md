## Exercício 1:

a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

O uso de números só é necessário se for fazer cálculo ou quantificar, o id deve ser aleatório e não há razão para ser no formato de número, ele não muda.

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

criada a função na pasta services.

## Exercício 2:
a) *Explique o código acima com as suas palavras.*
Foi criada uma variável para inserir os dados de usuário, tipada com User. Foi feita a connection com o banco de dados, depois foi criado uma classe de cruar usuário e inserir na tabela. 

b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*

## Exercício 3

a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*

para dizer que a chave é uma string.

b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*