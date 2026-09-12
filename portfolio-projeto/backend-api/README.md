# backend-api

API REST em Spring Boot que faz o trabalho pesado e chato: guardar os
projetos no banco e devolver JSON pra quem pedir. Não sabe renderizar nada,
não sabe o que é HTML de página — isso é problema do frontend. Aqui é só
dado entrando e saindo.

## O que tem dentro

```
src/main/java/com/portfolio/api/
  PortfolioApiApplication.java   → ponto de entrada, sobe o Spring Boot
  model/Project.java             → a entidade, o "molde" de um projeto
  repository/ProjectRepository.java → acesso ao banco
  controller/ProjectController.java → os endpoints REST
```

Quatro arquivos, cada um com uma função só — dá pra ler o backend inteiro
em cinco minutos.

### `Project.java` — o modelo

É a tabela `projects` do banco, descrita em Java. Cada projeto tem:

| Campo         | Tipo            | Pra que serve                                  |
|---------------|-----------------|-------------------------------------------------|
| `id`          | `Long`          | gerado sozinho pelo banco (auto-incremento)     |
| `title`       | `String`        | título do projeto                               |
| `summary`     | `String` (500)  | resumo curto, o que aparece no card da home     |
| `fullContent` | `TEXT` (`@Lob`) | o artigo inteiro em HTML — por isso não tem limite de tamanho |
| `repoUrl`     | `String`        | link pro repositório no GitHub                  |
| `docsUrl`     | `String`        | link pra documentação, se tiver                 |
| `createdAt`   | `LocalDateTime` | preenchido sozinho na criação (`@PrePersist`), nunca muda depois |

`title` e `summary` são obrigatórios (`@NotBlank`) — o resto é opcional.

### `ProjectRepository.java` — acesso ao banco

Uma interface vazia que estende `JpaRepository`. Parece que não faz nada,
mas o Spring Data já entrega de graça o CRUD inteiro (salvar, buscar, listar,
apagar) só por causa dessa herança. Se um dia precisar de uma busca mais
específica — tipo "todos os projetos criados este mês" — é só declarar o
método aqui com o nome certo (`findByCreatedAtAfter(...)`, por exemplo) que
o Spring monta a query sozinho, sem escrever SQL.

### `ProjectController.java` — os endpoints

Isso aqui é a porta de entrada. Recebe requisição HTTP, chama o repository,
devolve resposta:

```
GET    /api/projects        → lista todos (usado na home)
GET    /api/projects/{id}   → um projeto específico (usado na página do artigo)
POST   /api/projects        → cria um novo (área admin)
PUT    /api/projects/{id}   → atualiza um existente (área admin)
DELETE /api/projects/{id}   → remove (área admin)
```

Alguns detalhes que valem notar:

- No `create`, o `id` é sempre zerado antes de salvar (`project.setId(null)`)
  — garante que é sempre um insert novo, mesmo que alguém mande um `id` no
  corpo da requisição por engano.
- `findById`, `update` e `delete` devolvem `404 Not Found` quando o id não
  existe, em vez de estourar erro.
- O `@CrossOrigin` libera as chamadas vindas do frontend (porta diferente,
  então sem isso o navegador bloqueia por CORS) — a origem permitida vem de
  uma variável de configuração, não está craqueada no código.

## Configuração (`application.properties`)

```properties
server.port=8080
spring.datasource.url=jdbc:sqlite:portfolio.db
spring.jpa.hibernate.ddl-auto=update
app.cors.allowed-origin=http://localhost:3000
```

Alguns pontos que explicam decisões que talvez pareçam estranhas à primeira
vista:

- **Banco é SQLite**, não Postgres/MySQL. Pra um projeto de portfólio
  pessoal, não faz sentido subir um servidor de banco separado — o SQLite
  é só um arquivo (`portfolio.db`), criado sozinho na raiz de `backend-api`
  na primeira execução. Zero setup.
- **Hibernate não fala SQLite nativamente** — por isso o `pom.xml` traz a
  dependência extra `hibernate-community-dialects`, que ensina o Hibernate
  a gerar SQL compatível.
- `ddl-auto=update` faz o Hibernate criar/ajustar a tabela sozinho toda vez
  que o modelo muda. Ótimo pra desenvolvimento, mas numa aplicação de
  produção de verdade o ideal seria migração controlada (Flyway/Liquibase).

## Rodando isoladamente

```bash
mvn spring-boot:run
```

Sobe em `http://localhost:8080`. Dá pra testar os endpoints direto, sem
precisar do frontend no ar — por exemplo:

```bash
curl http://localhost:8080/api/projects
```

## Stack

Java 17+, Spring Boot 3.3, Spring Web, Spring Data JPA, Spring Validation,
SQLite (via `sqlite-jdbc` + `hibernate-community-dialects`).
