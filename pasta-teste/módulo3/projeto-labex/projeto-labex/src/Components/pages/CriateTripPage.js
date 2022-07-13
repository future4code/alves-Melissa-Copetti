import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHome, goToLogin} from './Routes/Coordinator'
import { useEffect } from 'react';


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

export const CriateTripPage = () => {
  const navigate = useNavigate()
  useProtectedPage();


  



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
