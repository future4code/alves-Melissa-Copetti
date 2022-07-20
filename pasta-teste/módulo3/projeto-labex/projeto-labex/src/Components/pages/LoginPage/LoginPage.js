import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack, goToAdminHome } from '../../../Routes/Coordinator';
import { useState } from 'react';
import axios from 'axios';
import {LoginBody,DivCard,MainLogin,ImputStyled, ButtonBox,ButtonStyled,Title} from './Styled'

export const LoginPage = () => {

const [form, setForm] = useState({email:"", password:""})
const navigate = useNavigate();


const onChange = (event) => {
  const {name,value} = event.target
  setForm({...form, [name]:value})
}


  const onSubmitLogin = (event) => {
    event.preventDefault()
    console.log(form)
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/login',form)
      .then((resposta) => {
        console.log("deu certo!",resposta);
        localStorage.setItem("token", resposta.data.token);
        goToAdminHome(navigate)

      }).catch((erro) => {
        console.log(erro.response)
      })
  }


  return (
    <LoginBody>
      <DivCard>
        <form onSubmit={onSubmitLogin}>
        <MainLogin>
          <Title>Login</Title>
        
          <ImputStyled
          name='email'
            placeholder="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'}
            title={'Digite um e-mail válido'}
          
          />
          <ImputStyled
          name='password'
            placeholder="senha"
            type="password"
            value={form.password}
            onChange={onChange}
            required
            pattern={'^.{6,}$'}
            title={'sua senha deve ter no mínimo 6 caracteres'}
          />
          <ButtonBox>
            <ButtonStyled onClick={() => goBack(navigate)} >Voltar</ButtonStyled>
            <ButtonStyled>Entrar</ButtonStyled>
          </ButtonBox>
        </MainLogin>
        </form>
      </DivCard>
    </LoginBody>
  )
}
