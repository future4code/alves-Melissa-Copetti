import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack, goToAdminHome } from './Routes/Coordinator';
import { useState } from 'react';
import axios from 'axios';

export const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password
    };
    axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/login', body)
    .then((resposta) => {
      console.log("deu certo!",resposta.data.token);
      localStorage.setItem("token", resposta.data.token);
      navigate.push(goToAdminHome)
    
    }).catch((erro) => {
      console.log(erro)
    })
  }


  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={() => goBack(navigate)} >Voltar</button>
      <button onClick={onSubmitLogin} >Entrar</button>

    </div>
  )
}
