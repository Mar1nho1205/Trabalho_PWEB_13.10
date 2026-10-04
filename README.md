# API REST - Usuários, Endereços e Ordens

API REST completa com operações de **criar, listar, atualizar e apagar** (CRUD) para 3 entidades relacionadas.

**Tecnologias:** Node.js, Express, Sequelize e SQLite.

**Integrantes:**
- Jonatas Nicacio Marinho da Silva - criar e apagar
- Ismael Levi Alves da Cruz - atualizar e listar

---

## Como rodar

```bash
# 1. Clonar o repositório
git clone https://github.com/Mar1nho1205/Trabalho_PWEB_13.10.git
cd Trabalho_PWEB_13.10

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor
npm run dev
```

O servidor sobe em `http://localhost:3000`. O banco `database.sqlite` é criado automaticamente na primeira execução.

---

## Estrutura do projeto

```
src/
  app.js              # configuração do Express e das rotas
  database.js         # conexão com o SQLite
  models/             # Usuario, Endereco, Ordem e relacionamentos (index.js)
  controles/
    criar.js          # POST
    apagar.js         # DELETE
    atualizar.js      # PUT
    listar.js         # GET
  routes/
    usuarios.js
    enderecos.js
    ordens.js
```

---

## Entidades e relacionamentos

| Entidade | Campos |
|---|---|
| **Usuario** | id, nome, email (único) |
| **Endereco** | id, rua, numero, cidade, estado, usuarioId |
| **Ordem** | id, descricao, valor, usuarioId |

**Relacionamentos (1:N):**
- Um **Usuario** possui vários **Enderecos**.
- Um **Usuario** possui várias **Ordens**.
- Ao apagar um usuário, seus endereços e ordens são apagados junto (`onDelete: 'CASCADE'`).

---

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | `/usuarios` | Lista usuários (com endereços e ordens) |
| POST | `/usuarios` | Cria um usuário |
| PUT | `/usuarios/:id` | Atualiza um usuário |
| DELETE | `/usuarios/:id` | Apaga um usuário |
| GET | `/enderecos` | Lista endereços |
| POST | `/enderecos` | Cria um endereço |
| PUT | `/enderecos/:id` | Atualiza um endereço |
| DELETE | `/enderecos/:id` | Apaga um endereço |
| GET | `/ordens` | Lista ordens |
| POST | `/ordens` | Cria uma ordem |
| PUT | `/ordens/:id` | Atualiza uma ordem |
| DELETE | `/ordens/:id` | Apaga uma ordem |

### Códigos de resposta

| Código | Significado |
|---|---|
| 200 | Sucesso (listar e atualizar) |
| 201 | Criado com sucesso |
| 204 | Apagado com sucesso (sem corpo) |
| 400 | Dados inválidos |
| 404 | Registro não encontrado |

---

## Exemplos de requisições

### Criar usuário

`POST /usuarios`
```json
{
  "nome": "Ana",
  "email": "ana@email.com"
}
```
Resposta **201**:
```json
{
  "id": 1,
  "nome": "Ana",
  "email": "ana@email.com"
}
```

### Criar endereço (ligado ao usuário)

`POST /enderecos`
```json
{
  "rua": "Rua das Flores",
  "numero": "123",
  "cidade": "Maceió",
  "estado": "AL",
  "usuarioId": 1
}
```

### Criar ordem

`POST /ordens`
```json
{
  "descricao": "Pedido de teste",
  "valor": 59.9,
  "usuarioId": 1
}
```

### Apagar

`DELETE /usuarios/1` → **204** (endereços e ordens do usuário também são apagados)

`DELETE /usuarios/999` → **404**
```json
{
  "erro": "Usuário não encontrado"
}
```

### Listar

`GET /usuarios` → **200**
```json
[
  {
    "id": 1,
    "nome": "Ana",
    "email": "ana@email.com",
    "enderecos": [
      { "id": 1, "rua": "Rua das Flores", "cidade": "Maceió", "usuarioId": 1 }
    ],
    "ordens": []
  }
]
```

### Atualizar

`PUT /usuarios/1`
```json
{
  "nome": "Ana Souza"
}
```
Resposta **200** com o usuário atualizado.

### Erro de validação

`POST /usuarios` sem o campo `nome` → **400**
```json
{
  "erro": "notNull Violation: Usuario.nome cannot be null"
}
```

---

## Divisão do trabalho

| Integrante | Responsabilidade |
|---|---|
| Jonatas Nicacio Marinho da Silva | `controles/criar.js` e `controles/apagar.js` |
| Ismael Levi Alves da Cruz | `controles/atualizar.js` e `controles/listar.js` |
