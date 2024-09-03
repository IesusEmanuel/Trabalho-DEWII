import React from "react";
import "./avaliacoes.css";

// const Estrelas = ({ x }) => {
//   // Cria um array com 'x' elementos
//   const estrelasArray = Array.from({ length: x }, (_, index) => (
//     <i key={index} className="fa fa-star"></i> // Exemplo com FontAwesome
//   ));

//   return <div>{estrelasArray}</div>;
// };

const Avaliacao = ({ name, desc, count, stars}) => {
  return (
    <>
    
    <div className="flex-column aval">
      <span className="nome white poppins">{ name }</span>
      <div className="flex-row stars">
        {stars >= 1 && <i className="uis uis-star"></i> }
        {stars >= 2 && <i className="uis uis-star"></i>}
        {stars >= 3 && <i className="uis uis-star"></i>}
        {stars >= 4 && <i className="uis uis-star"></i>}
        {stars >= 5 && <i className="uis uis-star"></i>}

        {stars < 5 && <i class="uil uil-star"></i>}
        {stars < 4 && <i class="uil uil-star"></i>}
        {stars < 3 && <i class="uil uil-star"></i>}
        {stars < 2 && <i class="uil uil-star"></i>}
        {stars < 1 && <i class="uil uil-star"></i>}
      </div>
      <p className="desc poppins white">{ desc }      </p>
      <div className="buttons-container flex-row">
        <button className="pointer transition white button-util flex-row align-container-center">
          <i class="transition uil uil-thumbs-up"></i> É útil ? <p className="poppins count">{ count }</p>
        </button>
        <button className="transition pointer white button-util flex-row align-container-center">
          <i class="uil uil-thumbs-down"></i>
        </button>
      </div>
    </div>
    
    </>
  )
}

export default Avaliacao;