# Etapa 02 - Protótipo Estrutural com HTML Semântico

## Objetivo da etapa

Nesta etapa foi criado o primeiro protótipo estrutural do StockFlow utilizando React e elementos HTML semânticos por meio de JSX.

O objetivo foi representar as principais interfaces definidas na proposta da Etapa 01, sem implementar ainda banco de dados, API ou persistência.

## Funcionalidades implementadas

Foram implementadas as seguintes estruturas de interface:

- menu de navegação;
- visão geral do estoque;
- indicação visual de produtos com estoque baixo;
- tabela para listagem de produtos;
- formulário de cadastro de produto;
- formulário para movimentação de estoque;
- tabela com movimentações de exemplo.

Os dados apresentados atualmente são estáticos e servem apenas para representar a estrutura da aplicação.

## Páginas criadas

### 1. Dashboard

A página inicial contém:

- título da página;
- cartões com informações gerais;
- seção de produtos com estoque baixo;
- navegação para as demais páginas.

### 2. Produtos

A página de produtos contém:

- tabela de produtos cadastrados;
- campo de pesquisa representativo;
- formulário de cadastro;
- campos para nome, código, categoria, quantidade, preço e estoque mínimo.

### 3. Movimentações

A página de movimentações contém:

- formulário de movimentação;
- seleção do produto;
- seleção do tipo de movimentação;
- campo de quantidade;
- tabela com movimentações recentes de exemplo.

## Decisões relacionadas à estrutura HTML

Foi utilizado `header` para representar o cabeçalho principal da aplicação.

O elemento `nav` foi utilizado para agrupar os links de navegação entre Dashboard, Produtos e Movimentações.

O conteúdo principal de cada tela foi colocado dentro de `main`.

As partes independentes das páginas foram organizadas com `section`.

Os cartões de resumo e os produtos com estoque baixo utilizam `article`, pois representam conteúdos independentes dentro de suas seções.

Os formulários utilizam `form`.

Todos os campos dos formulários possuem elementos `label` associados por meio dos atributos `htmlFor` e `id`.

As ações dos formulários utilizam `button`.

O rodapé da aplicação utiliza `footer`.

As tabelas foram utilizadas para informações naturalmente tabulares, como a listagem de produtos e o histórico de movimentações.

## Organização dos arquivos

Os componentes compartilhados foram separados na pasta `src/components`.

As páginas principais foram separadas na pasta `src/pages`.

A configuração das rotas está em `src/App.jsx`.

Os estilos gerais estão no arquivo `src/styles.css`.

Essa organização foi escolhida para deixar o projeto simples, mas facilitar a inclusão de novas funcionalidades nas próximas etapas.

## Limitações da etapa

Nesta etapa ainda não foram implementados:

- banco de dados;
- API;
- autenticação;
- persistência;
- regras completas de entrada e saída;
- edição e exclusão funcionais.

Essas funcionalidades serão adicionadas gradualmente durante a evolução do projeto.
