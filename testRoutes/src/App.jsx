import './App.css';
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "/src/components/Home/home.jsx";
import Sellers from "/src/components/Sellers/sellers.jsx";
import Ofertas from "/src/components/Ofertas/ofertas.jsx";
import Avaliacoes from "/src/components/Avaliacoes/avaliacoes.jsx";
import Todos from "/src/components/Todos/todos.jsx";
import Footer from "/src/components/Footer/footer.jsx";

const insertUser = () => {
  const screen = document.querySelector(".loginScreen");
  const all = document.querySelector(".blur-background");
  screen.style.display = "none";
  all.style.display = "none";

  toast.success("Usuário cadastrado com sucesso");
}

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

  
  // function realizaLogin() {
//     const form = document.forms[0];
//     const data = new FormData(form);

//     // Converter FormData para URLSearchParams
//     const params = new URLSearchParams();
//     for (const pair of data.entries()) {
//         params.append(pair[0], pair[1]);
//     }

//     const options = {
//         method: 'POST',
//         credentials: 'include', // Inclui cookies com a requisição, necessário para sessões
//         body: params
//     };

//     fetch("http://127.0.0.1:3000/loginUser", options)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((json) => {
//             if (json.logged) {
//                 console.log('Autenticado');
//                 window.alert('Autenticado.');
//                 window.location.reload(); // Corrigido para recarregar a página
//             } else {
//                 window.alert('Falha ao executar login.');
//             }
//         })
//         .catch((error) => {
//             console.error('Erro na requisição:', error);
//             window.alert('Erro ao tentar fazer login.');
//         });
// }

  const realizaLogin = () => {
    toast.success("Usuário logado");
    }

  const addUser = (event) => {
    event.preventDefault();
    if(name_user.trim() && password_user.trim()) {
      const newUser = { name_user , password_user};
      const options = { method: 'POST', body: new URLSearchParams(newUser)};
      fetch("http://127.0.0.1:3000/newUser", options)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        insertUser();
      })
    }else {
      toast.warning("Erro ao criar usuário");
    }
  }
  
  // const LoginForm = () => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  
  //     try {
  //       const response = await axios.post('http://localhost:5000/login', {
  //         username,
  //         password
  //       });
  
  //       if (response.data.success) {
  //         toast.success('certinho');
  //       } else {
  //         toast.info('usuario ou senha invalidos');
  //       }
  //     } catch (error) {
  //       toast.warning('erro ao logar');
  //     }
  //   };
  // }

  return (
    <Router>
     <ToastContainer />
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
          <button className="gone btn-header-commom align-conainer-center add">+</button>
          <span className="gone uppercase poppins-600 white user">user</span>
        </nav>
      </header>

      <div className="blur-background"></div>
      <form class="gone loginScreen flex-column">
        <i onClick={ hideModal } class="pointer absolute close white size-2 uil uil-multiply"></i>

        <label className="mont-500 white" for="email">Email: </label>
        <input type="email" value={ name_user } onChange={(e) => setName_user(e.target.value)} required />

        <label className="mont-500 white" for="senha">Senha: </label>
        <input type="password" value={ password_user } onChange={(e) => setPassword_user(e.target.value)} required />        
        <div className="allowedConnected">
          <input type="checkbox"></input>
          <span className="mont-300 white">Permanecer Conectado</span>
        </div>
        <button onClick= { realizaLogin } className="transition pointer send">Login</button>
        <button onClick={ addUser } className="transition pointer send">Registrar</button>
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
