import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LimparMatchs from "./LimparMatchs";
import { CardMatch } from "./Styled";


function TelaMatchs(props) {
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    getMatchs();
  }, []);

  const getMatchs = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/matches"
      )
      .then((resposta) => {
        setMatchesList(resposta.data.matches);
        console.log(resposta.data.matches);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const listaDeMatchs = matchesList.map((match) => {
    return (
      <div>
      <CardMatch>
        <img src={match.photo}></img>
        <p>{match.name}</p>
      <footer>{LimparMatchs}</footer>
      </CardMatch>
      </div>
    );
  });

  return <main>{listaDeMatchs}</main>;
}

export default TelaMatchs;
