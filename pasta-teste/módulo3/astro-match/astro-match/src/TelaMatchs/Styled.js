import styled from "styled-components";


export const CardMatch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  /* border: 5px solid silver; */
  border-radius: 30px;
  margin-bottom: 6vh;
  padding: 1rem;
  width: 30vw;
  box-shadow: 15px 15px 30px #696969,
             -15px -15px 30px silver;
  p {
    font-size: 20px;
    font-family: "Arima", cursive;
  }
  img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    margin-right: 15px;
  }
  
`;

export const LimparMat = styled.img`
width:30px;
margin-top:20px;
cursor:pointer;
`

export const TooltipBox = styled.div`
   visibility: hidden;
 width: 9em;
 background-color: rgba(0, 0, 0, 0.253);
 color: #fff;
 text-align: center;
 border-radius: 6px;
 padding: 5px 0;
 position: absolute;
 z-index: 1;
 /* top: 25%; */
 right: 90%;

   &:before {
    content: "";
 position: absolute;
 border-style: solid;
 border-color: transparent rgba(0, 0, 0, 0.253) transparent transparent;;
   }
`;
export const TooltipCard = styled.div`
    position: relative;
   & ${LimparMat}:hover + ${TooltipBox} {
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