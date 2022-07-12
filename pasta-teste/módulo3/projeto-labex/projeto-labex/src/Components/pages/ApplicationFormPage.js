import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from './Routes/Coordinator';

export const ApplicationFormPage = () => {
const navigate = useNavigate ()



  return (
    <div>
      <h1>Inscrever-se para uma viagem</h1>
<button onClick={()=>goBack(navigate)}>Voltar</button>
<button >Enviar</button>


    </div>
  )
}
