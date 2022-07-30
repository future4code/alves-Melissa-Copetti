import { clear } from '@testing-library/user-event/dist/clear'
import axios from 'axios'
import {BASE_URL} from '../../Constants/Urls'
import { goToRecipesList } from '../Router/Cordinator'

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/user/login`,body) 
  .then((resposta)=>{
  localStorage.setItem("token", resposta.data.token)
  clear()
  goToRecipesList(navigate)
  }).catch((error)=>{
  alert(error.response.message)
  })
  }

  export const SignUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/user/signup`,body) 
  .then((resposta)=>{
  localStorage.setItem("token", resposta.data.token)
  clear()
  }).catch((error)=>{
  alert(error.response.message)
  })
  }