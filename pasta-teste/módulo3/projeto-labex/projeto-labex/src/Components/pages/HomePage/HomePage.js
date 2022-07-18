import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToListTripPage } from '../../../Routes/Coordinator';
import {HomeBody, CardHome, MainHome, Title, ButtonBox, ButtonStyled} from './Styled'

export const HomePage = () => {
  const navigate = useNavigate()


  return (
    <HomeBody>
      <CardHome>
        <MainHome>
          <Title>LabeX</Title>
          <br />
          <ButtonBox>
          <ButtonStyled onClick={() => goToListTripPage(navigate)}>Viagens</ButtonStyled>
          <ButtonStyled onClick={() => goToLogin(navigate)}>Área do Administrador</ButtonStyled>
          </ButtonBox>
        </MainHome>
      </CardHome>
    </HomeBody>
  )
}
