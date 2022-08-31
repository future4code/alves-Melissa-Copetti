import { Container } from "@mui/system";
import styled from "styled-components";

export const ImgCard = styled.img`
  object-fit: cover contain;
  max-width: 100%;
  max-height: 100%;
  z-index: 1;
`;

export const QuadroImg = styled.div`
  height: 53vh;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
    position:relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  justify-self: center;
  box-shadow: #696969 0px 10px 20px;
`;

export const ImgFundo = styled.img`
  position: absolute;
  height: 100%;
    width: 100%;
  height: 90vh;
  width: 80vw;
  filter: blur(10px);
`;

export const ButtonsCardD = styled.button`
  --glow-color: #ff0000 ;
 --glow-spread-color: rgba(191, 123, 255, 0.781);
 --enhanced-glow-color: rgb(231, 206, 255);
 --btn-color: #FFFFFF;
 border: .25em solid var(--glow-color);
 padding: 0.6em 1em;
 color: var(--glow-color);
 font-size: 20px;
 font-weight: bold;
 background-color:#FFFFFF;
 border-radius: 7em;
 outline: none;
 text-shadow: 0 0 .5em var(--glow-color);
 position: relative;
 transition: all 0.3s;
& ::after {
 pointer-events: none;
 content: "";
 position: absolute;
 top: 120%;
 left: 0;
 height: 100%;
 width: 100%;
 background-color: var(--glow-spread-color);
 filter: blur(2em);
 opacity: .7;
 transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}
&:hover {
 color: var(--btn-color);
 background-color: var(--glow-color);

}

&:active {
 box-shadow: 0 0 0.6em .25em var(--glow-color),
        0 0 2.5em 2em var(--glow-spread-color),
        inset 0 0 .5em .25em var(--glow-color);
}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
 
 
`;
export const NameAge = styled.div`
  font-size: 25px;
  font-weight: normal;
  display: flex;
  align-self: center;
  margin-bottom: 1vh;
  margin-top:2vh;
`;


export const ButtonsCardL = styled.button `
 --glow-color:#03bb85 ;
 --glow-spread-color: rgba(191, 123, 255, 0.781);
 --enhanced-glow-color: rgb(231, 206, 255);
 --btn-color: #FFFFFF;
 border: .25em solid var(--glow-color);
 padding: 0.6em 0.8em;
 color: var(--glow-color);
 font-size: 20px;
 font-weight: bold;
 background-color:#FFFFFF;
 border-radius: 7em;
 outline: none;
 text-shadow: 0 0 .5em var(--glow-color);
 position: relative;
 transition: all 0.3s;

&::after {
 pointer-events: none;
 content: "";
 position: absolute;
 top: 120%;
 left: 0;
 height: 100%;
 width: 100%;
 background-color: var(--glow-spread-color);
 filter: blur(2em);
 opacity: .7;
 transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}

&:hover {
 color: var(--btn-color);
 background-color: var(--glow-color);

}

&:active {
 box-shadow: 0 0 0.6em .25em var(--glow-color),
        0 0 2.5em 2em var(--glow-spread-color),
        inset 0 0 .5em .25em var(--glow-color);
}

`

