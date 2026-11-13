# Documentação de Seeds - NodeStore API

## O que são Seeds?

Seeds são scripts utilizados para inserir dados iniciais
no banco de dados de uma aplicação.

## Objetivo

Facilitar a configuração inicial do banco de dados
e a realização de testes durante o desenvolvimento.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TypeORM
- MySQL

## Estrutura do projeto

O projeto NodeStore API possui entidades como:

- Usuários
- Produtos
- Categorias de produtos
- Situações de produtos

## Funcionamento

O arquivo src/seed.ts contém a rotina responsável
pela inserção dos dados iniciais no banco.

Antes de executar os seeds, é necessário configurar
a conexão com o banco de dados corretamente.

## Benefícios

- Facilita os testes da API.
- Automatiza a inserção de dados iniciais.
- Reduz cadastros manuais.
- Melhora a organização do desenvolvimento.

## Boas práticas

- Utilizar dados fictícios para realizar testes.
- Evitar cadastrar informações pessoais reais.
- Verificar a conexão com o banco antes da execução.
- Respeitar a ordem de dependência entre as entidades.
- Evitar a duplicação de registros durante os testes.

## Exemplo de utilização

Durante o desenvolvimento, os seeds podem preparar
o banco de dados com categorias, situações e produtos
de exemplo.

Isso permite testar as rotas da API sem precisar
cadastrar manualmente cada registro.

## Conclusão

A utilização de seeds facilita a preparação do ambiente
de desenvolvimento e contribui para os testes da API.