import React from "react";
import axios from "axios";
import TelaPerfis from "../Tela Perfis/TelaPerfis";
import Limpar from "../Components/imagens/Limpar.png";
import { LimparMat, TooltipBox, TooltipCard, Text } from "./Styled";


function Clear() {
  const limparMatchs = () => {
    const body = {
      message: "sucess",
    };
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/clear",
        body
      )
      .then((resposta) => {
        TelaPerfis.setProfile(resposta.data.id);
        TelaPerfis.getProfile();
        alert("Perfis excluídos com sucesso!");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div>
         <TooltipCard>
      <button onClick={limparMatchs}>
        <LimparMat src={Limpar}></LimparMat>
        <TooltipBox>
        <Text><b>Limpar lista de matchs</b></Text>
     </TooltipBox> 
     </button>
      </TooltipCard>
    </div>
  );
}
export default Clear();
