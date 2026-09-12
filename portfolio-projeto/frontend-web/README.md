# frontend-web

Aplicação Next.js que é a cara do site inteiro. Busca os dados no
`backend-api` e monta as páginas — home, artigo do projeto e painel admin.
Pensa nele como o garçom: o Java é a cozinha que guarda os ingredientes, o
Next.js é quem monta o prato e serve na mesa do visitante.

## O que tem dentro

```
app/
  layout.tsx              → layout raiz, título/descrição da página (SEO básico)
  page.tsx                → home — lista os projetos em cards
  projeto/[id]/page.tsx   → página de artigo de um projeto específico
  admin/
    login/page.tsx        → tela de login
    page.tsx               → painel protegido, decide se deixa entrar
    AdminPanel.tsx          → o CRUD em si (formulário + lista + editar/apagar)
components/
  ProjectCard.tsx          → o card individual que aparece na home
  CtaButtons.tsx           → botões "Ver no GitHub" / "Ver documentação"
lib/
  api.ts                    → toda a comunicação com o backend Java
```

### `lib/api.ts` — a ponte com o Java

Todo o site fala com o backend só por aqui — nenhum outro arquivo faz
`fetch` direto na API. Isso significa uma coisa boa: se um dia a URL da API
mudar, ou o formato de resposta mudar, você mexe num lugar só.

```ts
getProjects()             // GET  /api/projects
getProjectById(id)         // GET  /api/projects/{id}
createProject(data)        // POST /api/projects
updateProject(id, data)    // PUT  /api/projects/{id}
deleteProject(id)          // DELETE /api/projects/{id}
```

As buscas usam `cache: "no-store"` de propósito — sem isso, o Next.js
tenderia a cachear a resposta, e um projeto novo cadastrado no admin não
apareceria na home sem um redeploy. Custa um pouco de performance, ganha
sempre mostrar dado atualizado.

### `app/page.tsx` — a home

Roda no servidor (Server Component, sem `"use client"`), busca os projetos
via `getProjects()` e renderiza um grid de `ProjectCard`. Isso é SSR de
verdade: o HTML que chega no navegador já vem com os projetos dentro, não
precisa esperar um JavaScript rodar no cliente pra aparecer conteúdo — bom
pra SEO e pra quem tem internet mais lenta.

### `app/projeto/[id]/page.tsx` — a página do artigo

Busca um projeto específico pelo id da URL e renderiza `fullContent` — que
vem como HTML puro do banco — via `dangerouslySetInnerHTML`. É o jeito do
React de dizer "confia em mim, injeta esse HTML direto". Funciona bem aqui
porque só você mesmo escreve esse conteúdo pelo painel admin; se um dia
outras pessoas pudessem postar, precisaria sanitizar antes (com
`sanitize-html`, por exemplo) pra não abrir brecha de XSS.

### Área `/admin` — como a proteção funciona

Três arquivos trabalhando juntos:

1. **`login/page.tsx`** — formulário simples que compara usuário/senha
   digitados com as variáveis `ADMIN_USER`/`ADMIN_PASSWORD` do `.env.local`.
   Se bater, seta um cookie `admin_session` (httpOnly, válido por 8h) e
   redireciona pro painel.
2. **`admin/page.tsx`** — antes de mostrar qualquer coisa, checa se o
   cookie `admin_session` existe. Se não existir, manda a pessoa de volta
   pro login. É essa checagem que protege a rota — sem ela, qualquer um
   digitando `/admin` na URL entraria direto.
3. **`AdminPanel.tsx`** — client component (`"use client"`, roda no
   navegador) com o formulário de criar/editar e a listinha de projetos
   com botões de editar/remover. É o único lugar do frontend que faz
   `POST`, `PUT` e `DELETE` — a home e a página de artigo só leem dado,
   nunca escrevem.

Vale reforçar: esse login é propositalmente simples — serve bem pra um
projeto pessoal de uma pessoa só gerenciando o próprio conteúdo. Não é o
tipo de auth que você quer numa aplicação com vários usuários de verdade.

### Componentes

- **`ProjectCard.tsx`** — recebe um projeto e desenha o card clicável da
  home (título + resumo + link pra página do artigo).
- **`CtaButtons.tsx`** — os dois botões no rodapé do artigo. Só aparece o
  que tiver URL preenchida — se o projeto não tem `docsUrl`, o botão de
  documentação simplesmente não é renderizado.

## Variáveis de ambiente (`.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
ADMIN_USER=admin
ADMIN_PASSWORD=troque-esta-senha
```

`NEXT_PUBLIC_API_URL` tem o prefixo `NEXT_PUBLIC_` de propósito — é o que
faz essa variável ficar disponível tanto no código que roda no servidor
quanto no que roda no navegador. Já `ADMIN_USER`/`ADMIN_PASSWORD` ficam
sem esse prefixo — de propósito também, pra nunca vazarem pro navegador,
já que só o `login/page.tsx` (Server Action) precisa deles.

## Rodando isoladamente

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

Sobe em `http://localhost:3000` — mas repare que a home e a página de
artigo vão dar erro se o `backend-api` não estiver rodando junto, já que
elas dependem do `GET /api/projects`.

## Stack

TypeScript, Next.js (App Router) 16, React 18, Tailwind CSS.
