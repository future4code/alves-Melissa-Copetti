import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from './Routes/Coordinator';
import Onibus from './Imagens/Onibus.jpg';
import styled from 'styled-components';


const HomeBody = styled.body`
max-width: 100%;
max-height:100%;
height:730px;
background-image:url(${Onibus});
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

`
const HeaderStyled = styled.header`
backdrop-filter: blur(6px);
border-bottom:black 5px solid;
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
padding-bottom:2%;
padding-top:2%;
`

export const ListTripsPage = () => {
  const navigate = useNavigate()


  
  const [trip, setTrip] = useState()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState()


  const listaViagens = (event) => {
    event.preventDefault()
      setLoading(true)
      const link = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips');
      axios.get(link).then((resposta) => {
        setTrip(resposta.data);
        setLoading(false)
        console.log(resposta.data.trips)
      })
        .catch((erro) => {
          setLoading(false)
          setErro(erro.response.message)
          console.log(erro.response);
        });};
    


  
// // const viagensList = listaViagens.map((voyage)=>{
//   // return (
//   //   <div key={voyage.id}>
//   //     <p>{voyage.name}</p>
//   //     <p>{voyage.planet}</p>
//   //     <p>{voyage.durationDays}</p>
//   //     <p>{voyage.date}</p>
//   //     <p>{voyage.description}</p>
//   //   </div>
//   )
// })
  return (
    <div>
      <HomeBody> 
        <HeaderStyled>   
      <ButtonStyled onClick={()=>goBack(navigate)}>Voltar</ButtonStyled>
      <Title>Nossas Viagens</Title>
      <ButtonStyled onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</ButtonStyled>
</HeaderStyled>
      {/* {viagensList} */}

</HomeBody>
    </div>
  )
}
