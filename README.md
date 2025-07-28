<h1 align="center" >
    <br />
      <img alt="backend" src="https://blog.back4app.com/wp-content/uploads/2020/09/nodejs-backend-2.png" />
    <br /><br />
</h1>

<h1 align="center">
    API de Alunos - Monitoria GRAN
</h1>
<br/>
<p align="center">
  <a href="#visão-geral">Visão geral</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#organização-de-pastas-e-arquivos">Organização de pastas e arquivos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-instalar?">Como instalar</a>&nbsp;&nbsp;&nbsp;
</p>

# Visão Geral

Este projeto contém uma API RESTful com Node.js e Express que gerencia o cadastro de alunos.

# Rotas

## Criar um aluno ```POST /alunos```

Rota utilizada para criar um aluno. 

Será necessário enviar os dados formatados em JSON, abaixo está um exemplo:

```json
{
	"nome": "Patryck Gratao",
	"email": "ppgratao@gmail.com",
	"dataNascimento": "12/03/1998",
	"curso": "Ciência da Computação",
	"matricula": "431"
}
```

## Listar todos os alunos ```GET /alunos```

Rota utilizada para listar todos os alunos.

## Buscar aluno por ID ```GET /alunos/:id```

Rota utilizada para buscar um aluno passando o ID como parâmetro.

## Atualizar um aluno ```PUT /alunos/:id```

Rota utilizada para atualizar os dados de um aluno que será passado via ID.

Será necessário enviar os dados formatados em JSON, abaixo está um exemplo:

```json
{
	"nome": "Patryck Gratao",
	"email": "ppgratao@gmail.com",
	"dataNascimento": "12/03/1998",
	"curso": "Ciência da Computação",
	"matricula": "431"
}
```

## Deletar um aluno ```DELETE /alunos/:id```

Rota utilizada para deletar um aluno.

# Organização de Pastas e Arquivos

Os arquivos estão separados em camadas:

- Rotas

- Controllers

- Services

## Pasta `src`

Esta pasta contém os arquivos separados em camadas.

## Subpasta `src/routes`

Nesta subpasta está o arquivo de rotas da aplicação.

### Subpasta `src/db`

Nesta subpasta está o arquivo JSON responsável pelo armazenamento de dados da aplicação.

### Subpasta `src/controllers`

Nesta subpasta estão os arquivos de controllers, responsáveis pela abstração dos dados e por conectar a requesição da rota à um service.

### Subpasta `src/services`

Nesta subpasta estão os arquivos de services, responsáveis por manipular o arquivo de db.json.

## Subpasta `src/utils`

Nesta subpasta está o arquivo de functions que fazem a abertura, leitura e gravação da "Base de dados".

# Como instalar?

## Requisitos Mínimos

1. Necessário ter no mínimo o npm `9.5`
2. Necessário ter no mínimo o node `18.14.x`

## Instalação

1.  Baixe ou clone este repositório
2.  Acesse a pasta baixada e instale as dependências com `npm install` ou `yarn install`
3.  Rode o comando `npm run dev`

Após rodar o comando de `run` o servidor estará rodando neste endereço `localhost:3000`.

---

Feito com 💗 pelo [Patrick Gratão](https://www.linkedin.com/in/patrickgratao/)
