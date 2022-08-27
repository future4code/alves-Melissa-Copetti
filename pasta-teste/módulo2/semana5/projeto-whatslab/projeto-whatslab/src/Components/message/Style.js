
import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const MessageBox = styled.div`

font-family: 'Coming Soon', cursive;
font-weight: bold;
  max-width: 40%;
  height: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: ${(props) => props.position};
  align-self: ${(props) => {
    if (props.position === "right") {
      return "flex-end";
    } else {
      return "flex-start";
    }
  }};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => {
    if (props.position === "right") {
      return "#dcf8c6";
    } else {
      return "#ffffff";
    }
  }};
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
`;

export const UsernameContainer = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
  font-family: 'Righteous', cursive;
`;