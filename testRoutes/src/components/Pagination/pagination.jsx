import React from 'react';
import '/src/App.css';
import './pagination.css'; // Importar os estilos

const Pagination = () => {
  return (
    <div className="paginas-container flex-row align-container-center">
      <span className="pointer transition poppins-600 white">1</span>
      <span className="pointer transition poppins-600 white">2</span>
      <span className="pointer transition poppins-600 white">3</span>
      <span className="pointer transition poppins-600 white">4</span>
      <span className="pointer transition poppins-600 white">5</span>
      <span className="pointer transition poppins-600 white">6</span>
    </div>
  );
};

export default Pagination;
