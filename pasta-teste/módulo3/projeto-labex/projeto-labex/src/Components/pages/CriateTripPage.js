import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHome, goToLogin } from './Routes/Coordinator'
import { useEffect } from 'react';
import styled from 'styled-components';
import Viagem from './Imagens/Viagem.jpg';


const HomeBody = styled.body`
  max-width: 100%;
  max-height:100%;
  height:730px;
  background-image:url(${Viagem});
  background-repeat:no-repeat;
  margin:0;
  background-attachment: fixed;
  background-size: cover;
  `


const MainHome = styled.main`
   display:inline-flex;
   background: inherit;
   width: 700px;
   height: 400px;
   flex-direction:column;
   align-items: center;
  border:black 5px solid;
  padding: 5px 50px 5px 50px;
  backdrop-filter: blur(10px);
  border-radius:30px;
  margin-right:100px;
  
  `

const CardHome = styled.div`
  display:flex;
  justify-content: flex-end ;
  align-items:center;
  padding-top:80px;
  
  `
const ButtonStyled = styled.button`
  margin:10px;
  background-color:#043959;
  color:#c5d9ed;
  padding:10px;
  border-radius:10px;
  border: 3px solid #c5d9ed;
  font-size:20px;
  margin-left:30px;
  margin-right:30px;
  cursor: pointer;
&:hover {
  background-color:dodgerblue;
  box-shadow:inset 0 0 10px 10px #696969;
   

  }
  &:active {
    box-shadow: 0 0 10px #fff,
               0 0 20px #fff, 
               0 0 40px #fff, 
               0 0 80px #fff, 
              0 0 100px #fff;
 
  }
  `
const Title = styled.h1`
  color:silver;
  font-family: 'Chakra Petch', sans-serif;
  font-size:70px;
  margin-top:30px;
  text-shadow: 0.1em 0.1em 0.2em black;
  
  `
const ImputStyled = styled.input`
  display:flex;
  width:600px;
  margin:20px 5px 0px 10px;
  padding:15px;
  background:rgba(0.6,0,0,0.6);
  color:#fff;
  border:0;
  outline:none;
  font-size: 20px;

`
const HeaderStyled = styled.header`
backdrop-filter: blur(12px);
border-bottom:black 5px solid;
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
padding-bottom:1%;
padding-top:1%;
`















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






  return (
    <div>
      <HomeBody>
        <HeaderStyled>
          <ButtonStyled onClick={()=> goToAdminHome(navigate)}>Voltar</ButtonStyled>
          <Title>Criar Viagem</Title>
          <ButtonStyled>Criar</ButtonStyled>
        </HeaderStyled>
        <CardHome>
          <MainHome>
            <form>
              <ImputStyled />
              <ImputStyled />
              <ImputStyled />
              <ImputStyled />
              <ImputStyled />
            </form>
          </MainHome>
        </CardHome>
      </HomeBody>
    </div>
  )
}
