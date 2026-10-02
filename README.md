# 🛒 Projeto Supermercado

Este é um projeto desenvolvido em sala de aula para o gerenciamento de produtos de um supermercado, utilizando **Node.js** com a biblioteca **Express** e armazenamento de dados em formato **JSON**.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de rotas e APIs HTTP.
- **Body-Parser**: Middleware para interpretação das requisições JSON.
- **JSON**: Armazenamento local de dados (`produtos.json`).

---

## 📂 Estrutura do Projeto

```text
09_supermercado/
├── data/
│   └── produtos.json      # Arquivo JSON com a base de dados dos produtos
├── node_modules/          # Módulos e dependências instaladas
├── app.js                 # Arquivo principal com a inicialização do servidor e rotas
├── database.js            # Módulo de manipulação/leitura dos dados
└── package.json           # Dependências e configurações do Node.js
```

---

## ⚙️ Funcionalidades

- **Listagem de produtos**: Consulta de todos os itens cadastrados no supermercado.
- **Busca por ID**: Obtenção de detalhes de um produto específico.
- **Cadastro de produtos**: Inserção de novos itens na base de dados (`produtos.json`).
- **Atualização de produtos**: Alteração de informações como preço, quantidade e nome.
- **Remoção de produtos**: Exclusão de itens do estoque.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a passo

1. **Acesse a pasta do projeto:**
   ```bash
   cd 09_supermercado
   ```

2. **Instale as dependências (caso necessário):**
   ```bash
   npm install
   ```

3. **Inicie a aplicação:**
   ```bash
   node app.js
   ```

4. **Acesse a aplicação:**
   O servidor estará rodando na porta configurada (geralmente `http://localhost:3000`).

---

## 📌 Exemplo de Rotas da API

| Método | Rota           | Descrição                       |
| :----- | :------------- | :------------------------------ |
| `GET`  | `/produtos`     | Retorna todos os produtos       |
| `GET`  | `/produtos/:id` | Retorna um produto específico   |
| `POST` | `/produtos`     | Cadastra um novo produto        |
| `PUT`  | `/produtos/:id` | Atualiza os dados de um produto |
| `DELETE`| `/produtos/:id`| Remove um produto do banco      |

---

*Projeto desenvolvido durante aula prática de Node.js e Express.*
