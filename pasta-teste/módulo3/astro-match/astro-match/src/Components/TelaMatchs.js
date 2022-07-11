import React  from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const CardMatch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 50px;
border: 5px solid silver;
margin-bottom: 15px;
padding: 15px;
p{
    font-size: 20px;
    font-family: 'Arima', cursive;

}
img{
    height: 70px;
    width: 70px;
    object-fit: cover;
    margin-right: 15px;
}

` 






function TelaMatchs(props) {
  const[matchesList, setMatchesList]= useState([])


  useEffect(()=>{
    getMatchs()
  },[])


  const getMatchs = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/matches").then(
        (resposta) => {
          setMatchesList(resposta.data.matches)
          console.log(resposta.data.matches)
        }
      ).catch((erro) => {
        console.log(erro)
      });
  };
  console.log("Match", matchesList)

  const listaDeMatchs = matchesList.map((match)=>{
    return(
      <CardMatch>
        <img src={match.photo}></img>
        <p>{match.name}</p>
      </CardMatch>
    )
  })

  return (
    <main>
    {listaDeMatchs}
    </main>
  );
}

export default TelaMatchs;
