import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToLogin } from '../../../Routes/Coordinator'

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




export const TripDetailsPage = () => {
useProtectedPage();
const navigate = useNavigate();
const [id, setId] = useState();

  useEffect(()=>{
const token = localStorage.getItem("token");
axios
.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trip/${id}
`, {
  headers: {
    auth:token
  }
})
.then((resposta)=>{
  setId(resposta.data.trips)
  console.log(resposta.data.trips)
}).catch((erro)=>{
console.log("Deu erro", erro.resposta.data)
})
  },[]);


  return (
    <div>
      <h1>Viagem</h1>
    <p></p>
      <h3>Candidatos Pendentes</h3>
      <button>Aprovar</button>
      <h3>Candidatos Aprovados</h3>
      <button>Reprovar</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}
