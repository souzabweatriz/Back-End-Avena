# 🌿 Back-End-Avena  

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express-Framework-black?logo=express)](https://expressjs.com/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)](https://www.postgresql.org/)  
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)  

Uma API REST para gerenciamento de **medicamentos naturais e tradicionais**, construída com **Node.js** e **Express**.  
Permite operações completas de **CRUD** (criar, ler, atualizar e deletar) sobre medicamentos, conectada a um **banco de dados relacional**.  

> 💡 Ideal para estudos de back-end, APIs RESTful e integração com front-end.  

---

## 📑 Sumário
- [⚙️ Instalação](#️-instalação)  
- [🔧 Configuração](#-configuração)  
- [🚀 Execução](#-execução)  
- [📡 Rotas da API](#-rotas-da-api)  
- [🧪 Testando a API com Postman](#-testando-a-api-com-postman)  
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)  
- [🔎 Funcionamento do Código](#-funcionamento-do-código)  
- [🔄 Fluxo de uma Requisição](#-fluxo-de-uma-requisição)  
- [🗄️ Banco de Dados](#️-banco-de-dados)  
- [🤝 Contribuição](#-contribuição)  

---

## ⚙️ Instalação  

1. Clone o repositório:
   ```bash
   git clone https://github.com/souzabweatriz/Back-End-Avena.git
   ```
   ```bash
   cd Back-End-Avena
   ```
2. Instale as dependências:  

   ```bash
    npm install
   ```
## 🔧 Configuração

### Configure o banco de dados em src/config/database.js com suas credenciais locais.

### O script de criação das tabelas está em src/database/schema.sql.

## 🚀 Execução

   ```bash
    npm run dev
   ```

      ```bash
    npm start
   ```

#### ➡️ O servidor iniciará na porta definida em server.js (padrão 3000).

## 📡 Rotas da API

### 🌱 Medicamentos

#### GET /remedios — Lista todos os medicamentos

#### GET /remedios/:id — Busca medicamento por ID

#### POST /remedios — Cria um novo medicamento

#### PUT /remedios/:id — Atualiza um medicamento existente

#### DELETE /remedios/:id — Remove um medicamento

## 📥 Exemplo de requisição POST
```json
{
   "id": 2,
   "nome_remedio": "Chá Verde",
   "efeito_remedio": "Acelera o metabolismo",
   "photo": "link-da-imagem",
   "modo_preparo": "Infusão por 3 minutos",
   "contraindicacoes": "Evitar consumo excessivo",
   "categoria_id": 2
}
```

## 🧪 Testando a API com Postman


Instale o Postman → [Download](https://www.postman.com/downloads/)

Inicie o servidor da API (`npm run dev` ou `npm start`).

### 🔎 Exemplos de uso da rota de recomendação

Para receber recomendações de remédios com base em sintomas, utilize:

```
GET http://localhost:4000/api/recomendar?comoEsta=insônia
GET http://localhost:4000/api/recomendar?comoEsta=corpo dói
GET http://localhost:4000/api/recomendar?comoEsta=queimação
GET http://localhost:4000/api/recomendar?comoEsta=má digestão
GET http://localhost:4000/api/recomendar?comoEsta=relaxar
GET http://localhost:4000/api/recomendar?comoEsta=ansiedade
GET http://localhost:4000/api/recomendar?comoEsta=estômago
GET http://localhost:4000/api/recomendar?comoEsta=dores musculares
GET http://localhost:4000/api/recomendar?comoEsta=dor de cabeça
GET http://localhost:4000/api/recomendar?comoEsta=cabeça
GET http://localhost:4000/api/recomendar?comoEsta=gripe
GET http://localhost:4000/api/recomendar?comoEsta=cólicas
```

Você pode testar cada sintoma acima e receber os remédios recomendados para cada caso.

### Exemplos de outras rotas

- `GET http://localhost:4000/api/remedios` → Lista todos os remédios
- `GET http://localhost:4000/api/remedios/1` → Busca remédio por ID
- `POST http://localhost:4000/api/remedios` → Criar novo remédio
- `PUT http://localhost:4000/api/remedios/1` → Atualizar remédio
- `DELETE http://localhost:4000/api/remedios/1` → Deletar remédio

Clique em Send 🚀 para ver o resultado.

## 📂 Estrutura do Projeto
Back-End-Avena/
├── package.json
├── server.js
└── src/
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── remedioController.js
    ├── database/
    │   └── schema.sql
    ├── models/
    │   └── remedioModel.js
    └── routes/
        └── remedioRoutes.js

## 🔎 Funcionamento do Código

🟢 server.js
Ponto de entrada.
Configura Express, CORS e JSON.
Prefixo de rotas: /api.
Inicia servidor (padrão: porta 3000).

🛣️ Rotas (src/routes/remedioRoutes.js)
Define rotas REST (GET, POST, PUT, DELETE).

🎯 Controller (src/controllers/remedioController.js)
Recebe requisições e chama o Model.
Faz tratamento de erros.
Exemplo: getAllRemedios → busca todos no banco.

🗃️ Model (src/models/remedioModel.js)
Comunicação com o banco de dados.
Executa queries SQL.

📜 Banco de Dados (src/database/schema.sql)
Criação das tabelas remedios e categorias.
Inclui dados iniciais (ex: chás e propriedades).

## 🔄 Fluxo de uma Requisição
```mermaid
flowchart LR
    A[👤 Usuário] --> B[🌐 Rota (Express)]
    B --> C[🎯 Controller]
    C --> D[🗃️ Model]
    D --> E[(🗄️ Banco de Dados)]
    E --> D
    D --> C
    C --> B
    B --> A
```

## 🗄️ Banco de Dados
Utiliza PostgreSQL.
Execute src/database/schema.sql para criar tabelas.

## 🤝 Contribuição
Faça um fork do repositório.
Crie uma branch → git checkout -b minha-feature
Faça suas alterações.
Abra um Pull Request.

✨ Dúvidas ou ideias? Abra uma issue e vamos conversar!

