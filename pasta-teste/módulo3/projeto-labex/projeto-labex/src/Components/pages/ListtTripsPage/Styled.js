import Onibus from '../Imagens/Onibus.jpg';
import styled from 'styled-components';


export const HomeBody = styled.body`
max-width: 100%;
max-height:100%;
height:730px;
background-image:url(${Onibus});
background-repeat:no-repeat;
margin:0;
background-attachment: fixed;
 background-size: cover;
`
export const Title = styled.h1`
color:#c5d9ed;
font-size:70px;
font-family: 'Chakra Petch', sans-serif;
text-shadow: 0.1em 0.1em 0.2em black;


`

export const ButtonStyled = styled.button`
margin:10px;
background-color:#043959;
color:#c5d9ed;
padding:10px;
border-radius:10px;
border: 3px solid #c5d9ed;
font-size:20px;
margin-left:30px;
margin-right:30px;
margin-top:50px;
font-family: 'Chakra Petch', sans-serif;
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
export const HeaderStyled = styled.header`
backdrop-filter: blur(6px);
border-bottom:black 5px solid;
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
padding-bottom:2%;
padding-top:2%;
`