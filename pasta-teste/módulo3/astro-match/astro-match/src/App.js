import React  from 'react';
import { useState } from 'react';
import TelaMatchs from './Components/TelaMatchs';
import TelaPerfis from './Components/TelaPerfis';

function App() {

const [telaPerfis, setTelaPerfis] = useState("Tela Perfis")
const [telaMatchs, setTelaMatchs] = useState("tela Matchs")



  const trocaTela = () => {
   switch(telaPerfis){
case 'Tela Perfis':
   return(
    <TelaPerfis
    setTelaPerfis={setTelaPerfis}/>
   )
   case(telaMatchs):
   return(
    <TelaMatchs
      setTelaMatchs={setTelaMatchs}/>
   )
   default:
    <div>Página não encontrada!</div>
   }
  }
  

  return (
    <div>
      <container>
   
      </container>
    {trocaTela()}
       
    </div>
  );
}

export default App;
