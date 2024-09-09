import './App.css';
import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
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
  const [name_user, setName_user] = useState('');
  const [password_user, setPassword_user] = useState('');

  const iptname = useRef(null);
  const iptsenha = useRef(null);

  const addUser = (event) => {
    event.preventDefault();
    alert(iptname.current.value);
    if(name_user.trim() && password_user.trim()) {
      const newUser = { name_user, password_user};
      const options = { method: 'post', body: new URLSearchParams(newUser)};
  
      alert(options);
      fetch("http://127.0.0.1:3000/newUser", options)
      .then((res) => {
        alert('caso 1');
        return res.json();
      })
      .then((json) => {
        window.alert('Usuário Cadastrado');
      })
    }
  }

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
      <form class="gone loginScreen flex-column" onSubmit={ addUser }>
        <i onClick={ hideModal } class="pointer absolute close white size-2 uil uil-multiply"></i>
        <label className="mont-500 white" for="email">Email: </label>
        <input type="email" ref={ iptname } />
        {/* <input type="email" value={name_user} onChange={(t) => setName_user(t.value)}/> */}
        <label className="mont-500 white" for="senha">Senha: </label>
        <input type="password" ref={ iptsenha } />
        {/* <input type="text" value={password_user} onChange={(t) => setPassword_user(t.value)}/> */}
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
