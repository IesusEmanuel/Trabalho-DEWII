import React from "react";
import "/src/App.css";
import Text from "/src/components/Texts/texts.jsx";
import Jogo from "/src/components/Jogo/jogo.jsx";
import Pagination from "/src/components/Pagination/pagination.jsx";
import Adicionar from "/src/components/Adicionar/add.jsx";

const Todos = () => {
  return (
    <>
      <Text text="Todos os Jogos" />
      <div className="games-container flex-row align-container-center">
      {/* <Jogo game_name="Red Dead Redemption 2" image="https://i1.wp.com/www.lifeisxbox.eu/wp-content/uploads/2019/12/rdr2.jpg?fit=1080,1080" discount="-25%" price="R$79,90"/><Jogo game_name="Hades" image="https://th.bing.com/th/id/OIP.ZV0qIIETZi9QJfw9C9tLXAHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/><Jogo game_name="Subnautica" image="https://th.bing.com/th/id/OIP.sqphuwgmI4piFihZ0OLnSgHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/><Jogo game_name="Don't Starve Together" image="https://th.bing.com/th/id/OIP.b7crJu_DVeZe-HVSIIViQAHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/>
        <Jogo game_name="Terraria" image="https://th.bing.com/th/id/OIP.WOPyTWkkh-_n4gxfGFhAOgAAAA?rs=1&pid=ImgDetMain" discount="-100%" price="Gratuito"/>
        <Jogo game_name="The Legend of Zelda: Breath of the Wild" image="https://tinfoil.media/i/01007EF00011E000/0/0/d3c210e61e8487200fc4c344987243a60257838187a69a6a81c42d7447d5d192" discount="-20%" price="R$159,90"/>
        <Jogo game_name="God of War: Ragnarok" image="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" discount="-20%" price="R$259,90"/>
        <Jogo game_name="Cyberpunk 2077" image="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png" discount="-20%" price="R$259,90"/>
        <Jogo game_name="Minecraft" image="https://th.bing.com/th/id/OIP.PmmQxBhOzdM9oaY91WxSlgHaHa?rs=1&pid=ImgDetMain" discount="-80%" price="R$9,90"/>
        <Jogo game_name="Frostpunk II" image="https://th.bing.com/th/id/OIP.hDQHuo9xUEFy-D1JWWLqPQHaJG?rs=1&pid=ImgDetMain" discount="-20%" price="R$259,90"/>
        <Jogo game_name="Terraria" image="https://th.bing.com/th/id/OIP.WOPyTWkkh-_n4gxfGFhAOgAAAA?rs=1&pid=ImgDetMain" discount="-100%" price="Gratuito"/>
        <Jogo game_name="Minecraft" image="https://th.bing.com/th/id/OIP.PmmQxBhOzdM9oaY91WxSlgHaHa?rs=1&pid=ImgDetMain" discount="-80%" price="R$9,90"/>
        <Jogo game_name="Subnautica" image="https://th.bing.com/th/id/OIP.sqphuwgmI4piFihZ0OLnSgHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/>
        <Jogo game_name="God of War: Ragnarok" image="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" discount="-20%" price="R$259,90"/>
        <Jogo game_name="Don't Starve Together" image="https://th.bing.com/th/id/OIP.b7crJu_DVeZe-HVSIIViQAHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/>
        <Jogo game_name="Cyberpunk 2077" image="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png" discount="-20%" price="R$259,90"/>
        <Jogo game_name="Shadow Of Colossus" image="https://th.bing.com/th/id/OIP.i0VOV5mQvnSpqalqOGUZ4QHaHa?rs=1&pid=ImgDetMain" discount="-100%" price="Gratuito"/>
        <Jogo game_name="The Legend of Zelda..." image="https://tinfoil.media/i/01007EF00011E000/0/0/d3c210e61e8487200fc4c344987243a60257838187a69a6a81c42d7447d5d192" discount="-20%" price="R$159,90"/> */}
        <Adicionar />
      </div>
      <Pagination />
    </>
  )
}

export default Todos;