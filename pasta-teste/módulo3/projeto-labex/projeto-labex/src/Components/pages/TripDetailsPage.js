import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from './Routes/Coordinator'

export const TripDetailsPage = () => {
  const navigate = useNavigate ()
  return (
    <div>
      <h1>Viagem</h1>
    
      <h3>Candidatos Pendentes</h3>
      <h3>Candidatos Aprovados</h3>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}
