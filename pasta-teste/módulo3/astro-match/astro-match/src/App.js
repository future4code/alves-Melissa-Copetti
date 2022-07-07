import React  from 'react';
import { useState } from 'react';
import TelaMatchs from './Components/TelaMatchs';
import TelaPerfis from './Components/TelaPerfis';

function App(props) {

  const [outraTela, setOutraTela] = useState ("tela Perfis")

  const trocaTela = () => {
   if (outraTela === "tela Matchs"){
setOutraTela("TelaMatchs")
  }else{
    setOutraTela("TelaPerfis")
  }
};

  

  return (
    <div>
   <header>
   <h1>astromatch</h1>
        <button onClick={trocaTela}>Matchs</button>
   </header>
      {props.TelaPerfis}
       
    </div>
  );
}

export default App;
