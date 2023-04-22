
# Talker Manager

Aplicação de palestrantes (talkers), na qual é possível cadastrar, listar, pesquisar, editar e excluir palestrantes. A API possui o conjunto de operaçoes CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e possui alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.

## Funcionalidades

-Endpoints que irão cadastrar, listar, pesquisar, editar e excluir palestrantes

## Tecnologias utilizadas
- APIs REST
- Express
- C.R.U.D
- Middlewares
- Node.js

## Instalação do projeto localmente

Para instalar e executar o projeto localmente, você precisa ter o Docker instalado na sua máquina. Depois, siga os seguintes passos:

1. Clone o repositório do GitHub:

```bash
git@github.com:brenolg/Mysql-One-For-All.git
```
Rode os serviços node e db:
```bash
docker-compose up -d
```
Rode o container one_for_all via CLI ou abri-lo no VS Code
```bash
docker exec -it talker_manager bash
```
Instale as dependências usando
```bash
npm install
```
- Execute a aplicação com npm start ou npm run dev
- Execute as rotas como preferir

## Requisitos do projeto

1. Crie o endpoint GET /talker
2. Crie o endpoint GET /talker/:id
3. Crie o endpoint POST /login
4. Adicione as validações para o endpoint /login
5. Crie o endpoint POST /talker
6. Crie o endpoint PUT /talker/:id
7. Crie o endpoint DELETE /talker/:id
8. Crie o endpoint GET /talker/search?q=searchTerm

## Agradecimentos
Este projeto foi desenvolvido como parte do curso de Desenvolvimento de Software da Trybe. Agradeço à Trybe pela oportunidade de aprender e praticar SQL e outras tecnologias.
