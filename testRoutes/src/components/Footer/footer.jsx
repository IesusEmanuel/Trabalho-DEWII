import React from "react";
import "/src/App.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a className="poppins-600" href="#about">Sobre</a>
          <a className="poppins-600" href="#services">Serviços</a>
          <a className="poppins-600" href="#contact">Contato</a>
          <a className="poppins-600" href="#privacy">Política de Privacidade</a>
        </div>
        <div className="footer-info">
          <p className="poppins">&copy; {new Date().getFullYear()} Snoop Jogos. Todos os direitos reservados.</p>
          <p className="poppins">Desenvolvido por <a className="white me pointer" href="">Iesus Emanuel</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;