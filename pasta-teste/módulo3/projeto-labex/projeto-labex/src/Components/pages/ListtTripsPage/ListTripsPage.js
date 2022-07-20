import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from '../../../Routes/Coordinator';
import {HomeBody, HeaderStyled,Title,ButtonStyled} from './Styled.js';

export const ListTripsPage = () => {
  const navigate = useNavigate()

const useForm = (initialState) => {
const [form, setForm] = useState(initialState);
const onChange = (event) => event.target;
}
  
  

  const listaViagens = (event) => {
    event.preventDefault()
      // setLoading(true)
      const link = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips');
      axios.get(link,form).then((resposta) => {
        setTrip(resposta.data);
        // setLoading(false)
        console.log(resposta.data.trips)
      })
        .catch((erro) => {
          // setLoading(false)
          // setErro(erro.response.message)
          console.log(erro.response);
        });};
    


  
const viagensList = listaViagens.map((voyage)=>{
  return (
    <div key={voyage.id}>
      <p>{voyage.name}</p>
      <p>{voyage.planet}</p>
      <p>{voyage.durationDays}</p>
      <p>{voyage.date}</p>
      <p>{voyage.description}</p>
    </div>
  )
})
  return (
    <div>
      <HomeBody> 
        <HeaderStyled>   
      <ButtonStyled onClick={()=>goBack(navigate)}>Voltar</ButtonStyled>
      <Title>Nossas Viagens</Title>
      <ButtonStyled onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</ButtonStyled>
</HeaderStyled>
      {viagensList}

</HomeBody>
    </div>
  )
}
