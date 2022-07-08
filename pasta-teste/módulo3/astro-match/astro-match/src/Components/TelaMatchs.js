import React  from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
// import TelaPerfis from './TelaPerfis';

function TelaMatchs(props) {
  const[matchesList, setMatchesList]= useState([])


  useEffect(()=>{
    getMatchs()
  },[])


  const getMatchs = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/matches").then(
        (resposta) => {
          setMatchesList(resposta.data)
          console.log(resposta.data)
        }
      ).catch((erro) => {
        console.log(erro)
      });
  };
  console.log("Match", matchesList)

  return (
    <main>
      <h1>astromatch</h1>
      <button onClick={props.TelaPerfis}>Ver Perfis</button>
    {matchesList}
    </main>
  );
}

export default TelaMatchs;
