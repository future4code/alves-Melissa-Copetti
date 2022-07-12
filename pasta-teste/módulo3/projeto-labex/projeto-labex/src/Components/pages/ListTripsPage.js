import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from './Routes/Coordinator';

export const ListTripsPage = () => {
  const navigate = useNavigate()


  
  const [trip, setTrip] = useState()


  useEffect(() => {
    const link = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips');
    axios.get(link).then((res) => {
      setTrip(res.data);
      console.log(res.data)
    })
      .catch((err) => {
        console.log(err.response);
      });
  }, [trip]);







  return (
    <div>
      <h1>Lista de Viagens</h1>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>



    </div>
  )
}
