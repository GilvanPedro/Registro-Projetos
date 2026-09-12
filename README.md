# Registro de Projetos

Um blog/portfólio pra centralizar os projetos de Engenharia de Software num
lugar só, em vez de espalhados em dez repositórios diferentes no GitHub. É
um mini-CMS: você cadastra o projeto uma vez pelo painel admin, e ele já
aparece na home com cards, ganha uma página própria com o conteúdo completo,
e leva o visitante direto pro repositório ou pra documentação.

Pensa assim: é o "Medium" da sua carreira de dev, só que rodando na sua
própria máquina e sem ninguém mais postando nele.

> Este projeto foi desenvolvido com o auxílio de inteligência artificial
> (Claude, da Anthropic), que ajudou na arquitetura, no código inicial e
> na documentação.

## Como as peças se encaixam

Duas aplicações rodando lado a lado, cada uma com um trabalho bem definido:

```
portfolio-projeto/
  backend-api/      → Spring Boot (Java 17+) — guarda os dados, não sabe nada de HTML
  frontend-web/     → Next.js (App Router) + Tailwind — monta as páginas e fala com o backend
```

O Java só existe pra persistir e servir dados via REST. O Next.js é quem
busca esses dados no servidor (SSR) e devolve HTML pronto pro navegador —
por isso ele funciona como um **BFF** (Backend-For-Frontend): a "cara" do
site é toda dele, mas a fonte da verdade é o banco SQLite do lado do Java.

Cada projeto cadastrado vira um registro com `title`, `summary` (resumo
curto pros cards), `fullContent` (o artigo completo, em HTML — dá pra
incluir blocos de código), `repoUrl` e `docsUrl`. O SQLite é criado sozinho
na primeira vez que o backend sobe — zero configuração de banco.

### O que existe hoje

- **Home (`/`)** — lista todos os projetos em cards, renderizada via SSR.
- **Página do projeto (`/projeto/[id]`)** — artigo completo, com botões pro
  repositório e pra documentação no rodapé.
- **Painel admin (`/admin`)** — atrás de login simples, criar/editar/apagar
  projetos. Tudo que você cadastra aqui aparece na hora na home.

### Endpoints da API

```
GET    /api/projects        lista tudo
GET    /api/projects/{id}   um projeto específico
POST   /api/projects        cria
PUT    /api/projects/{id}   edita
DELETE /api/projects/{id}   remove
```

## Rodando localmente

Precisa de **dois terminais abertos ao mesmo tempo** — se fechar um, a
metade correspondente do site cai. Funciona igual em Windows e Linux, só
muda o jeito de instalar as ferramentas.

### Ferramentas necessárias

```bash
node -v      # 20.9 ou mais novo
java -version
mvn -version
```

Faltando alguma:

```bash
# Linux (Ubuntu/Debian/Pop!_OS)
sudo apt install -y openjdk-17-jdk maven

# Windows (PowerShell como administrador)
winget install EclipseAdoptium.Temurin.17.JDK
winget install Apache.Maven
```

### 1. Clone e entre na pasta do projeto

```bash
git clone https://github.com/GilvanPedro/Registro-Projetos.git
cd Registro-Projetos/portfolio-projeto
```

### 2. Configure o frontend

```bash
cd frontend-web
cp .env.local.example .env.local      # Windows: Copy-Item .env.local.example .env.local
npm install
```

Abra o `.env.local` e defina o usuário/senha do painel admin — vem com um
valor padrão, mas troque antes de usar de verdade.

### 3. Suba o backend (terminal 1)

```bash
cd backend-api
mvn spring-boot:run
```

Espera aparecer `Started PortfolioApiApplication` — é o sinal de que a API
está de pé em `http://localhost:8080`.

### 4. Suba o frontend (terminal 2)

```bash
cd frontend-web
npm run dev
```

Quando aparecer `Ready`, o site está no ar em `http://localhost:3000`.

### 5. Cadastre o primeiro projeto

Acesse `http://localhost:3000/admin/login`, entre com as credenciais do
`.env.local` e cadastre. Ele aparece na home assim que você salva.

| Terminal | Pasta          | Comando               | Porta |
|----------|----------------|-----------------------|-------|
| 1        | `backend-api`  | `mvn spring-boot:run` | 8080  |
| 2        | `frontend-web` | `npm run dev`         | 3000  |

## Stack

| Camada    | Tecnologia                                              |
|-----------|----------------------------------------------------------|
| Backend   | Java 17+, Spring Boot 3.3, Spring Data JPA, SQLite       |
| Frontend  | TypeScript, Next.js (App Router), Tailwind CSS, React 18 |

## Pontos de atenção

- O CORS já vem liberado no backend para `http://localhost:3000`
  (`application.properties`) — se for expor em outro domínio, ajuste lá.
- O login do `/admin` é propositalmente simples (usuário/senha via `.env`),
  suficiente pra um projeto pessoal de uma pessoa só. Não use assim em
  produção real — troque por hash de senha e uma tabela de usuários antes
  de colocar no ar pra outras pessoas acessarem.
- A página do artigo usa `dangerouslySetInnerHTML` pra renderizar o
  `fullContent`. Como só você alimenta esse conteúdo pelo painel admin, tá
  seguro. Se um dia mais gente puder postar, sanitize antes com algo como
  `sanitize-html` — senão é a porta aberta pra um XSS.
