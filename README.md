# Portfólio Pessoal - Projeto Fullstack

Este é um projeto de portfólio pessoal fullstack, estruturado com uma API robusta no backend e uma interface moderna e rápida no frontend.

## Tecnologias Utilizadas

*   **Backend (`/backend-api`):** Java, Spring Boot, Maven.
*   **Frontend (`/frontend-web`):** Next.js, React, TypeScript, TailwindCSS.

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   [Java JDK](https://www.oracle.com/java/technologies/downloads/) (versão 17 ou superior recomendada)
*   [Maven](https://maven.apache.org/) (para gerenciar dependências do backend)
*   [Node.js](https://nodejs.org/) (versão 18 ou superior)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciadores de pacote do Node)

---

# Como rodar o projeto (Windows e Linux)

O projeto tem duas partes separadas: o backend Java e o frontend Next.js.
Elas precisam rodar **ao mesmo tempo**, em dois terminais diferentes — se
fechar um dos dois, o site para de funcionar.

## 1. Extraia o projeto

**Linux** — use o terminal, não o gerenciador de arquivos gráfico, pra
garantir que o `.env.local.example` venha junto (ele começa com ponto e
alguns programas gráficos pulam esse tipo de arquivo):

```bash
unzip portfolio-projeto.zip
cd portfolio-projeto
```

**Windows** — extraia normalmente com o botão direito → "Extrair tudo",
depois abra o PowerShell dentro da pasta extraída (ou `cd` até ela):

```powershell
cd portfolio-projeto
```

## 2. Confira as ferramentas necessárias

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

## 3. Configure o frontend

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

## 4. Suba o backend Java

Abra um **terminal novo** (deixe esse rodando o tempo todo). Mesmo comando
nos dois sistemas:

```bash
cd backend-api
mvn spring-boot:run
```

Espere aparecer `Started PortfolioApiApplication` — isso confirma que a API
está de pé em `http://localhost:8080`.

## 5. Suba o frontend Next.js

Em **outro terminal** (o segundo, além do backend):

```bash
cd frontend-web
npm run dev
```

Quando aparecer `Ready`, o site está no ar em `http://localhost:3000`.

## 6. Cadastre seu primeiro projeto

Abra o navegador em:

```
http://localhost:3000/admin/login
```

Entre com o usuário e senha que você colocou no `.env.local`. De lá dá pra
criar, editar e apagar projetos — eles aparecem automaticamente na home.

## Resumo rápido

| Terminal | Pasta          | Comando               | Porta |
|----------|----------------|-----------------------|-------|
| 1        | `backend-api`  | `mvn spring-boot:run` | 8080  |
| 2        | `frontend-web` | `npm run dev`         | 3000  |

## Diferenças entre os sistemas

- **Linux**: use `sudo apt install` pra instalar pacotes, terminal padrão
  (bash/zsh).
- **Windows**: use `winget install` (ou baixe os instaladores em
  nodejs.org, adoptium.net e maven.apache.org), terminal PowerShell.
- Os comandos de `cd`, `npm` e `mvn` funcionam igual nos dois — só o jeito
  de instalar as ferramentas e copiar arquivos muda.
