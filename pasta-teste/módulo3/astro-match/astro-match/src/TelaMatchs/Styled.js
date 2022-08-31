import styled from "styled-components";


export const CardMatch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border: 5px solid silver;
  margin-bottom: 15px;
  padding: 15px;
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
