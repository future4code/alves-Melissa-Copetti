import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../../Routes/Coordinator';
import { AplicationBody, HeaderStyled, ButtonStyled, Title, ImputStyled, CardHome, MainAplication } from './Styled';
import { useState } from 'react';
import axios from 'axios';




export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  const [form, SetForm] = useState({name:"",age:"", applicationText:"", profession:"", country:"", trip:""})

  const onChange = (event) => {
    const {name,value} = event.target
    SetForm({...form, [name]:value})
  }


const tripInformation = (event) => {
  const link = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/copetti/trips/:id/apply')
  axios.get(link,form).then((resposta)=>{
    console.log(resposta.data)
  }).catch((erro)=>{
    console.log(erro.response)
  })
}






  return (
    <div>
      <AplicationBody>
        <HeaderStyled>
          <ButtonStyled onClick={() => goBack(navigate)}>Voltar</ButtonStyled>
          <Title>Inscreva-se para a sua viagem interplanetária!</Title>

          <ButtonStyled >Enviar</ButtonStyled>
        </HeaderStyled>
        <CardHome>
          <MainAplication>
            <form >
            <select name="planeta">
           <option value="planeta"
           required>{form.planeta}
           </option>
         </select>

              <ImputStyled
               placeholder="Nome"
               name="name"
               type="text"
               value={form.nome}
               onChange={onChange}
               required
               pattern="[A-Za-Z ']{5,}"
               title={'Seu nome deve ter no mínimo 5 letras'}
              />
              <ImputStyled
                placeholder="idade"
                type="number"
                name="age"
               value={form.age}
               onChange={onChange}
               required
               pattern={'^.{18,}$'}
               title={'Você deve ter mais de 18 anos'}
              />
              <ImputStyled
                placeholder='Texto de Candidatura'
                name="applicationText"
                rows="3"
                value={form.applicationText}
              onChange={onChange}
                pattern="[A-Za-Z ']{30,}"
                title='O texto deveter no mínimo 30 caracteres.'
                required />

              <ImputStyled
                placeholder="Profissão"
                type="text"
                name="profession"
                value={form.profession}
              onChange={onChange}
                pattern="[A-Za-Z ']{10,}"
                title='A profissão deve ter no mínimo 10 caracteres'
                required
              />
               <select name="country">
           <option value="country"
           required>{form.country}
           </option>
         </select>
         <ImputStyled
                placeholder="Viagem"
                type="text"
                name="trip"
                value={form.trip}
              onChange={onChange}
                required
              />
            </form>

          </MainAplication>
        </CardHome>
      </AplicationBody>
    </div>
  )
}
