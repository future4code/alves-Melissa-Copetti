import styled from "styled-components"



export const MainCard = styled.div`
margin: 5vh;
border: 1px black;
width:30vw;
position:relative;
height: 95vh;
padding:2vw;
border-radius:20px;
box-shadow: 10px 10px 10px 10px #696969;
flex-wrap: wrap;
  background:beige;
  display:flex;
  justify-content:center;
  @media screen and (max-width: 400px){
   position:relative;
    width:90vw;
    height:100vh;
    border-radius:20; 
    padding:15px;
 }

`

export const ImgButtonPerfis = styled.button`
border:none;
margin-bottom:0.9vh;
border-color:antiquewhite;
cursor: pointer;
@media screen {
   margin-left:8vw;
   width:90px;
}

`

export const Header = styled.header`
display:grid;
grid-template-columns: 50% 50%;

`
export const ImgMatchs = styled.img`
width:3vw;
@media screen {
   width:50px;
}
`

export const Title = styled.h1`
margin-top:1vh;
position:static;
margin-left:10vw;
`
 
  

export const TooltipBox = styled.div`
   visibility: hidden;
 width: 6em;
 background-color: rgba(0, 0, 0, 0.253);
 color: #fff;
 text-align: center;
 border-radius: 6px;
 padding: 5px 0;
 position: absolute;
 z-index: 1;
 bottom: 20%;
left: 73%;

   &:before {
    content: "";
 position: absolute;
 border-style: solid;
 border-color: transparent rgba(0, 0, 0, 0.253) transparent transparent;;
   }
`;
export const TooltipCard = styled.div`
    position: relative;
   & ${ImgButtonPerfis}:hover + ${TooltipBox} {
      visibility: visible;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      &:before {
         border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
      }
   }
`;

export const Text = styled.p`
color:white;
`