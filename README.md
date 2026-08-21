# NodeStore API

API REST desenvolvida com **Node.js, TypeScript, Express, TypeORM e MySQL**.

O projeto tem como objetivo desenvolver uma API para gerenciamento de produtos e usuários, utilizando boas práticas de desenvolvimento, autenticação, validação de dados, migrations e integração com banco de dados.

> 🚧 Projeto em desenvolvimento.

## 🚀 Tecnologias

* Node.js
* TypeScript
* Express
* TypeORM
* MySQL
* JWT
* Bcrypt
* Yup
* Nodemailer
* CORS
* Slugify

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js 22 ou superior
* MySQL 8 ou superior
* Git

Para verificar as versões:

```bash
node -v
```

```bash
mysql --version
```

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/node-store-api.git
```

Entre na pasta do projeto:

```bash
cd node-store-api
```

Instale as dependências:

```bash
npm install
```

## ⚙️ Configuração

Duplique o arquivo `.env.example` e renomeie para `.env`:

```bash
cp .env.example .env
```

Depois, configure as variáveis de ambiente de acordo com o seu banco de dados.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=nodeapi

JWT_SECRET=sua_chave_secreta

MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASSWORD=
```

> ⚠️ Nunca envie o arquivo `.env` para o GitHub. As informações sensíveis devem permanecer apenas no ambiente local.

## 🗄️ Banco de dados

Crie o banco de dados no MySQL:

```sql
CREATE DATABASE nodeapi
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

Depois configure as credenciais no arquivo `.env`.

## 🔄 Migrations

Para executar as migrations:

```bash
npx typeorm migration:run -d dist/data-source.js
```

As migrations serão responsáveis pela criação e alteração das tabelas do banco de dados.

## 🌱 Seeds

Para cadastrar dados de teste no banco:

```bash
node dist/run-seeds.js
```

## ▶️ Executando o projeto

Para executar o projeto em modo de desenvolvimento:

```bash
npm run start:watch
```

Após iniciar, a API estará disponível na porta configurada no projeto.

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Token)** para autenticação dos usuários.

O fluxo de autenticação incluirá:

* Cadastro de usuário
* Login
* Geração de token
* Validação do token
* Rotas protegidas
* Recuperação de senha

## 👤 Usuários

A API terá funcionalidades relacionadas ao gerenciamento de usuários, incluindo:

* Cadastro
* Login
* Autenticação
* Criptografia de senha
* Recuperação de senha

As senhas serão armazenadas de forma segura utilizando **Bcrypt**.

## 📦 Produtos

A API terá funcionalidades para gerenciamento de produtos.

Entre os recursos planejados:

* Cadastro de produtos
* Listagem de produtos
* Consulta de produto
* Atualização de produtos
* Remoção de produtos
* Slug para identificação dos produtos

## 🧪 Desenvolvimento

O projeto utilizará migrations para controle da estrutura do banco de dados e seeds para criação de registros utilizados durante o desenvolvimento e testes.

### Criar uma migration

```bash
npx typeorm migration:create src/migration/NomeDaMigration
```

### Executar migrations

```bash
npx typeorm migration:run -d dist/data-source.js
```

## 📁 Estrutura do projeto

A estrutura será organizada de forma a separar as responsabilidades da aplicação.

```text
node-store-api/
├── src/
│   ├── controller/
│   ├── entity/
│   ├── migration/
│   ├── middleware/
│   ├── route/
│   ├── schema/
│   ├── service/
│   ├── data-source.ts
│   └── index.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

> A estrutura poderá ser alterada durante o desenvolvimento conforme a necessidade do projeto.

## 🛠️ Scripts

Os principais comandos utilizados no projeto serão:

```bash
npm install
```

Instala as dependências do projeto.

```bash
npm run start:watch
```

Executa o projeto em modo de desenvolvimento.

```bash
npx tsc
```

Compila o projeto TypeScript.

```bash
npx typeorm migration:run -d dist/data-source.js
```

Executa as migrations.

```bash
node dist/run-seeds.js
```

Executa as seeds.

## 📌 Status do projeto

🚧 **Em desenvolvimento**

Funcionalidades serão implementadas gradualmente.

## 📚 Objetivo

Este projeto está sendo desenvolvido com o objetivo de praticar e aprofundar conhecimentos em:

* Node.js
* TypeScript
* APIs REST
* Express
* MySQL
* TypeORM
* Autenticação JWT
* Criptografia de senhas
* Validação de dados
* Migrations
* Seeds
* Arquitetura de aplicações
* Integração com serviços de e-mail

## 👨‍💻 Autor

Desenvolvido por **SEU NOME**.

---

⭐ Se este projeto for útil para você, considere deixar uma estrela no repositório.
