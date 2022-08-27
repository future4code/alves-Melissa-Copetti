import styled from "styled-components";

export const MessageFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  height: 8vh;
`;

export const UserInput = styled.input`
  width: 20%;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

export const TextInput = styled.input`
  flex: 1;
  margin: 0 10px;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  position: relative;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  float: left;
  border-radius: 3px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  background-color: #2ecc71;
  border: none;
  border-bottom: 5px solid #27ae60;
  text-shadow: 0px -2px #27ae60;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  &:hover,
  &:active {
    -webkit-transform: translate(0px, 5px);
    -ms-transform: translate(0px, 5px);
    transform: translate(0px, 5px);
    border-bottom: 1px solid #2ecc71;
  }
`;

export const BoxInputs = styled.div`
  width: 553px;
  height: 80px;
  background: rgb(40, 40, 55);
  background: linear-gradient(
    344deg,
    rgba(40, 40, 55, 1) 0%,
    rgba(16, 16, 18, 1) 50%
  );
  box-shadow: 4px 6px 14px #00000036;
  border-radius: 3px;
  color: #f9f9f9;
  padding: 16px;
  transition: all 0.3s;
`;
