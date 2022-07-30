import React from 'react'
import Logo from '../../Assets/logo.jpg'
import { UseUnProtectedPage } from '../../Hooks/useUnprotectedPage'
import { LogoImg, ScreenContainer } from '../LoginPage/Styled'
import { SingUpForm } from './SingUpForm'

export const SingUpPage = () => {
  UseUnProtectedPage()
  return (

    <ScreenContainer>
      <LogoImg src={Logo}/>
      <SingUpForm/>
      </ScreenContainer>
  )
}
