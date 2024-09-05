import React from "react";
import "./avaliacoes.css";
import "/src/App.css";
import Avaliacao from "/src/components/Avaliacoes/avaliacao.jsx";
import Text from "/src/components/Texts/texts.jsx";

const Avaliacoes = () => {
  return (
    <>
      <section className="allAval flex-column align-container-center">
        <div className="flex-column align-container-center text-start">
          <Text text="Avaliacoes" />
        </div>
        <Avaliacao name="Maria Clara" desc="Tenho sentimentos mistos sobre este jogo. Vamos começar pelo que funciona: a mecânica de tiro é absolutamente fantástica. Cada arma tem um peso distinto e uma sensação única, tornando cada combate envolvente e satisfatório. Os gráficos também são de cair o queixo, com ambientes detalhados e efeitos de iluminação que realmente trazem a guerra para a sua tela." count="2" stars="4" game="Black Myth: Wukong"/>
      </section>
    </>
  )
}

export default Avaliacoes;