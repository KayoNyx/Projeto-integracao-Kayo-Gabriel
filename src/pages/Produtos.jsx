const produtos = [
  {
    id: 1,
    codigo: 'P001',
    nome: 'Arroz 5kg',
    categoria: 'Alimentos',
    quantidade: 12,
    preco: 'R$ 28,90',
  },
  {
    id: 2,
    codigo: 'P002',
    nome: 'Café 500g',
    categoria: 'Alimentos',
    quantidade: 2,
    preco: 'R$ 18,50',
  },
  {
    id: 3,
    codigo: 'P003',
    nome: 'Sabão em pó',
    categoria: 'Limpeza',
    quantidade: 1,
    preco: 'R$ 16,90',
  },
]

function Produtos() {
  return (
    <>
      <section className="page-heading">
        <h2>Produtos</h2>
        <p>Consulta e cadastro dos produtos controlados pelo sistema.</p>
      </section>

      <section aria-labelledby="lista-produtos-title">
        <h3 id="lista-produtos-title">Produtos cadastrados</h3>

        <div className="field">
          <label htmlFor="pesquisa-produto">Pesquisar produto</label>
          <input
            id="pesquisa-produto"
            name="pesquisa"
            type="search"
            placeholder="Digite o nome ou código"
          />
        </div>

        <div className="table-wrapper responsive-table">
          <table>
            <caption>Lista de produtos cadastrados</caption>
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Produto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td data-label="Código">{produto.codigo}</td>
                  <td data-label="Produto">{produto.nome}</td>
                  <td data-label="Categoria">{produto.categoria}</td>
                  <td data-label="Quantidade">{produto.quantidade}</td>
                  <td data-label="Preço">{produto.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="cadastro-produto-title">
        <h3 id="cadastro-produto-title">Cadastrar produto</h3>

        <form>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="nome">Nome do produto</label>
              <input id="nome" name="nome" type="text" required />
            </div>

            <div className="field">
              <label htmlFor="codigo">Código</label>
              <input id="codigo" name="codigo" type="text" required />
            </div>

            <div className="field">
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria" name="categoria" required defaultValue="">
                <option value="" disabled>Selecione</option>
                <option value="alimentos">Alimentos</option>
                <option value="bebidas">Bebidas</option>
                <option value="limpeza">Limpeza</option>
                <option value="higiene">Higiene</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="quantidade">Quantidade inicial</label>
              <input id="quantidade" name="quantidade" type="number" min="0" required />
            </div>

            <div className="field">
              <label htmlFor="preco">Preço</label>
              <input id="preco" name="preco" type="number" min="0" step="0.01" required />
            </div>

            <div className="field">
              <label htmlFor="estoque-minimo">Estoque mínimo</label>
              <input
                id="estoque-minimo"
                name="estoqueMinimo"
                type="number"
                min="0"
                required
              />
            </div>
          </div>

          <button type="submit">Cadastrar produto</button>
        </form>
      </section>
    </>
  )
}

export default Produtos
