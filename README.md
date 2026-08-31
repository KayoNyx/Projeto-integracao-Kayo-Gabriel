# StockFlow

Sistema Web simples para controle de estoque, desenvolvido como Projeto Integrador da disciplina Tecnologia de Construção de Software I.

## Sobre o projeto

O StockFlow tem como objetivo ajudar pequenos estabelecimentos e microempreendedores a organizar e acompanhar os produtos disponíveis em estoque.

O sistema pretende facilitar o cadastro de produtos, a consulta das quantidades disponíveis, o registro de entradas e saídas e a identificação de itens que precisam de reposição.

O projeto está sendo desenvolvido de forma incremental durante o semestre.

## Problema que a aplicação resolve

Pequenos estabelecimentos podem ter dificuldade para acompanhar a quantidade atual de cada produto, registrar movimentações de estoque e identificar produtos que estão acabando.

O StockFlow busca centralizar essas informações em uma aplicação Web simples e organizada.

## Público-alvo

* pequenos comércios;
* microempreendedores;
* pequenos estoques;
* usuários que precisam controlar produtos de forma simples.

## Objetivo principal

Desenvolver uma aplicação Web que permita cadastrar e consultar produtos, registrar movimentações de entrada e saída e identificar produtos que atingiram uma quantidade mínima de estoque.

## Funcionalidades previstas

* cadastrar produtos;
* listar produtos cadastrados;
* editar produtos;
* excluir produtos;
* pesquisar produtos;
* registrar entrada de estoque;
* registrar saída de estoque;
* identificar produtos com estoque baixo;
* organizar produtos por categoria.

## Funcionalidades implementadas na Etapa 02

Nesta etapa foi criado o primeiro protótipo estrutural da interface.

Foram implementadas:

* navegação entre as interfaces;
* dashboard com informações representativas do estoque;
* tabela de produtos;
* formulário de cadastro de produto;
* formulário de movimentação de estoque;
* listagem de movimentações de exemplo;
* uso de elementos HTML semânticos.

Os dados exibidos são apenas exemplos. Nesta etapa ainda não existe persistência, API ou banco de dados conectado à interface.

## Páginas criadas

### Dashboard

Apresenta uma visão geral do sistema e uma lista representativa de produtos com estoque baixo.

### Produtos

Apresenta a listagem dos produtos e um formulário de cadastro.

### Movimentações

Apresenta um formulário para registrar entradas e saídas e uma lista representativa das últimas movimentações.

## Tecnologias utilizadas

### Cliente

* React
* JavaScript
* HTML semântico por meio de JSX
* CSS
* React Router

### Servidor

Previsto para etapas futuras:

* Node.js
* Express

### Persistência

Prevista para etapas futuras:

* SQLite

## Como executar

É necessário possuir Node.js instalado.

No terminal:

```bash
npm install
npm run dev
```

Depois, acesse no navegador o endereço informado pelo Vite.

## Limitações atuais

* os dados ainda são estáticos;
* o cadastro ainda não salva produtos;
* as movimentações ainda não alteram as quantidades;
* não existe banco de dados;
* não existe API;
* não existe autenticação.

Esses itens serão implementados conforme a evolução das próximas etapas da disciplina.

## Etapas

* Etapa 01: proposta e especificação inicial.
* Etapa 02: protótipo estrutural com HTML semântico.

## Autor

Projeto acadêmico desenvolvido para a disciplina Tecnologia de Construção de Software I.
