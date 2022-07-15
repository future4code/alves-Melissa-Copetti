import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from './Routes/Coordinator';
import styled from 'styled-components';
import Ovni from './Imagens/Ovni.jpg'


const AplicationBody = styled.body`
  max-width: 100%;
  max-height:100%;
  height:730px;
  background-image:url(${Ovni});
  background-repeat:no-repeat;
  margin:0;
  background-attachment: fixed;
  background-size: cover;
  `


const MainAplication = styled.main`
   display:inline-flex;
   background: inherit;
   width: 700px;
   height: 440px;
   flex-direction:column;
   align-items: center;
  border:black 5px solid;
  padding: 5px 80px 5px 80px;
  backdrop-filter: blur(10px);
  border-radius:30px;
  
  `

const CardHome = styled.div`
  display:flex;
  justify-content: center;
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
  cursor:pointer;
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
  font-size:50px;
  margin-top:50px;
  text-shadow: 0.1em 0.1em 0.2em black;
  
  `
const ImputStyled = styled.input`
  display:flex;
  width:600px;
  margin:20px 5px 0px 10px;
  padding:15px;
  background:rgba(0,0,0,0.6);
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
padding-bottom:2%;
padding-top:2%;
`
export const ApplicationFormPage = () => {
  const navigate = useNavigate()


  return (
    <div>
      <AplicationBody>
        <HeaderStyled>
          <ButtonStyled onClick={() => goBack(navigate)}>Voltar</ButtonStyled>
        <Title>Inscrever-se para uma viagem interplanetária!</Title>
         
         <ButtonStyled >Enviar</ButtonStyled>
         </HeaderStyled>
        <CardHome>
          <MainAplication>



           

            <form >
            <ImputStyled
                placeholder="Planeta"
                type="text"
              />

              <ImputStyled
                placeholder="nome"
                type="text"
              />
              <ImputStyled
                placeholder="idade"
                type="number"
                min={18}
              />
              <ImputStyled
                placeholder='Texto de Candidatura'
                rows="3"
                pattern={'^.{30,}$'}
                title='O texto deveter no mínimo 30 caracteres.'
                required />

              <ImputStyled
                placeholder="profissão"
                type="text"
                pattern={'^.{10,}$'}
                title='A profissão deve ter no mínimo 10 caracteres'
                required
              />
              <ImputStyled
                placeholder="País"
                type="text"
              />
            </form>

          </MainAplication>
        </CardHome>
      </AplicationBody>
    </div>
  )
}
