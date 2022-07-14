import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from './Routes/Coordinator';


export const ListTripsPage = () => {
  const navigate = useNavigate()


  
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
        setErro(erro.response.message)
        console.log(erro.response);
      });
  }, []);

  

  return (
    <div>
      <h1>Lista de Viagens</h1>
      {/* <p>{trip.name}</p>
      <p>{trip.planet}</p>
      <p>{trip.durationDays}</p>
      <p>{trip.date}</p>
      <p>{trip.description}</p> */}
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>



    </div>
  )
}
