import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToCriateTripPage, goToLogin, goToTripDetails } from './Routes/Coordinator';
import {useEffect, useState} from 'react';
import axios from 'axios';

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




  const listTrip = trip.map((viagens)=>{
    return <div
    key={viagens.id}
    onClick={()=>goToTripDetails(navigate, viagens.id)}>
      {viagens.name}</div>
  })



  return (
    <div>
      <h1>Painel Administrativo</h1>
      
      <button onClick={()=>goToHomePage(navigate)}>Voltar</button>
      <button onClick={()=>goToCriateTripPage(navigate)} >Criar Viagem</button>
      <button onClick={()=>goToHomePage(navigate)}>Logout</button>
   {listTrip} 
   </div>
  )
}
