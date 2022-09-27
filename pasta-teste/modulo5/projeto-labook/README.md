# Projeto Labook

# Inicie o exercício por aqui

- Passo 1: Crie uma branch a partir da branch master para trabalhar no projeto da semana. O nome da branch de hoje deve ser: projeto-labook
- Passo 2: Crie a pasta módulo 5 e dentro dela crie uma pasta chamada projeto-labook para trabalhar no projeto da semana

# Enunciado

Surgiu mais um freelance essa semana!

Uma jovem empreendedora teve uma ideia revolucionária que parece estar dando certo, mas está precisando de uma força para deixar o backend redondo. Ela já tem um time cuidando do Frontend e contratou você para implementar o Backend!

O Labook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. As pessoas poderão criar e curtir publicações.

# Template

Caso prefira criar seu projeto do zero, sinta-se à vontade!

Se escolher utilizar o template, lembre-se de preencher os valores das variáveis de ambiente no arquivo **.env** e também rodar os scripts `npm install` e `npm run migrations`

[template-projeto-labook.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a8e0355-f039-4778-be77-c49490d7d574/template-projeto-labook.zip)

# Entidades (typescript)

## 1) User (usuário)

- id em formato string e gerado pela própria aplicação
- name em formato string
- email em formato string
- password: senha hasheada em formato string
- role: enum “NORMAL” ou “ADMIN”

## 2) Post (publicação)

- id em formato string e gerado pela própria aplicação
- content em formato string representando o conteúdo em texto do post
- user_id em formato string e representando o id de quem criou o post
- likes em formato number iniciando em 0

# Tabelas (mysql)

## 1) Labook_Users

- id: VARCHAR(255) e chave primária
- name: VARCHAR(255) e não-nulo
- email: VARCHAR(255), não-nulo e único
- password: VARCHAR(255) e não-nulo
- role: ENUM “NORMAL” ou “ADMIN” com padrão “NORMAL” não-nulo

## 2) Labook_Posts

- id: VARCHAR(255) e chave primária
- content: VARCHAR(255) e não-nulo
- user_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users

## 3) Labook_Likes

- id: VARCHAR(255) e chave primária
- post_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Posts
- user_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users

# Funcionalidades do Projeto

## Exercício 1

Crie um endpoint chamado de signup para cadastrar novos usuários. Ele deve receber o name, email e password do novo usuário. Em sucesso, deve ser retornada uma mensagem e também um token de acesso que guarda o id e a role da pessoa.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- name, email e password devem ser fornecidos e serem do tipo string
- name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres
- email deve ter um formato válido e único, não podendo repetir no banco de dados

## Exercício 2

Crie um endpoint chamado de login para logar de usuários já cadastrados. Ele deve receber o email e o password da pessoa, e em caso de sucesso retornar a mensagem e o token de acesso.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- email e password devem ser fornecidos e serem do tipo string
- password deve possuir ao menos 6 caracteres
- email deve ter um formato válido
- O usuário com o e-mail fornecido deve existir no sistema

## Exercício 3

Crie um endpoint protegido que cria um post. Caso tentem acessá-lo sem token deve ser retornada uma mensagem de erro.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- content deve possuir no mínimo 1 caractere

## Exercício 4

Crie um endpoint protegido que retorna todos os posts. Caso tentem acessá-lo sem token deve ser retornada uma mensagem de erro.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- dentre as informações dos posts, deve existir também o número de likes de cada um

## Exercício 5

Crie um endpoint protegido que deleta um post. Caso tentem acessá-lo sem token deve ser retornada uma mensagem de erro. Admins podem deletar qualquer post enquanto contas normais só podem deletar seus próprios posts.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- id do post a ser deletado deve existir no sistema

## Exercício 6

Crie um endpoint protegido que dá like em um post. Uma mesma pessoa não pode dar mais de um like a um post.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- id do post que ganhará o like deve existir no sistema
- se o post já estiver com o like da pessoa é retornado um erro

## Exercício 7

Crie um endpoint protegido que remove o like de um post.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- id do post que ganhará o like deve existir no sistema
- se o post não estiver com o like da pessoa é retornado um erro