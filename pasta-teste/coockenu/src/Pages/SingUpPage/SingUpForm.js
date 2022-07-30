import React from 'react'
import {TextField} from '@material-ui/core/TextField'
import {Button} from '@material-ui/core/Button'
import {useNavigate} from 'react-router-dom'
import useForm from '../../Hooks/UseForm'
import { SignUpButtonContainer } from '../LoginPage/Styled'
import { goToLogin } from '../../Router/Cordinator'
import { SignUp } from '../../Service/User'


export const SingUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({name:''}, {password:''}, {email:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp(form,clear,navigate)
    }

   
  return (
    <form onSubmit={onSubmitForm}>
        <SignUpButtonContainer>
            <InputsContainer>
            <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            type={'text'}
            />
            <TextField
            value={form.email}
            name={'email'}
            label={'E-mail'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            type={'email'}
            />
            <TextField
            value={form.password}
            name={'password'}
            label={'Senha'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            type={'password'}/>
            </InputsContainer>
            <Button 
            onClick={()=>goToLogin(navigate)}
            color={'primary'}
            variant={'contained'}
            type={'submit'}>
                Fazer Cadastro
            </Button>
        </SignUpButtonContainer>

    </form>
  )
}
