# Etapa 03 - Interface Responsiva com CSS

## Objetivo da etapa

Nesta etapa a interface criada anteriormente foi adaptada para funcionar melhor em diferentes tamanhos de tela. O foco foi organizar os estilos utilizando Flexbox, CSS Grid e media queries, mantendo as três interfaces já desenvolvidas na Etapa 02.

## Interfaces apresentadas

As mesmas três interfaces da Etapa 02 foram utilizadas nas evidências:

1. **Tela 01 - Dashboard**: apresenta o resumo do estoque e os produtos com estoque baixo.
2. **Tela 02 - Produtos**: apresenta a pesquisa, a lista de produtos e o formulário de cadastro.
3. **Tela 03 - Movimentações**: apresenta o formulário de entrada/saída e o histórico de movimentações.

## Viewports utilizados nas evidências

As capturas foram organizadas com os tamanhos definidos para a etapa:

| Tipo de tela | Viewport | Arquivos |
| --- | --- | --- |
| Desktop | 1440 × 900 px | `desktop-tela-01.png`, `desktop-tela-02.png`, `desktop-tela-03.png` |
| Tablet | 768 × 1024 px | `tablet-tela-01.png`, `tablet-tela-02.png`, `tablet-tela-03.png` |
| Smartphone | 390 × 844 px | `smartphone-tela-01.png`, `smartphone-tela-02.png`, `smartphone-tela-03.png` |

As imagens estão localizadas em `docs/evidencias/etapa-03/`.

## Breakpoints utilizados

Foram utilizados dois breakpoints principais:

- `max-width: 900px`: utilizado para tablets e telas intermediárias;
- `max-width: 600px`: utilizado para smartphones e telas pequenas.

## Principais decisões de responsividade

### Cabeçalho e menu

Em desktop, o nome da aplicação e o menu ficam lado a lado utilizando Flexbox. Em telas de smartphone o cabeçalho passa para uma organização vertical e os links do menu ocupam toda a largura disponível.

### Cards do Dashboard

Os cards utilizam CSS Grid. Em desktop são apresentados em três colunas, no breakpoint de tablet passam para duas colunas e em smartphones ficam em apenas uma coluna.

### Formulários

Os campos dos formulários também utilizam CSS Grid. Em desktop são organizados em três colunas, no tablet passam para duas e no smartphone ficam em uma única coluna. Os botões passam a ocupar toda a largura em telas pequenas para facilitar o uso por toque.

### Tabelas

Em desktop e tablet as informações continuam no formato de tabela. Em smartphones, as linhas de produtos e movimentações são apresentadas visualmente como cartões, com o nome de cada coluna exibido antes do valor. Essa alteração evita que o usuário precise realizar rolagem horizontal para consultar os dados.

### Espaçamentos e legibilidade

Foram mantidos espaçamentos consistentes entre seções, cards, campos e elementos de navegação. Em telas menores os espaçamentos foram reduzidos para aproveitar melhor a área disponível sem prejudicar a leitura.

## Recursos CSS demonstrados

Nesta etapa foram utilizados:

- Flexbox no cabeçalho e na navegação;
- CSS Grid nos cards, formulários e organização do menu em smartphone;
- media queries para os breakpoints de 900px e 600px;
- unidades e larguras flexíveis para adaptação da interface;
- reorganização das tabelas para dispositivos móveis.

## Localização dos arquivos CSS responsáveis pela responsividade

Os estilos gerais e todas as regras de responsividade estão no arquivo:

`src/styles.css`

As media queries encontram-se no final desse arquivo.

## Evidências

As nove evidências solicitadas estão em:

`docs/evidencias/etapa-03/`

Elas apresentam Dashboard, Produtos e Movimentações nos viewports de desktop, tablet e smartphone.
