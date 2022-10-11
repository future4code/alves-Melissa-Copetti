import styled from "styled-components";

export const CardLista = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 3rem;
`;

export const CardA = styled.div`
  backdrop-filter: blur(22px) saturate(90%);
  -webkit-backdrop-filter: blur(22px) saturate(90%);
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 150px;
  width: 600px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  color: white;
  box-shadow: -1rem 0 3rem #000;
  backdrop-filter: blur(10px) saturate(90%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  transition: 0.2s;
  :hover {
    transform: translateY(-1rem);
    :not(:first-child) {
      margin-left: -130px;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: "DM Serif Display", serif;
  font-size: xx-large;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 20px;
  padding: 0.5rem 3em;
  font-family: "Alfa Slab One", cursive;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  /* font-weight: 500; */
  color: #000;
  background-color: #fff;
  border: 2px solid #23c483;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #23c483;
    color: #fff;
  }
`;

export const CardCart = styled.div`
  width: 600px;
  height: 400px;
  display:flex;
  flex-direction:column;
  /* justify-content:space-between; */
  position:center;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  :hover {
    border-color: #ff2400;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const CardDetails = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  justify-content: center;

`;

export const CardButton = styled.button`
  font-family: "Alfa Slab One", cursive;
  letter-spacing: 2.5px;
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #ff2400;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  :hover {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export const TextBody = styled.h3`
  color: rgb(134, 134, 134);
`;

/*Text*/
export const Text = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  font-family: "DM Serif Display", serif;
`;

export const ButtonRemove = styled.button`
width:90px;
 border-radius: 1rem;
  border: none;
  background-color: #ff2400;
  color: #fff;
  /* padding: 0.5rem 1rem; */
  position: absolute;
  margin:0;
`

export const DivGrid = styled.div`
grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25% ;
`
export const HeaderGrid = styled.header`
grid-column-end:2;
grid-column-start: 1;
`
export const MainGrid = styled.main`
grid-column-end:2;
grid-column-start: 1;
`
export const Sidebar = styled.div`
`