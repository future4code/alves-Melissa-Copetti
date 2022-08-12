import React from 'react';
import { useState } from 'react';
import TelaMatchs from './Components/TelaMatchs';
import TelaPerfis from './Components/TelaPerfis';
import styled from 'styled-components';
import Perfis from './Components/imagens/matchs.png'

const MainCard = styled.div`
margin-top:50px;
border: 1px black;
width:347px;
height: 600px;
padding:5px;
border-radius:20px;
box-shadow: 10px 10px 10px 10px #696969;
flex-wrap: wrap;
  background:beige;
  display:flex;
  justify-content:center;

`

const ImgButtonPerfis = styled.button`
border:none;
margin-left:50px;
border-color:antiquewhite;
height:20px;
margin-top:5px;
`

const Header = styled.header`
display:flex;
justify-content: space-around;


`
const ImgMatchs = styled.img`
width:40px;

`



function App() {

  const [telaAtual, setTelaAtual] = useState("Tela Perfis")

  const trocaTela = () => {
    switch (telaAtual) {
      case 'Tela Perfis':
        return (
          <TelaPerfis />
        )
      case 'Tela Matchs':
        return (
          <TelaMatchs />
        )
      default:
        <TelaPerfis />
    }
  }
  function mudarDeTela() {
    if (telaAtual === 'Tela Perfis'){
      setTelaAtual('Tela Matchs')
    }else{
      setTelaAtual('Tela Perfis')
    }
}
  return (
    
      <MainCard>
 <Header>
        <h1>astromatch</h1>
        <ImgButtonPerfis onClick={mudarDeTela}><ImgMatchs src={Perfis}></ImgMatchs></ImgButtonPerfis>
      
      </Header>
      {trocaTela()}
     
</MainCard>
    
  );
}

export default App;
