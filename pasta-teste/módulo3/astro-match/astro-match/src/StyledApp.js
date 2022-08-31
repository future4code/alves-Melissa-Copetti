import styled from "styled-components"

export const MainCard = styled.div`
margin-top:5vh;
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
height:5vh;
margin-top:2vh;
cursor: pointer;

`

export const Header = styled.header`
display:grid;
grid-template-columns: 70% 30%;
margin-bottom:2vh;

`
export const ImgMatchs = styled.img`
width:40px;
&:hover {
    width:6.5vw;  
}
`

export const Title = styled.h1`
margin-top:2vh;
position:static;
margin-left:5vw;
`
 
  