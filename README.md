# Portfólio de Projetos — Backend Java + Frontend Next.js

Site blog/portfólio pra documentar projetos de Engenharia de Software.
Duas aplicações separadas conversando via API REST: o Spring Boot cuida
dos dados, o Next.js cuida da interface.

> Este projeto foi desenvolvido com o auxílio de inteligência artificial
> (Claude, da Anthropic), que ajudou na arquitetura, no código inicial e
> na documentação.

## Arquitetura

```
portfolio-projeto/
  backend-api/      -> Spring Boot (Java 17+), Spring Data JPA, SQLite
  frontend-web/      -> Next.js (App Router) + Tailwind CSS
```

- **Backend**: expõe o CRUD de projetos via API REST. Entidade `Project`
  com `id`, `title`, `summary`, `fullContent` (HTML/Rich Text), `repoUrl`,
  `docsUrl` e `createdAt`. Banco SQLite, criado sozinho na primeira execução.
- **Frontend**: age como BFF. Renderiza a home e a página de artigo via
  SSR consumindo a API Java, e tem uma área `/admin` (login simples)
  pra gerenciar os projetos.

### Endpoints da API

```
GET    /api/projects
GET    /api/projects/{id}
POST   /api/projects
PUT    /api/projects/{id}
DELETE /api/projects/{id}
```

## Como rodar o projeto (Windows e Linux)

O backend e o frontend rodam **ao mesmo tempo**, em dois terminais
diferentes — se fechar um dos dois, o site para de funcionar.

### 1. Extraia o projeto

**Linux** — use o terminal, não o gerenciador de arquivos gráfico, pra
garantir que o `.env.local.example` venha junto (ele começa com ponto e
alguns programas gráficos pulam esse tipo de arquivo):

```bash
unzip portfolio-projeto.zip
cd portfolio-projeto
```

**Windows** — extraia normalmente com o botão direito → "Extrair tudo",
depois abra o PowerShell dentro da pasta extraída:

```powershell
cd portfolio-projeto
```

### 2. Confira as ferramentas necessárias

Mesmo comando nos dois sistemas:

```bash
node -v      # precisa ser 20.9 ou mais novo
java -version
mvn -version
```

Se faltar alguma:

**Linux (Ubuntu/Debian/Pop!_OS):**
```bash
sudo apt install -y openjdk-17-jdk maven
```

**Windows (PowerShell como administrador):**
```powershell
winget install EclipseAdoptium.Temurin.17.JDK
winget install Apache.Maven
```

### 3. Configure o frontend

**Linux:**
```bash
cd frontend-web
cp .env.local.example .env.local
npm install
```

**Windows (PowerShell):**
```powershell
cd frontend-web
Copy-Item .env.local.example .env.local
npm install
```

### 4. Suba o backend Java

Abra um **terminal novo** (deixe esse rodando o tempo todo). Mesmo comando
nos dois sistemas:

```bash
cd backend-api
mvn spring-boot:run
```

Espere aparecer `Started PortfolioApiApplication` — isso confirma que a API
está de pé em `http://localhost:8080`.

### 5. Suba o frontend Next.js

Em **outro terminal** (o segundo, além do backend):

```bash
cd frontend-web
npm run dev
```

Quando aparecer `Ready`, o site está no ar em `http://localhost:3000`.

### 6. Cadastre seu primeiro projeto

Abra o navegador em:

```
http://localhost:3000/admin/login
```

Entre com o usuário e senha que você colocou no `.env.local`. De lá dá pra
criar, editar e apagar projetos — eles aparecem automaticamente na home.

## Resumo rápido

| Terminal | Pasta          | Comando               | Porta |
|----------|----------------|------------------------|-------|
| 1        | `backend-api`  | `mvn spring-boot:run` | 8080  |
| 2        | `frontend-web` | `npm run dev`         | 3000  |

## Diferenças entre os sistemas

- **Linux**: use `sudo apt install` pra instalar pacotes, terminal padrão
  (bash/zsh).
- **Windows**: use `winget install` (ou baixe os instaladores em
  nodejs.org, adoptium.net e maven.apache.org), terminal PowerShell.
- Os comandos de `cd`, `npm` e `mvn` funcionam igual nos dois — só o jeito
  de instalar as ferramentas e copiar arquivos muda.

## Notas

- O CORS já está liberado no backend para `http://localhost:3000`
  (`application.properties`).
- O login do `/admin` é propositalmente simples (usuário/senha via
  `.env`), suficiente pra um projeto pessoal. Não use assim em produção
  real — troque por hash de senha e uma tabela de usuários.
- `dangerouslySetInnerHTML` na página do artigo confia no conteúdo salvo
  no banco. Como só você alimenta o conteúdo pelo painel admin, tá seguro;
  se um dia outras pessoas puderem postar, sanitize antes com algo como
  `sanitize-html`.
