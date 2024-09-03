import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "/src/components/Home/home.jsx";
import Sellers from "/src/components/Sellers/sellers.jsx";
import Ofertas from "/src/components/Ofertas/ofertas.jsx";
import Avaliacoes from "/src/components/Avaliacoes/avaliacoes.jsx";
import Todos from "/src/components/Todos/todos.jsx";
import Footer from "/src/components/Footer/footer.jsx";

const showModal = () => {
  const screen = document.querySelector(".loginScreen");
  const all = document.querySelector(".blur-background");
  screen.style.display = "flex";
  all.style.display = "block";
}

const hideModal = () => {
  const screen = document.querySelector(".loginScreen");
  const all = document.querySelector(".blur-background");
  screen.style.display = "none";
  all.style.display = "none";
}

export default function App() {
  return (
    <Router>
      <header className="header">
        <Link className="link poppins" to="/"><div className="pointer container-logo flex-row">
          <img src="/src/assets/snoop-logo.svg"></img>
        </div></Link>

        <nav className="nav-container flex-row align-container-center">
          <Link className="link poppins" to="/" >Início</Link>
          <Link className="link poppins" to="/sellers">Mais Vendidos</Link>
          <Link className="link poppins" to="/ofertas">Ofertas</Link>
          <Link className="link poppins" to="/avaliacoes">Avaliações</Link>
          <Link className="link poppins" to="/todos">Todos</Link>
          <button onClick= { showModal } className="btn-header-common align-container-center white uppercase poppins-600 flex-row pointer transition">
          Acessar <i class="uil uil-signin"></i> </button>
        </nav>
      </header>

      <div className="blur-background"></div>
      <form class="gone loginScreen flex-column">
        <i onClick={ hideModal } class="pointer absolute close white size-2 uil uil-multiply"></i>
        <label className="mont-500 white" for="email">Email: </label>
        <input type="email"></input>
        <label className="mont-500 white" for="senha">Senha: </label>
        <input type="password"></input>
        <div className="allowedConnected">
          <input type="checkbox"></input>
          <span className="mont-300 white">Permanecer Conectado</span>
        </div>
        <button className="transition pointer send">Login</button>
        <button className="transition pointer send">Registrar</button>
      </form>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>

      <Footer />
    </Router>
  )
}
