import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHome } from './Routes/Coordinator'

export const CriateTripPage = () => {
  const navigate = useNavigate()


  



  return (
    <div>
      <h1>Criar Viagem</h1>
      <input/>
      <input/>
      <input/>
      <input/>
      <input/>
      <button onClick={goToAdminHome(navigate)}>Voltar</button>
      <button>Criar</button>
    </div>
  )
}
