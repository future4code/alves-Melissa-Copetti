import React from 'react'
import useForm from '../../Hooks/UseForm'
import Button from '@material-ui/core/Button'
import { TextFields } from '@mui/icons-material'



export const Login = () => {
const [form, onChange, clear] = useForm({email:"", password:""})
  const onSubmitForm = (event) => {
event.preventDefault()
  }
  return (
    <ImputContainer>

      <form onSubmit={onSubmitForm}>
        <TextFields
        name={'email'}
        value={form.email}
        onChange={onChange}
        label={"E-mail"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        type={"email"}


        />

        <TextFields
        name={'password'}
        value={form.password}
        onChange={onChange}
        label={"senha"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        type={"password"}
/>
<Button
type='submit'
  fullWidth
  variant={"contained"}
  color={"primary"}
  margin={"normal"}
  >Login
</Button>
      </form>
      </ImputContainer>
  )
}
