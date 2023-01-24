# <p align = "center"> DogHotel-backend </p>


<div align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
</div>


##  :clipboard: Descrição

Backend do DogHotel, um projeto pessoal feito apenas para fins didáticos de um site de hospedagens de cães, onde é possível se cadastrar, adcionar seus cãezinhos e procurar por tutores para fazer uma reserva, podendo até então se cadastrar como um tutor e aceitar reservas de outros usuarios.

*Originalmente a aplicação estava hospedada no Heroku, que deixou de funcionar gratuitamente, portanto, é possível rodar apenas localmente*

Repositório do frontend: https://github.com/andregugelmin/doghotel-front
***

## :computer: Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- PostgreSQL com Prisma

***

### :warning: É necessário ter instalado PostgreSQL e PrismaORM


***

## 🚧: Como rodar localmente

1. Clone este repositório
2. Instale as dependências
```bash
npm i
```
3. Crie um arquivo .env e o configure com
```bash
DATABASE_URL = postgres://{usuario postgres}:{senha postgres}@localhost:{porta}/{nome banco de dados}
NODE_ENV= dev
JWT_SECRET = {alguma senha para o jwt}
```
4.Gere o banco de dados com os comandos do prisma
```bash
npx prisma migrate dev

npx prisma generate
```
5. Rode com
```bash
npm start ou npm run dev 
```

***

