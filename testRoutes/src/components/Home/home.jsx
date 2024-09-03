import React from "react";
import "./home.css";
import "/src/components/Raiz/raiz.css";

const Home = () => {
  return (
    <section className="main-section">
      <h3 className="slogan white size-5 mont-600 uppercase">
        Entre no universo, onde aventuras ganham vida
      </h3>
      <aside className="buttons-container-main-section flex-row align-container-center">
        <button className="white transition mont-500 size-1 pointer">
          Explorar
        </button>
        <button className="white transition mont-500 size-1 pointer">
          Mais vendidos
        </button>
      </aside>
    </section>
  );
};

export default Home;