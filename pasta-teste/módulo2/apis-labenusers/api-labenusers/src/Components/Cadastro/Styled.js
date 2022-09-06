import styled from "styled-components";

export const ButtonPage = styled.button`
  background: #a370f0;
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

export const ButtonAdd = styled.button`

  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0.75em, -1em);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: #ffe9e9;
    -webkit-transform: translate(0, 0.25em);
    transform: translate(0, 0.25em);
  }

  &:hover::before {
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0.5em, -1em);
    transform: translate3d(0, 0.5em, -1em);
  }

  &:active {
    background: #ffe9e9;
    -webkit-transform: translate(0em, 0.75em);
    transform: translate(0em, 0.75em);
  }

  &:active::before {
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0, -1em);
    transform: translate3d(0, 0, -1em);
  }
`;

export const Card = styled.div`
padding:30px;
display:flex;
 flex-direction:column;
 justify-content:space-evenly;
 margin-top:50px;
 cursor: pointer;
  width: 300px;
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

export const MainBack = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#ffc0cb;
background-image: radial-gradient(white 15%, transparent 16%),
radial-gradient(white 15%, transparent 16%);
background-size: 60px 60px;
background-position: 0 0, 30px 30px;
height:97vh;
`;

export const Inputs = styled.input`
 border: none;
 border-radius: 15px;
 padding: 15px;
 background-color: #e8e8e8;
 box-shadow: 6px 6px 12px #ffffff,
             -6px -6px 12px #c5c5c5;
 font-size: medium;
 font-weight: bold;
 max-width: 200px;
 margin:10px;

&:focus {
 outline-color: white;
 place-content: "Enter your message!";
}
`

export const Title = styled.h1`
font-family: 'Lobster', cursive;
display:flex;
justify-self:center;
color:#FF1493;


`

export const BoxInputs = styled.div`
display:flex;
align-items: center;
flex-direction:column;
`