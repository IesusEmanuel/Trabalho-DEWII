import React, { useState } from "react";
import "/src/App.css";
import Text from "/src/components/Texts/texts.jsx";
import Jogo from "/src/components/Jogo/jogo.jsx";
import Pagination from "/src/components/Pagination/pagination.jsx";
import Adicionar from "/src/components/Adicionar/add.jsx";


const Todos = () => {
  const [showAdd, setShowAdd] = useState(false);

  const mostrarAdd = () => {
    setShowAdd(!showAdd);  
  };
  
  return (
    <>
      <Text text="Todos os Jogos" />
      <button style={{  width: "3300px;", 
                        backgroundColor: "transparent",
                        border: "solid 1px black",
                        padding: "1rem 3rem",
                        cursor: "pointer",
                        marginLeft: "33%"}} onClick={ mostrarAdd } className="Adicionar Novo">+</button>
      <div className="games-container flex-row align-container-center">
      {showAdd && <Adicionar />}
      </div>
      {showAdd && <Pagination />}
    </>
  )
}

export default Todos;