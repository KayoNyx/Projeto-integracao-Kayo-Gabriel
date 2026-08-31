# Proposta do Projeto - StockFlow

## 1. Nome da aplicação

**StockFlow**

## 2. Descrição do problema

Pequenos estabelecimentos e microempreendedores nem sempre possuem um sistema próprio para acompanhar os produtos armazenados. Em alguns casos, o controle é feito manualmente ou com planilhas simples.

Isso pode dificultar a consulta da quantidade disponível de cada produto, o registro de entradas e saídas e a identificação de itens que precisam ser repostos.

O StockFlow será uma aplicação Web para centralizar essas informações e facilitar o controle básico de estoque.

## 3. Público-alvo

O sistema é direcionado principalmente para pequenos comércios, microempreendedores e usuários que precisam controlar um estoque de pequeno porte sem utilizar sistemas empresariais complexos.

## 4. Objetivo principal da aplicação

O objetivo principal é permitir que o usuário organize e acompanhe seu estoque por meio de uma aplicação Web simples, possibilitando o cadastro de produtos, o registro de movimentações e a identificação de produtos com quantidade baixa.

## 5. Funcionalidades previstas

A aplicação deverá possuir, inicialmente, as seguintes funcionalidades:

1. Cadastrar produtos.
2. Listar os produtos cadastrados.
3. Editar informações de um produto.
4. Excluir um produto.
5. Pesquisar produtos pelo nome ou código.
6. Registrar entrada de produtos no estoque.
7. Registrar saída de produtos do estoque.
8. Identificar produtos com estoque baixo.
9. Organizar produtos por categoria.

## 6. Entidades ou conceitos importantes do domínio

### Produto

Representa um item controlado pelo sistema.

Principais informações previstas:

- nome;
- código;
- descrição;
- categoria;
- quantidade atual;
- preço;
- estoque mínimo.

### Categoria

Representa uma forma de organizar os produtos de acordo com seu tipo.

Exemplos:

- alimentos;
- bebidas;
- limpeza;
- higiene.

### Movimentação de estoque

Representa uma alteração na quantidade de um produto.

Uma movimentação poderá ser:

- entrada;
- saída.

Também deverá registrar informações como produto, quantidade e data.

## 7. Telas ou interfaces previstas

### Dashboard

Tela inicial da aplicação. Deverá apresentar uma visão geral do estoque, como quantidade de produtos cadastrados e produtos que estão com estoque baixo.

### Produtos

Tela destinada à consulta dos produtos. Nela será possível visualizar os produtos cadastrados, pesquisar itens e acessar o formulário de cadastro.

### Movimentações

Tela utilizada para registrar entradas e saídas de produtos e consultar as movimentações realizadas.

## 8. Operações previstas

As principais operações previstas para a aplicação são:

1. Cadastrar um novo produto.
2. Consultar os produtos cadastrados.
3. Alterar os dados de um produto.
4. Excluir um produto.
5. Registrar uma entrada de estoque.
6. Registrar uma saída de estoque.
7. Pesquisar um produto.
8. Consultar produtos com estoque baixo.

## 9. Tecnologias previstas no cliente

Para a parte cliente da aplicação pretende-se utilizar:

- React;
- JavaScript;
- HTML;
- CSS.

O React será utilizado para organizar a interface da aplicação em componentes.

## 10. Tecnologias previstas no servidor

Para o servidor pretende-se utilizar:

- Node.js;
- Express.

O servidor será responsável futuramente pelas regras de negócio e pela comunicação entre o cliente e a camada de persistência.

## 11. Tecnologia de persistência

Inicialmente pretende-se utilizar **SQLite** como banco de dados.

A escolha foi feita por ser uma solução simples para um projeto acadêmico de pequeno porte e por não exigir a configuração de um servidor de banco de dados separado.

A tecnologia poderá ser alterada futuramente caso as necessidades do projeto mudem.

## 12. Diagrama geral da solução

```text
+-------------------------+
|      Usuário            |
+------------+------------+
             |
             v
+-------------------------+
|   Interface Web         |
| React + JavaScript      |
+------------+------------+
             |
             v
+-------------------------+
|      API / Servidor     |
|   Node.js + Express     |
+------------+------------+
             |
             v
+-------------------------+
|     Banco de Dados      |
|        SQLite           |
+-------------------------+
```

Na primeira etapa, o foco está na definição da proposta. As demais partes da arquitetura serão implementadas gradualmente durante o semestre.
