Portfolio de Projetos — Backend Java + Frontend Next.js

Estrutura

portfolio-projeto/
  backend-api/      -> Spring Boot (Java 17+), API REST, SQLite
  frontend-web/      -> Next.js (App Router) + Tailwind CSS


Passo a passo para rodar

1. Backend (Spring Boot)

cd backend-api
mvn spring-boot:run

A API sobe em http://localhost:8080. O arquivo portfolio.db (SQLite) é criado
sozinho na primeira execução, na raiz de backend-api.

Endpoints disponíveis:
  GET    /api/projects
  GET    /api/projects/{id}
  POST   /api/projects
  PUT    /api/projects/{id}
  DELETE /api/projects/{id}


2. Frontend (Next.js)

Em outro terminal:

cd frontend-web
cp .env.local.example .env.local
npm install
npm run dev

O site sobe em http://localhost:3000.
A área administrativa fica em http://localhost:3000/admin (login com as
credenciais do .env.local).


3. Rodando os dois juntos

Precisa de dois terminais abertos ao mesmo tempo, um em cada pasta, com os
comandos acima. O Next.js (porta 3000) consome a API Java (porta 8080) via
fetch no lib/api.ts.

Notas
- O CORS já está liberado no backend para http://localhost:3000
  (application.properties).
- O login do /admin é propositalmente simples (usuário/senha via .env),
  suficiente para um projeto pessoal. Não use assim em produção real.
