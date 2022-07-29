import React from 'react'
import Logo from '../../Assets/logo.jpg'
import { LogoImg, ScreenContainer } from '../LoginPage/Styled'
import { SingUpForm } from './SingUpForm'

export const SingUpPage = () => {
  return (

    <ScreenContainer>
      <LogoImg src={Logo}/>
      <SingUpForm/>
      </ScreenContainer>
  )
}
