import React from 'react'
import { ScreenContainer, LogoImg, SignUpButtonContainer } from './Styled'
import Logo from '../../Assets/logo.png'
import Button from '@material-ui/core/Button'
import {LoginForm} from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToSingUpPage } from '../../Router/Cordinator'
import axios from 'axios'
import {BASE_URL} from '../../Constants/Urls'

const login = () => {
  axios.post(`${BASE_URL}/user/login`)  
}
export const LoginPage = () => {
  const navigate = useNavigate()
  
  return (
    <ScreenContainer>
      <LogoImg src={Logo}/>
     <LoginForm/>
     <SignUpButtonContainer>
      <Button
      onClick={()=>goToSingUpPage(navigate)}
      type='submit'
      fullWidth
      variant={"text"}
      color={"primary"}
      margin={"normal"}
      >
        Não Possui Conta? Cadastre-se!
      </Button>
     </SignUpButtonContainer>
      </ScreenContainer>
  )
}
