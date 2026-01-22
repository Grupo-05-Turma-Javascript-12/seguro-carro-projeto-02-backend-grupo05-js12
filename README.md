# Sistema de Seguro de Carro – SeguroCarro

## Descrição Geral

O **SeguroCarro** é um sistema para gerenciamento de usuários, produtos e categorias relacionados a seguros de automóveis.  
A aplicação permite o cadastro de usuários com informações do veículo, a gestão de produtos de seguro e suas categorias, além de consultas específicas como listagem de produtos ativos e cálculo de descontos com base no ano do carro.

---

## Regras de Negócio

### Usuários

- Nome, email, senha e carro são obrigatórios
- O email deve ser único por usuário
- O ano do carro deve ser válido (não pode ser futuro)
- A data de cadastro é gerada automaticamente pelo sistema
- Um usuário pode estar associado a produtos de seguro

### Produtos

- Nome e preço são obrigatórios
- O preço não pode ser negativo
- Produtos são criados como ativos por padrão
- Produtos podem estar associados a categorias
- Apenas produtos ativos devem aparecer nas listagens padrão

### Categorias

- Nome é obrigatório
- Uma categoria pode estar associada a vários produtos

---

## Identidade das Entidades

- O ID é único, automático e gerado pelo banco de dados
- O ID não pode ser alterado
- Entidades podem possuir nomes iguais, desde que tenham IDs diferentes

---

## Entidades e Atributos

### Entidade: Usuário (`tb_usuarios`)

| Campo          | Tipo           | Restrições |
|---------------|----------------|------------|
| id            | INT            | PK, AI     |
| nome          | VARCHAR(255)   | NOT NULL   |
| email         | VARCHAR(255)   | NOT NULL   |
| senha         | VARCHAR(150)   | NOT NULL   |
| carro         | VARCHAR(150)   | NOT NULL   |
| ano           | INT            | —          |
| data_cadastro | DATE           | AUTO       |
| produtos      | INT            | FK         |

---

### Entidade: Produto (`tb_produtos`)

| Campo       | Tipo          | Restrições        |
|------------|---------------|-------------------|
| id         | INT           | PK, AI            |
| nome       | VARCHAR(255)  | NOT NULL          |
| descricao  | VARCHAR(500)  | —                 |
| preco      | DECIMAL(10,2) | NOT NULL          |
| esta_ativo | BOOLEAN       | DEFAULT TRUE      |

---

### Entidade: Categoria (`tb_categorias`)

| Campo      | Tipo          | Restrições |
|-----------|---------------|------------|
| id        | INT           | PK, AI     |
| nome      | VARCHAR(255)  | NOT NULL   |
| descricao | VARCHAR(500)  | —          |

---

## Funcionalidades Principais (CRUD)

### Usuários

- **getAllUsers**: Retorna todos os usuários cadastrados
- **getUserByEmail**: Busca um usuário pelo email
- **createUser**: Cria um novo usuário
- **updateUser**: Atualiza os dados de um usuário existente
- **deleteUser**: Remove um usuário do sistema

### Produtos

- **getAllProducts**: Retorna todos os produtos
- **getProductById**: Busca um produto pelo ID
- **getDiscountByCarYear**: Calcula desconto com base no ano do veículo
- **getActiveProducts**: Retorna apenas produtos ativos
- **createProduct**: Cria um novo produto
- **updateProduct**: Atualiza um produto existente
- **deleteProduct**: Remove um produto

### Categorias

- **getAllCategories**: Retorna todas as categorias
- **getUserByCategory**: Retorna produtos associados a uma categoria
- **createCategory**: Cria uma nova categoria
- **updateCategory**: Atualiza uma categoria
- **deleteCategory**: Remove uma categoria

---

## Endpoints

### Usuários

```http
GET    /usuarios
GET    /usuarios/email/:email
POST   /usuarios
PUT    /usuarios/:id
DELETE /usuarios/:id
```

### Produtos

```http
GET    /produtos
GET    /produtos/:id
GET    /produtos/ativos
GET    /produtos/desconto/:ano
POST   /produtos
PUT    /produtos/:id
DELETE /produtos/:id
```

### Categorias

```http
GET    /categorias
GET    /categorias/:id/produtos
POST   /categorias
PUT    /categorias/:id
DELETE /categorias/:id
```

---

## Tecnologias Utilizadas

- Banco de Dados: SQL
- Back-end: NestJS
- ORM: TypeORM

---

## Banco de Dados – Script SQL

```sql
CREATE DATABASE IF NOT EXISTS db_segurocarro
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE db_segurocarro;

CREATE TABLE tb_produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(500),
  preco DECIMAL(10,2) NOT NULL,
  esta_ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE tb_categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(500)
);

CREATE TABLE tb_usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(150) NOT NULL,
  carro VARCHAR(150) NOT NULL,
  ano INT,
  data_cadastro DATE,
  produtos INT,
  FOREIGN KEY (produtos) REFERENCES tb_produtos(id)
);
```

---

## Etapas do Projeto

- Criação do banco de dados
- Criação do repositório no GitHub
- Modelagem do DER
- Configuração do banco no NestJS
- Criação das Entities
- Desenvolvimento dos Services
- Desenvolvimento dos Controllers
- Testes no Insomnia
- Documentação
- Revisão e finalização
