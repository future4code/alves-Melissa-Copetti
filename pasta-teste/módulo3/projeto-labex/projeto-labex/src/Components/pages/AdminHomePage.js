import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToCriateTripPage } from './Routes/Coordinator';

export const AdminHomePage = () => {
  const navigate = useNavigate()



  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={()=>goToHomePage(navigate)}>Voltar</button>
      <button onClick={()=>goToCriateTripPage(navigate)} >Criar Viagem</button>
      <button onClick={()=>goToHomePage(navigate)}>Logout</button>
    </div>
  )
}
