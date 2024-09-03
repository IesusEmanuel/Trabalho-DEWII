import React from "react";
import Text from "/src/components/Texts/texts.jsx";
import "/src/App.css";
import "/src/components/Sellers/sellers.css";
import Jogo from "/src/components/Jogo/jogo.jsx";

const Ofertas = () => {
  return (
    <>
    <Text text="Melhores Ofertas" />
      <div className="games-container flex-row align-container-center">
        <Jogo game_name="Black Myth: Wukong" image="https://th.bing.com/th/id/OIP.685Hc_9srkICKPbVGzYpLgHaHa?rs=1&pid=ImgDetMain" discount="-75%" price="R$19,90"/>
        <Jogo game_name="Red Dead Redemption 2" image="https://i1.wp.com/www.lifeisxbox.eu/wp-content/uploads/2019/12/rdr2.jpg?fit=1080,1080" discount="-100%" price="Gratuito"/>
        </div>
    </>
  )
}

export default Ofertas;