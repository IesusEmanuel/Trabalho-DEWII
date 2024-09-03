import React from "react";
import "/src/App.css";
import "./jogo.css";
// import Comprando from "/src/components/Comprando/comprando.jsx";

const Jogo = ({ id, game_name, image, discount, price, selectEdit }) => {
  // const comprandoAux = () => {
  //   Comprando(game_name);
  // }
  
  return (
      <div className="pointer game-container flex-column align-container-center">
        <div className="game-image">
          <img src={ image }></img>
        </div>
        <h4 className="white game-name mont-500">{ game_name }</h4>
        <div className="platforms flex-row">
          <img className="platform-existing" src="https://static.vecteezy.com/system/resources/previews/003/026/148/original/pc-logo-monogram-modern-design-template-free-vector.jpg"></img>
          <img className="platform-existing" src="https://th.bing.com/th/id/OIP.v1A1wNjy8UfkBqycji4hGQHaEL?rs=1&pid=ImgDetMain"></img><img className="platform-existing" src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/playstation-square-social-media-1024.png"></img>
        </div>
        <div className="discounts-and-price flex-row align-container-center">
          <span className="mont-500 white size-1 discount">-{ discount }%</span>
          <span style={{ backgroundColor: price === "Gratuito" ? "#00712D" : "#404040"}} className="mont-500 white size-1 price">R${ price }</span>
        </div>

        <div className="flex-column actions">
          <span className="poppins nome-delete-edit">{ game_name }</span>
          <button className="pointer transition edit-btn" onClick={() => { selectEdit(id, game_name, discount, price, image)} }>Editar</button>
          <button className="pointer transition delete-btn">Excluir</button>
        </div>
      </div>
  )
}

export default Jogo;