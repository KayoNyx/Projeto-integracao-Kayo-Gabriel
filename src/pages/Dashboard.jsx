const produtosBaixos = [
  { id: 1, nome: 'Café 500g', quantidade: 2, minimo: 5 },
  { id: 2, nome: 'Arroz 5kg', quantidade: 3, minimo: 5 },
  { id: 3, nome: 'Sabão em pó', quantidade: 1, minimo: 4 },
]

function Dashboard() {
  return (
    <>
      <section className="page-heading">
        <h2>Dashboard</h2>
        <p>Visão geral do estoque.</p>
      </section>

      <section aria-labelledby="resumo-title">
        <h3 id="resumo-title">Resumo</h3>

        <div className="card-grid">
          <article className="card">
            <h4>Produtos cadastrados</h4>
            <p className="card-number">24</p>
          </article>

          <article className="card">
            <h4>Produtos com estoque baixo</h4>
            <p className="card-number">3</p>
          </article>

          <article className="card">
            <h4>Categorias</h4>
            <p className="card-number">6</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="estoque-baixo-title">
        <h3 id="estoque-baixo-title">Produtos com estoque baixo</h3>

        <div className="card-grid">
          {produtosBaixos.map((produto) => (
            <article className="card warning-card" key={produto.id}>
              <h4>{produto.nome}</h4>
              <p>Quantidade atual: {produto.quantidade}</p>
              <p>Estoque mínimo: {produto.minimo}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Dashboard
