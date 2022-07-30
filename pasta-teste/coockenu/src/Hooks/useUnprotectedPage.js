import { useLayoutEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { goToRecipesList } from '../Router/Cordinator'

export const UseUnProtectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(()=>{
    const token = localStorage.getItem('token')
    if (token){
        goToRecipesList(navigate)
    }
  },[navigate])
}
