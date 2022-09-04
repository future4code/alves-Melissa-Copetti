import React from "react";
import { useState } from "react";
import TelaMatchs from "./TelaMatchs/TelaMatchs";
import TelaPerfis from "./Tela Perfis/TelaPerfis";
import Perfis from "./Components/imagens/matchs.png";
import { Header, ImgButtonPerfis, ImgMatchs, MainCard, Title, TooltipCard, TooltipBox, Text  } from "./StyledApp";

function App() {
  const [telaAtual, setTelaAtual] = useState("Tela Perfis");

  const trocaTela = () => {
    switch (telaAtual) {
      case "Tela Perfis":
        return <TelaPerfis />;
      case "Tela Matchs":
        return <TelaMatchs />;
      default:
        <TelaPerfis />;
    }
  };
  function mudarDeTela() {
    if (telaAtual === "Tela Perfis") {
      setTelaAtual("Tela Matchs");
    } else {
      setTelaAtual("Tela Perfis");
    }
  }
  return (
    <MainCard>
      <Header>
        <Title>astromatch</Title>
  <TooltipCard>
      <ImgButtonPerfis onClick={mudarDeTela}>
          <ImgMatchs src={Perfis}></ImgMatchs>
        </ImgButtonPerfis>
        <TooltipBox>
          <Text><b>veja seus matchs</b></Text>
         
         </TooltipBox>
        </TooltipCard>
      </Header>
      {trocaTela()}
    </MainCard>
  );
}

export default App;
