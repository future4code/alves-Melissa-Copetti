import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToCriateTripPage, goToLogin } from './Routes/Coordinator';
import {useEffect} from 'react';

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





  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={()=>goToHomePage(navigate)}>Voltar</button>
      <button onClick={()=>goToCriateTripPage(navigate)} >Criar Viagem</button>
      <button onClick={()=>goToHomePage(navigate)}>Logout</button>
    </div>
  )
}
