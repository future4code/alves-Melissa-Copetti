import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToCriateTripPage, goToLogin, goToTripDetails } from '../../../Routes/Coordinator';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HomeBody, ButtonStyled, Title, HeaderStyled } from './Styled';
import Lixeira from '../Imagens/Lixeira.png'


const useProtectedPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      console.log("Não está logado!");
      navigate.push(goToLogin);
    }
  });
};


export const AdminHomePage = () => {
  const navigate = useNavigate()
  useProtectedPage();
  const [trip, setTrip] = useState()


  useEffect(() => {
    const link = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips');
    axios.get(link).then((resposta) => {
      setTrip(resposta.data);

      console.log(resposta.data.trips)
    })
      .catch((erro) => {

        console.log(erro.response);
      });
  }, []);


  const excluirViagem = () => {
    const link = (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips/${id}`)
    axios.delete(link).then((resposta) => {
      console.log(resposta);
    }).catch((erro) => {
      console.log(erro.response)
    });
  };


  const listTrip = trip.trips.map((viagens) => {
    return <div
      key={viagens.id}
      onClick={() => goToTripDetails(navigate, viagens.id)}>
      {viagens.name}</div>
  })



  return (
    <div>
      <HomeBody>
        <HeaderStyled>
          <ButtonStyled onClick={() => goToHomePage(navigate)}>Voltar</ButtonStyled>
          <Title>Painel Administrativo</Title>
          <ButtonStyled onClick={() => goToCriateTripPage(navigate)} >Criar Viagem</ButtonStyled>
          <ButtonStyled onClick={() => goToHomePage(navigate)}>Logout</ButtonStyled>
        </HeaderStyled>
      </HomeBody>
      <div>
        {/* {listTrip} */}
        <button onClick={() => { excluirViagem }}>{Lixeira}</button>
      </div>
    </div>
  )
}
