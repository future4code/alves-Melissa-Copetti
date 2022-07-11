import React from "react";
import axios from "axios";
import TelaPerfis from "./TelaPerfis";
import Limpar from "./imagens/Limpar.png";
import styled from "styled-components";

function Clear() {

const LimparMat = styled.img`
width:30px;
margin-top:20px;
`



const limparMatchs = () => {
const body ={
    message:"sucess"
}
axios 
.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/clear",body)
.then(
    (resposta) => {
      TelaPerfis.setProfile(resposta.data.id);
      TelaPerfis.getProfile(); 
      alert("Perfis excluídos com sucesso!")
    }
).catch((erro) => {
    console.log(erro)
});
};



    return(
<div>
<button onClick={limparMatchs}><LimparMat src={Limpar}></LimparMat></button>
</div>
    )
}
export default Clear()