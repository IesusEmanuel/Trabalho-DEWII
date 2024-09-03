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
        <Avaliacao name="Maria Clara" desc="Tenho sentimentos mistos sobre este jogo. Vamos começar pelo que funciona: a mecânica de tiro é absolutamente fantástica. Cada arma tem um peso distinto e uma sensação única, tornando cada combate envolvente e satisfatório. Os gráficos também são de cair o queixo, com ambientes detalhados e efeitos de iluminação que realmente trazem a guerra para a sua tela." count="2" stars="4"/>
        <Avaliacao name="João Pedro" desc="Infelizmente, este jogo foi uma grande decepção para mim. Começando com a jogabilidade, que deveria ser o ponto forte de qualquer FPS, tudo parece incrivelmente sem vida. " count="8" stars="2"/>
        <Avaliacao name="IZyss" desc="Sinceramente, este jogo foi uma experiência frustrante do início ao fim. A começar pela jogabilidade, que deveria ser o coração de qualquer FPS, aqui ela é simplesmente desastrosa. As armas parecem de brinquedo, sem qualquer sensação de peso ou impacto. Cada tiro parece vazio, e o feedback é tão ruim que você se pergunta se está realmente acertando os inimigos." count="2" stars="1"/>
      </section>
    </>
  )
}

export default Avaliacoes;