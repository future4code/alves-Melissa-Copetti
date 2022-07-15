import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToCriateTripPage, goToLogin } from './Routes/Coordinator';
import {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ceu from './Imagens/Ceu.jpg'

const HomeBody = styled.body`
max-width: 100%;
max-height:100%;
height:730px;
background-image:url(${Ceu});
background-repeat:no-repeat;
margin:0;
background-attachment: fixed;
 background-size: cover;
`
const Title = styled.h1`
color:#c5d9ed;
font-size:70px;
font-family: 'Chakra Petch', sans-serif;
text-shadow: 0.1em 0.1em 0.2em black;

`
const ButtonStyled = styled.button`
margin:10px;
background-color:#043959;
color:#c5d9ed;
padding:10px;
border-radius:10px;
border: 3px solid #c5d9ed;
font-size:20px;
margin-left:30px;
margin-right:30px;
margin-top:100px;
font-family: 'Chakra Petch', sans-serif;
cursor: pointer;
&:hover {
  background-color:dodgerblue;
  box-shadow:inset 0 0 10px 10px #696969;
   

  }
  &:active {
    box-shadow: 0 0 10px #fff,
               0 0 20px #fff, 
               0 0 40px #fff, 
               0 0 80px #fff, 
              0 0 100px #fff;
 
  }
`
const HeaderStyled = styled.header`
backdrop-filter: blur(6px);
border-bottom:black 5px solid;
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
padding-bottom:3%;
padding-top:3%;
`




const useProtectedPage = () => {
  const navigate = useNavigate ();
  

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token === null) {
      console.log("Não está logado!");
      navigate.push(goToLogin);
    }
  },);
};


export const AdminHomePage = () => {
  const navigate = useNavigate()
  useProtectedPage();
  const [trip, setTrip] = useState()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState()

  useEffect(() => {
    setLoading(true)
    const link = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips');
    axios.get(link).then((res) => {
      setTrip(res.data);
      setLoading(false)
      console.log(res.data.trips)
    })
      .catch((erro) => {
        setLoading(false)
        setErro(erro.response)
        console.log(erro.response);
      });
  }, []);




  // const listTrip = trip.map((viagens)=>{
  //   return <div
  //   key={viagens.id}
  //   onClick={()=>goToTripDetails(navigate, viagens.id)}>
  //     {viagens.name}</div>
  // })



  return (
    <div>
<HomeBody>
  <HeaderStyled>   
    <ButtonStyled onClick={()=>goToHomePage(navigate)}>Voltar</ButtonStyled>
      <Title>Painel Administrativo</Title>
      <ButtonStyled onClick={()=>goToCriateTripPage(navigate)} >Criar Viagem</ButtonStyled>
      <ButtonStyled onClick={()=>goToHomePage(navigate)}>Logout</ButtonStyled>
      </HeaderStyled>
   </HomeBody>
   {/* {listTrip}  */}
   </div>
  )
}
