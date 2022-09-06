import styled from "styled-components";

export const ButtonPage = styled.button`
  background: #FF1493;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;

`;

export const Card = styled.div`
padding:30px;
display:flex;
 flex-direction:column;
 justify-content:space-evenly;
 margin-top:50px;
 cursor: pointer;
  width: 800px;
  height: 400px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.2);
  transition: all 0.2s;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  &:hover {
    box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, 0.2);
  }
`;

export const IconButton = styled.div`
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
  right: 0.3em;
  transition: all 0.3s;
  &:hover {
    width: calc(100% - 0.6em);
  }
`;

export const SvgIcon = styled.svg`
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
  &:hover {
    transform: translateX(0.1em);
  }
`;

export const Title = styled.h1`
font-family: 'Lobster', cursive;
display:flex;
justify-self:center;
color:#a370f0;


`

export const MainBack = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#b19cd9;
background-image: radial-gradient(white 15%, transparent 16%),
radial-gradient(white 15%, transparent 16%);
background-size: 60px 60px;
background-position: 0 0, 30px 30px;
height:97vh;
`;

export const CardUsuario = styled.div`
display:flex;
 
width: 100px;
  height: 20px;
  border-radius: 20px;
  background:#e1a9e9;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  margin:15px;
  &:hover {
  border-color: #ed30cf;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  margin:18px;
 }
 
`

export const CardDedails = styled.div`
color: black;
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
`

 export const Usuario = styled.h3`
color:black;
font-size: 20px;
font-family: 'Exo 2', sans-serif;

`

export const CardButton = styled.button`
transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color:#ed30cf;
  color: #fff;
  font-size: 1rem;
  padding: .5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  &:hover {
  transform: translate(-50%, 50%);
  opacity: 1;
  }
`

 export const MainUsuarios = styled.div`
display:flex; 
 flex-direction:row;
 width:800px;
 height:500px; 
 flex-wrap:wrap;
 border:solid black;

 `

 export const Cabecalho = styled.div`
 display:flex;
 flex-direction:column;
 /* position:absolute; */
 align-items: center;
 
 
 `