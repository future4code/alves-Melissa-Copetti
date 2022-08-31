import styled from "styled-components"

export const MainCard = styled.div`
margin: 5vh;
border: 1px black;
width:25vw;
position:relative;
height: 90vh;
padding:1vw;
border-radius:20px;
box-shadow: 10px 10px 10px 10px #696969;
flex-wrap: wrap;
  background:beige;
  display:flex;
  justify-content:center;

`

export const ImgButtonPerfis = styled.button`
border:none;
margin-left:5vw;
border-color:antiquewhite;
cursor: pointer;

`

export const Header = styled.header`
display:grid;
grid-template-columns: 60% 40%;

`
export const ImgMatchs = styled.img`
width:4vw;
`

export const Title = styled.h1`
margin-top:1vh;
position:static;
margin-left:6vw;
`
 
  

export const TooltipBox = styled.div`
   visibility: hidden;
 width: 8em;
 background-color: rgba(0, 0, 0, 0.253);
 color: #fff;
 text-align: center;
 border-radius: 6px;
 padding: 5px 0;
 position: absolute;
 z-index: 1;
 /* top: 25%; */
 left: 110%;

   &:before {
    content: "";
 position: absolute;
 top: 50%;
 right: 100%;
 margin-top: -5px;
 border-width: 5px;
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