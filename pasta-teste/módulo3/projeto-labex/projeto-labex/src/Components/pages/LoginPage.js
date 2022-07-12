import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack, goToAdminHome } from './Routes/Coordinator';

export const LoginPage = () => {
  const navigate = useNavigate()


  return (
    <div>
<h1>Login</h1>
      <input/>
      <input/>
      <button onClick={() => goBack(navigate)} >Voltar</button>
      <button onClick={() => goToAdminHome(navigate)} >Entrar</button>

    </div>
  )
}
