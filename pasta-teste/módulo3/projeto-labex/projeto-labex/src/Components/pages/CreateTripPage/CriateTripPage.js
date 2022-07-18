import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHome, goToLogin } from '../../../Routes/Coordinator'
import { useEffect } from 'react';
import { HomeBody, MainHome, CardHome, ButtonStyled, Title, HeaderStyled, ImputStyled } from './Styled';
import axios from 'axios';


const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      console.log("Não está logado!");
      navigate.push(goToLogin);
    }
  });
};

export const CriateTripPage = () => {
  const navigate = useNavigate()
  useProtectedPage();

  const [form, SetForm] = useState({id:"", name:"",description:"", planet:"", date:"", durationInDays:""})

  const onChange = (event) => {
    const {name,value} = event.target
    SetForm({...form, [name]:value})
  }

  const cadastroViagem = (event) => {
    event.preventDefault()
    console.log(form)
    const link = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips'
  
  axios
  .post(link, form)
    .then((resposta) => {
      console.log(resposta.data)

    }).catch((erro) => {
      console.log(erro.response)
    })
}



return (
  <div>
    <HomeBody>
      
          <form onSubmit={cadastroViagem}>
          <HeaderStyled>
        <ButtonStyled onClick={() => goToAdminHome(navigate)}>Voltar</ButtonStyled>
        <Title>Criar Viagem</Title>
            <ButtonStyled >Criar</ButtonStyled>
      </HeaderStyled>
      <CardHome>
        <MainHome>
            <ImputStyled
            name="name"
              placeholder="Nome"
              type="text"
              value={form.name}
              onChange={onChange}
              required
              pattern="[A-Za-Z ']{5,}"
              title={'Seu nome deve ter no mínimo 5 letras'}
             />
           <select name="planet">
           <option value="planet"
           required>{form.planet}
           </option>
         </select>
            <ImputStyled
            name="date"
            type="date"
            value={form.data}
            onChange={onChange}
            required
              placeholder="Data" />

            <ImputStyled
            name="description"
              placeholder="Descrição"
              type="text" 
              value={form.description}
              onChange={onChange}
              required
              pattern="[A-Za-Z ']{30,}"
              title={'Sua viagem deve ter no mínimo 30 dias'}
              />
            <ImputStyled
              placeholder="Duração em dias"
              name="duracaoInDays"
              type="number"
              required
              pattern={'^.{50,}$'}
              title={'Sua viagem deve ter no mínimo 50 dias'} />
        </MainHome>
      </CardHome>
          </form>
    </HomeBody>
  </div>
)
}
