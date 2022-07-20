import styled from 'styled-components';
import Planeta from '../Imagens/Planeta.jpg'

export const MainLogin = styled.main`
 display:inline-flex;
 background: inherit;
 width: 250px;
 height: 350px;
 flex-direction:column;
 align-items: center;
border:black 5px solid;
padding: 5px 100px 5px 100px;
backdrop-filter: blur(6px);
border-radius:30px;

 `
export const LoginBody = styled.body`
max-width: 100%;
max-height:100%;
height:730px;
background-image:url(${Planeta});
background-repeat:no-repeat;
margin:0;
background-attachment: fixed;
 background-size: cover;
`

export const DivCard = styled.div`
display:flex;
justify-content: center;
align-items:center;
padding-top:150px;

`
export const ButtonStyled = styled.button`
margin:10px;
background-color:#043959;
color:#c5d9ed;
padding:10px;
border-radius:10px;
border: 3px solid #c5d9ed;
font-size:20px;
cursor: pointer;
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
export const Title = styled.h1`
color:#c5d9ed;
font-size:50px;
font-family: 'Chakra Petch', sans-serif;

`

export const ImputStyled = styled.input`
  display:flex;
  width:300px;
  margin:20px 5px 0px 10px;
  padding:15px;
  background:rgba(0,0,0,0.2);
  color:#fff;
  border:0;
  outline:none;
  font-size: 20px;
`
export const ButtonBox = styled.div`
display: inline-flex;
margin-top:50px;
justify-content:space-around;
`

