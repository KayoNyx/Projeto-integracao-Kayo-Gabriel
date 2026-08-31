const movimentacoes = [
  { id: 1, produto: 'Arroz 5kg', tipo: 'Entrada', quantidade: 10, data: '30/08/2026' },
  { id: 2, produto: 'Café 500g', tipo: 'Saída', quantidade: 3, data: '30/08/2026' },
  { id: 3, produto: 'Sabão em pó', tipo: 'Saída', quantidade: 2, data: '29/08/2026' },
]

function Movimentacoes() {
  return (
    <>
      <section className="page-heading">
        <h2>Movimentações</h2>
        <p>Registro representativo de entradas e saídas do estoque.</p>
      </section>

      <section aria-labelledby="nova-movimentacao-title">
        <h3 id="nova-movimentacao-title">Nova movimentação</h3>

        <form>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="produto-movimentacao">Produto</label>
              <select
                id="produto-movimentacao"
                name="produto"
                required
                defaultValue=""
              >
                <option value="" disabled>Selecione um produto</option>
                <option value="P001">Arroz 5kg</option>
                <option value="P002">Café 500g</option>
                <option value="P003">Sabão em pó</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="tipo-movimentacao">Tipo de movimentação</label>
              <select
                id="tipo-movimentacao"
                name="tipo"
                required
                defaultValue=""
              >
                <option value="" disabled>Selecione</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="quantidade-movimentacao">Quantidade</label>
              <input
                id="quantidade-movimentacao"
                name="quantidade"
                type="number"
                min="1"
                required
              />
            </div>
          </div>

          <button type="submit">Registrar movimentação</button>
        </form>
      </section>

      <section aria-labelledby="historico-title">
        <h3 id="historico-title">Últimas movimentações</h3>

        <div className="table-wrapper">
          <table>
            <caption>Movimentações recentes do estoque</caption>
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Produto</th>
                <th scope="col">Tipo</th>
                <th scope="col">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {movimentacoes.map((movimentacao) => (
                <tr key={movimentacao.id}>
                  <td>{movimentacao.data}</td>
                  <td>{movimentacao.produto}</td>
                  <td>{movimentacao.tipo}</td>
                  <td>{movimentacao.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Movimentacoes
