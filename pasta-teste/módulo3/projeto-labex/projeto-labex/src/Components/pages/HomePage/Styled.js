import styled from 'styled-components';
import Disco from '../Imagens/Disco.jpg';


export const HomeBody = styled.body`
max-width: 100%;
max-height:100%;
height:730px;
background-image:url(${Disco});
background-repeat:no-repeat;
margin:0;
background-attachment: fixed;
 background-size: cover;
`


export const MainHome = styled.main`
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

export const CardHome = styled.div`
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
margin-left:30px;
margin-right:30px;
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
font-family: 'Chakra Petch', sans-serif;
font-size:70px;
margin-top:50px;
`
export const ButtonBox = styled.div`
display: flex;
align-items:column;
margin-top:50px;
font-family: 'Chakra Petch', sans-serif;

`