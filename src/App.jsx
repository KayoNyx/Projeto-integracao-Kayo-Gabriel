import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Produtos from './pages/Produtos'
import Movimentacoes from './pages/Movimentacoes'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/movimentacoes" element={<Movimentacoes />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
