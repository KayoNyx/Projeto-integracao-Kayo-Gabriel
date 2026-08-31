import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div>
          <h1>StockFlow</h1>
          <p>Controle simples de estoque</p>
        </div>

        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/movimentacoes">Movimentações</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
